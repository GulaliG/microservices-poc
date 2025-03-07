const express = require("express");
const httpProxy = require("http-proxy");

const app = express();
const proxy = httpProxy.createProxyServer({});
const PORT = 4000;

app.use("/users", (req, res) => proxy.web(req, res, { target: "http://localhost:4001" }));
app.use("/payments", (req, res) => proxy.web(req, res, { target: "http://localhost:4002" }));
app.use("/notifications", (req, res) => proxy.web(req, res, { target: "http://localhost:4003" }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
