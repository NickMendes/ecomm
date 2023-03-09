import redis from 'redis';

module.exports = redis.createClient({ prefix: 'blacklist:' });
