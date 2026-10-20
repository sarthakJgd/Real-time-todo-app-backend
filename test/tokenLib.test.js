const { test } = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET = Buffer.alloc(32, 't').toString();
const tokenLib = require('../libs/tokenLib');

const generateToken = data => new Promise((resolve, reject) => {
  tokenLib.generateToken(data, (error, details) => error ? reject(error) : resolve(details));
});

const verifyToken = token => new Promise((resolve, reject) => {
  tokenLib.verifyToken(token, (error, claims) => error ? reject(error) : resolve(claims));
});

test('generates a short-lived HS256 token with the expected issuer and subject', async () => {
  const details = await generateToken({ userId: 'test-user' });
  const claims = await verifyToken(details.token);

  assert.equal(typeof details.token, 'string');
  assert.equal(Object.hasOwn(details, 'tokenSecret'), false);
  assert.equal(claims.iss, 'edChat');
  assert.equal(claims.sub, 'authToken');
  assert.equal(claims.data.userId, 'test-user');
  assert.ok(Math.abs(claims.iat - Math.floor(Date.now() / 1000)) < 5);
  assert.ok(claims.exp > claims.iat);
});

test('rejects a token signed with a different key', async () => {
  const details = await generateToken({ userId: 'test-user' });
  const originalSecret = process.env.JWT_SECRET;
  process.env.JWT_SECRET = Buffer.alloc(32, 'x').toString();
  try {
    await assert.rejects(verifyToken(details.token));
  } finally {
    process.env.JWT_SECRET = originalSecret;
  }
});
