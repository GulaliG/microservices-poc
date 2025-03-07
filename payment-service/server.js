const express = require("express");
const app = express();
const PORT = 4002;

app.use(express.json());

app.get("/payments", (req, res) => {
    res.json({ payments: [{ id: 1, amount: 100 }, { id: 2, amount: 250 }] });
});

app.listen(PORT, () => {
    console.log(`Payment Service running on port ${PORT}`);
});
