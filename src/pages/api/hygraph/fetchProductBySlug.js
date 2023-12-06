export default async function handler(req, res) {
    if (req.method == "POST") {
      try {
        const response = await fetch(process.env.HYGRAPH_RW_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
        },
        body: JSON.stringify({
            query: ``,
        }),
        });
        const json = await response.json();
        if (response.ok) {
            return res.status(200).json({ categories: json });
        }
        else {
            return res
              .status(400)
              .json({ message: "Error Occurred while fetching transactions." });
          }
      } catch (e) {
        res.status(500).json({ meesage: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ meesage: "Method Not Supported." });
    }
  }
  