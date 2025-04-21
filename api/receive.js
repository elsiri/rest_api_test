export default function handler(req, res) {
    if (req.method === 'POST') {
      const { text } = req.body;
  
      return res.status(200).json({
        status: "received",
        timestamp: new Date().toISOString(),
        text: text || "No text provided"
      });
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  }
  