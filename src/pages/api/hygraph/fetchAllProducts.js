export default async function handler(req, res) {
  if (req.method == "POST") {
    try {
      let products_data = [];
      let productsAvailable = true;
      var currentIndex = 0;

      while (productsAvailable) {
        const response = await fetch(process.env.HYGRAPH_RW_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.HYGRAPH_TOKEN}`,
          },
          body: JSON.stringify({
            query : `
            query Assets {
              productsConnection(skip: ${currentIndex}, stage: PUBLISHED) {
                edges {
                  node {
                    id
                    name
                    slug
                    productVariations {
                      color
                      createdAt
                      discount
                      gender
                      id
                      price
                      size
                      quantity
                      images {
                        fileName
                        id
                        url(transformation: {image: {resize: {height: 400, width: 400}}})
                      }
                    }
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
          `
          }),
        });
        const json = await response.json();
        if (response.ok) {
          console.log(json.data.productsConnection.pageInfo);
          currentIndex += parseInt(json.data.productsConnection.pageInfo.pageSize);
          console.log("CurrentINdex = ", currentIndex);
          productsAvailable = json.data.productsConnection.pageInfo.hasNextPage;
          for (let nd of json.data.productsConnection.edges) {
            products_data.push(nd.node);
          }
        } else {
          return res.status(400).json({ message: "Error Occurred while fetching transactions." });
        }
      }
      return res.status(200).json({ products: products_data });
    } catch (e) {
      console.log(e);
      res.status(500).json({ meesage: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ meesage: "Method Not Supported." });
  }
}
