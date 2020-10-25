const http = require("http");
const service = require("restana")();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const hash = require("./index").hash;

service.use(bodyParser.json());
service.post("/", async (req, res) =>
  res.send({
    hash: await hash(req.body),
  })
);

http
  .createServer(service)
  .listen(PORT, "0.0.0.0", () =>
    console.log(`Running on http://localhost:${PORT}`)
  );
