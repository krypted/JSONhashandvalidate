const bcrypt = require("bcrypt");

async function compare(json, hash) {
  return await bcrypt.compare(JSON.stringify(json), hash);
}

exports.compare = compare;

exports.handler = async (event) => {
  const { json, hash } = event;
  return {
    statusCode: 200,
    body: {
      valid: await compare(json, hash),
    },
  };
};
