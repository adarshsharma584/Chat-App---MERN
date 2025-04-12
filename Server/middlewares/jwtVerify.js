import jwt from "jsonwebtoken";

export const JWT_verify = async (req,res,next)=>{
    console.log(req);
    console.log(req.cookies);
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
    console.log(token);

    if(!token) return res.status(400).json({msg:"token not found"});

    const decodedToken = await jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
    console.log("decodedToken:",decodedToken);
    req.user = decodedToken;
    next();
}