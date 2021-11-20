module.exports = {
    "type": "postgres",
    "host": "ec2-3-217-129-39.compute-1.amazonaws.com",
    "port": 5432,
    "username": "hkzirkgnpxknej",
    "password": "d316b775a63c2fc76eb911221d1001fff127b1a83e909561a9e062ff25c0860b",
    "database": "dfouv8n7dn3it",
    "entities": ["./build/modules/**/infra/typeorm/entities/*.ts"],
    "migrations": ["./build/shared/infra/typeorm/migrations/*.ts"],
    "cli": {
      "migrationsDir": "./src/shared/infra/typeorm/migrations"
    },
    "extra": {
      "ssl": {
        "require":true,
        "rejectUnauthorized":false
      }
 }
  },
  {
    "name": "mongo",
    "type": "mongodb",
    "host": "localhost",
    "port": 27017,
    "database": "ditas",
    "useUnifiedTopology": true,
    "entities": ["./src/modules/**/infra/typeorm/schemas/*.ts"]
  }

