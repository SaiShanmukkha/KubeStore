export default async function handler(req, res) {
    if (req.method == "POST") {
        let categories_data = [];
        let categoriesAvailable = true;
        let currentIndex = 0;
      try {
        while (categoriesAvailable) {
          const response = await fetch(process.env.HYGRAPH_RW_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
            },
            body: JSON.stringify({
              query: `
                    query Assets {
                        categoriesConnection(skip: ${currentIndex}) {
                        edges {
                            node {
                            categoryName
                            id
                            }
                        }
                        pageInfo {
                            endCursor
                            hasNextPage
                            hasPreviousPage
                            pageSize
                            startCursor
                            }
                        }
                    }
              `,
            }),
          });
          const json = await response.json();
          if (response.ok) {
            currentIndex += json.data.categoriesConnection.pageInfo.pageSize;
            categoriesAvailable =
              json.data.categoriesConnection.pageInfo.hasNextPage;
            for (let nd of json.data.categoriesConnection.edges) {
              categories_data.push(nd.node);
            }
          } else {
            return res.status(400).json({ message: "Error Occurred while fetching transactions." });
          }
        }
        return res.status(200).json({ categories: categories_data });
      } catch (e) {
        res.status(500).json({ meesage: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ meesage: "Method Not Supported." });
    }
  }
  