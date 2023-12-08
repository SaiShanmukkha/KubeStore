export default async function handler(req, res) {
    if (req.method == "POST") {
      try {
        let products_data = [];
        let productsAvailable = true;
        var currentIndex = 0;
        const data  = req.body;
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
                orderHistoriesConnection(where: {userId: "${data}"}, skip: ${currentIndex}, stage: PUBLISHED) {
                  edges {
                    node {
                        orderItems
                        orderStatus
                        oData
                        id
                        createdAt
                        totalCost
                        userId
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
         
            currentIndex += parseInt(json.data.orderHistoriesConnection.pageInfo.pageSize);
          
            productsAvailable = json.data.orderHistoriesConnection.pageInfo.hasNextPage;
            for (let nd of json.data.orderHistoriesConnection.edges) {
              products_data.push(nd.node);
            }
          } else {
            return res.status(400).json({ message: "Error Occurred while fetching transactions." });
          }
        }
        return res.status(200).json({ orders: products_data });
      } catch (e) {
        console.log(e);
        res.status(500).json({ meesage: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ meesage: "Method Not Supported." });
    }
  }
  