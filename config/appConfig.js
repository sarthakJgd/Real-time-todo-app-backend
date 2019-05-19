let appConfig = {};

appConfig.port = process.env.port || 8081; //3000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    //uri: 'mongodb://127.0.0.1:27017/LiveTodoAppDB',
    uri: 'mongodb+srv://sarthakJgd:brye6QzRFulKmueh@cluster0-wrg5n.mongodb.net/test?retryWrites=true',
}
appConfig.apiVersion = '/api/v1';

module.exports = {

    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion

}// end module exports