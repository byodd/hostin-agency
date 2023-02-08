const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).json({message:'Hello World'});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})