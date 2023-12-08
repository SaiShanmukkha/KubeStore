export default async function handler(req, res) {
    if (req.method == "POST") {
      const slug = req.body;
      try {
        const response = await fetch(process.env.HYGRAPH_RW_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
            query: `
            query Assets {
              product(
                where: {slug: "${slug}"}
              ) {
                id
                name
                productVariations {
                  color
                  discount
                  gender
                  images {
                    id
                    fileName
                    url
                  }
                  id
                  price
                  size
                }
              }
            }
                      
            `,
        }),
        });
        const json = await response.json();
        console.log(json);
        if (response.ok) {
            return res.status(200).json({ product: json.data.product });
        }
        else {
            return res
              .status(400)
              .json({ message: "Error Occurred while fetching data." });
          }
      } catch (e) {
        res.status(500).json({ meesage: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ meesage: "Method Not Supported." });
    }
  }
  