const express = require("express");
const app = express();
const PORT = 4001;

app.use(express.json());

app.get("/users", (req, res) => {
    res.json({ users: [{ id: 1, name: "Ali" }, { id: 2, name: "Veli" }] });
});

app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
