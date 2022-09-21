import jwt from "jsonwebtoken";

const secret = 'test';
// wants to like a post => click like button => auth middleware(NEXT) => like controller

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
        decodedData = jwt.verify(token, secret);

        req.userId = decodedData?.id;
    } else {
        // google oauth
        decodedData = jwt.decode(token);
        req.userId = decodedData?.sub;
    }    

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;