import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const { name, email, message } = data;
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.jw9qb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`,
        { useUnifiedTopology: true }
      );
    } catch (err) {
      res.status(500).json({ message: 'Cloud not connect to database' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: 'stored message failed' });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: 'Successfully stored message', message: newMessage });
  }
}

export default handler;
