const client = require('../config/db')
module.exports = function (app) {
    app.get('/db', async (req, res) => {
        try {
            await client.connect();
            const movies = await client.db('sample_mflix').collection('users').find({ name: /^Ma/ }).toArray();
            res.json({ msg: "Arquivo db.js executado", resultado: movies });
            
        } finally {
            //encerra ocorrendo erro
            await client.close();
        }
        
    })
}
