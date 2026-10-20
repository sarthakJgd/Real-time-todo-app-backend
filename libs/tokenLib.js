const jwt = require('jsonwebtoken')
const shortid = require('shortid')
const getSecretKey = () => {
  const secretKey = process.env.JWT_SECRET;
  if (!secretKey || secretKey.length < 32) {
    throw new Error('JWT_SECRET must be configured with at least 32 characters');
  }
  return secretKey;
};


let generateToken = (data, cb) => {

  try {
    let claims = {
      jwtid: shortid.generate(),
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
      sub: 'authToken',
      iss: 'edChat',
      data: data
    }
    let tokenDetails = {
      token: jwt.sign(claims, getSecretKey(), { algorithm: 'HS256' })
    }
    cb(null, tokenDetails)
  } catch (err) {
    cb(err, null)
  }
}// end generate token 

let verifyClaim = (token, cb) => {
  // verify a token symmetric
  jwt.verify(token, getSecretKey(), { algorithms: ['HS256'], issuer: 'edChat', subject: 'authToken' }, function (err, decoded) {
    if(err){
      cb(err,null)
    }
    else{
      cb(null,decoded);
    }  
 
 
  });


}// end verify claim 

let verifyClaimWithoutSecret = (token, cb) => {
  // verify a token symmetric
  jwt.verify(token, getSecretKey(), { algorithms: ['HS256'], issuer: 'edChat', subject: 'authToken' }, function (err, decoded) {
    if(err){
      cb(err, null)
    }
    else{
      cb (null,decoded)
    }  
 
 
  });


}// end verify claim 




module.exports = {
  generateToken: generateToken,
  verifyToken :verifyClaim,
  verifyClaimWithoutSecret: verifyClaimWithoutSecret
}
