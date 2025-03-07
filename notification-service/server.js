const express = require("express");
const app = express();
const PORT = 4003;

app.use(express.json());

app.get("/notifications", (req, res) => {
    res.json({ notifications: ["Hoş geldin!", "Ödemen alındı.", "Yeni mesajın var."] });
});

app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
