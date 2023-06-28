const jwt = require("jsonwebtoken");
const JWT_SECRET = "VisionVault2905";

const fetchUser = (req, res, next) => {
  // Get the user details from the auth token and add user id to request
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ erorr: "auth-token is not found" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Please use correct credentials" });
  }
};

module.exports = fetchUser;