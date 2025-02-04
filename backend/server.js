import express from "express";
import cors from "cors";
import admin from "firebase-admin"


// Initialize Firebase Admin SDK
import serviceAccount from './secret_key.json' assert { type: 'json' };
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.static('dist'))

// 
app.get('/', (req, res) => {
    res.send('Hello from App Engine!');
  });
  

// Submit message
app.post("/api/messages", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const messageJson = {
      name,
      email,
      message,
      date: new Date(),
    };
    const messageDb = db.collection('messages'); 
    const response = await messageDb.doc().set(messageJson);
    res.send(response);
    console.log("Message submit success.")
  } catch (error) {
    res.send(error);
    console.log("Message submit fail.")
  }
});



const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
