import jwt from 'jsonwebtoken';
//import { response } from '../controllers/response';
import { resmessage } from './constant.js';



export const isAuth = async (req, res, next) => {

  const authHeader = extractHeader(req);
  const secret = "Hello";
  console.log(authHeader);
  if (!authHeader) {
    console.log(`UN-AUTHORIZED ACCESS | ${req.path}`);
    return response(res, 403, {
      Code: 403,
      Message: resmessage.un_authorized_access
    });
  }
  const token = authHeader;
  let decodedToken = '';

  try {
    decodedToken = jwt.verify(token, secret);
  } catch (error) {
    console.log(`UN-AUTHORIZED ACCESS | TOKEN ERROR | ${req.path}`);
    return response(res, 403, {
      Code: 403,
      Message: resmessage.un_authorized_access
    });
  }

  if (!decodedToken) {
    console.log(`UN-AUTHORIZED ACCESS | TOKEN ERROR | ${req.path}`);
    return response(res, 403, {
      Code: 403,
      Message: resmessage.un_authorized_access
    });
  }
  try {
    const validate_user = await UserModel.findOne({
      email: decodedToken.email,
     
    });
    // console.log(validate_user)
    if (validate_user) {
      req.body.user = decodedToken.userId;
    
      req.body.email = decodedToken.email;
      next();
    } else
      return response(res, 403, {
        Code: 403,
        Message: resmessage.un_authorized_access
      });
  } catch (error) {
    return response(res, 404, {
      Code: 404,
      Message: resmessage.something_wrong,
      error: err
    });
  }
};
const extractHeader = (req) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      return req.headers.authorization.split(' ')[1];
    }
    if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  };

  export const GenToken = (email) => {
    const expiresIn = 30 * 24 * 24;
    const dataStoredInToken = {
      email
    };
    const token = jwt.sign(dataStoredInToken, "Hello", {
      expiresIn,
      algorithm: 'HS512',
      issuer: 'kwamfritz',
      noTimestamp: true
    });
    const accessToken = `Bearer ${token}`;
    console.log(`JWT_TOKEN_CREATED | ${userId} | ${email} |${accessToken}`);
    return { expiresIn, accessToken, token };
  };