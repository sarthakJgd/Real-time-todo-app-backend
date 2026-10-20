# Real-time To-do API

Express and MongoDB API for the Live To-do Angular client, with JWT authentication and Socket.IO notifications.

## Run locally

Use Node.js 24 LTS. Install with `npm ci`, configure the environment below, then run `node index.js`.

Required environment variables:

- `MONGODB_URI`: MongoDB connection URI.
- `JWT_SECRET`: random secret of at least 32 characters. Generate a new value; do not reuse the previously committed key. Changing it invalidates existing sessions.
- `SMTP_USER` and `SMTP_PASS`: Gmail account credentials used for password reset mail.
- `CORS_ORIGIN`: exact browser origin allowed to call the API (defaults to `http://localhost:4200` in development; required in production).
- `PORT`: optional HTTP port (defaults to 8081).
- `NODE_ENV`: set to `production` for deployment; defaults to `development`.

Never commit real values. Existing database and mail credentials found in repository history must be revoked and replaced before deployment.

## API and validation

Protected routes require `Authorization: Bearer <token>`. Use HTTPS for the frontend, API and Socket.IO endpoint in deployment. Run `npm test` for the JWT signing and verification checks; API, ownership and Socket.IO integration tests are still needed.
