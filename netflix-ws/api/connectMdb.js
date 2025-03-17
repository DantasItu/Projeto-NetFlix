import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://admin:p6AeFo7EfSkYGJeO@cluster0.jssai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("ProjetoNetflix");

// const filmesCollection = await db.collection("filmes").find({}).toArray();

// console.log(filmesCollection);