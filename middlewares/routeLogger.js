const appConfig = require('./../config/appConfig');


let requestIpLogger = (req, res, next) => {

    if (req.method === 'OPTIONS') {
        var headers = {};
        if (req.headers.origin === appConfig.allowedCorsOrigin) {
            headers["Access-Control-Allow-Origin"] = appConfig.allowedCorsOrigin;
            headers["Vary"] = "Origin";
        }
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization";
        res.writeHead(204, headers);
        res.end();
  } 
  else{

     if (req.headers.origin === appConfig.allowedCorsOrigin) {
       res.header("Access-Control-Allow-Origin", appConfig.allowedCorsOrigin);
       res.header("Vary", "Origin");
     }
     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
     next();
  }
    
  
}// end request ip logger function  

module.exports = {
    logIp: requestIpLogger
}
