const bcrypt = require("bcrypt");

async function hash(data) {
  return await bcrypt.hash(JSON.stringify(data), 10);
}

exports.hash = hash;

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: {
      hash: await hash(event),
    },
  };
};
