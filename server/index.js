const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.get('/api/birthday-message', (req, res) => {
    res.json({
        message: "Chúc mừng sinh nhật chị yêu!"
    });
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});

module.exports = app;