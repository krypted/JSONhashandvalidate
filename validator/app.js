const http = require("http");
const service = require("restana")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const compare = require("./index").compare;

service.use(bodyParser.json());
service.post("/", async (req, res) => {
  const { json, hash } = req.body;
  return res.send({
    valid: await compare(json, hash),
  });
});

http
  .createServer(service)
  .listen(PORT, "0.0.0.0", () =>
    console.log(`Running on http://localhost:${PORT}`)
  );
