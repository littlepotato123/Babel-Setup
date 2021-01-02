const app = require('express')();

app.get('/', (req, res) => {
    res.send('Hi');
})

const PORT = process.env.PORT | 4000;
app.listen(PORT);