module.exports = {
  "name": "mongo",
  "type": "mongodb",
  "url": "mongodb+srv://ditas:ditasadmin@cluster0.kamj9.mongodb.net/ditas?retryWrites=true&w=majority",
  "useNewUrlParser": true,
  "synchronize": true,
  "logging": true,
  "entities": ["./dist/modules/**/infra/typeorm/schemas/*.ts"]
}
