export default function handler(req, res) {
    if (req.method === 'POST') {
      const body = req.body;
  
      return res.status(200).json({
        status: "received",
        timestamp: new Date().toISOString(),
        text: body
      });
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  }
  