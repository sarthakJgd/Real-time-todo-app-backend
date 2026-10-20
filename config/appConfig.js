let appConfig = {};

appConfig.env = process.env.NODE_ENV || "development";

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI must be configured');
}
if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must be configured with at least 32 characters');
}
if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error('SMTP_USER and SMTP_PASS must be configured');
}
if (appConfig.env === "production" && !process.env.CORS_ORIGIN) {
    throw new Error('CORS_ORIGIN must be configured in production');
}

appConfig.port = process.env.PORT || 8081;
appConfig.allowedCorsOrigin = process.env.CORS_ORIGIN || "http://localhost:4200";
appConfig.db = {
    uri: process.env.MONGODB_URI,
}
appConfig.apiVersion = '/api/v1';

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}// end module exports
