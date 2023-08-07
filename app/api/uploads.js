// app/api/upload.js
import multer from "multer";

const upload = multer({ dest: "uploads/" }); // File upload destination

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  upload.single("file")(req, res, (err) => {
    if (err) {
      return res.status(400).json({ error: "File upload failed." });
    }

    return res.status(200).json({ message: "File uploaded successfully." });
  });
}
