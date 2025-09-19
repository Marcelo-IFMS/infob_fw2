// app.get('/db', async (req, res) => {
//   try {
//     await client.connect();
//     await client.db("admin").command({ ping: 1 });
//     const movies = await client.db('sample_mflix').collection('users').find({ name: /^Ma/ }).toArray();
//     res.json({ msg: "Arquivo db.js executado", resultado: movies });

//   } finally {
//     //encerra ocorrendo erro
//     await client.close();
//   }

// })