import jwt from "jsonwebtoken";

const generateToken = (id) => {
  const jwtSecret = "meta1234"
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "30d",
  });
};

export default generateToken;
