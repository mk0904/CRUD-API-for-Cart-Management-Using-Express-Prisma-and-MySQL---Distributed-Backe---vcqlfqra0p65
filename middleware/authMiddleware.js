const { VALID_API_AUTH_KEY } = require("./authkey");

const authMiddleware = (req, res, next) => {
  const apiauthkey = req.headers.apiauthkey;

  if (!apiauthkey) {
    return res.status(403).json({ error: "apiauthkey is missing or invalid" });
  }

  if (apiauthkey !== VALID_API_AUTH_KEY) {
    return res.status(403).json({ error: "Failed to authenticate apiauthkey" });
  }

  next();
};

module.exports = authMiddleware;
