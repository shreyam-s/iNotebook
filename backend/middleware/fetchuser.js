const jwt = require("jsonwebtoken");
const JWT_SECRET = "shreyamSuperSecretKey123!";

const fetchuser = (req, res, next) => {
  // Get token from header
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user; // user:{id:...} from payload
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
