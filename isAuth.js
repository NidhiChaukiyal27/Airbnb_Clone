import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookies
    if (!token) {
      return res.status(400).json({ message: "User doesn't have a token" });
    }

    let verifyToken = jwt.verify(token,process.env.JWT_SECRET);
    if (!verifyToken) {
      res.status(400).json({ message: "user doesn't have a Valid Token" });
    }

    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    console.error("isAuth error:", error); // Log it!
    res.status(500).json({ message: `isAuth error: ${error}` });
  }
}

export default isAuth
