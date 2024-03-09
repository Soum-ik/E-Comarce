import { SignJWT, jwtVerify } from "jose";

// create token
export async function CreateToken(email, id) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  let token = await new SignJWT({ email: email, id: id })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(process.env.ISSUSER)
    .setExpirationTime(process.env.EXP)
    .sign(secret);

  return token;
}

// decode token
export async function VerifyToken(req, res) {
  const secret = new TextEncoder().encode(process.env.SECRET_KEY);
  const decode = await jwtVerify(secret);
  return decode["payload"];
}
