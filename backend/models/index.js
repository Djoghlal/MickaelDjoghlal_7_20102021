//Etablissement de la connexion avec la base de donnée
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB,
  process.env.DB_USERS,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

//Création de l'objet DB qui contiendra les models
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user")(sequelize, Sequelize);
db.topics = require("./topic")(sequelize, Sequelize);

//User <--> Publication (jointure entre les tables)
db.user.hasMany(db.topics, {
  foreignKey: "userId",
  as: "topics",
});

db.topics.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});


module.exports = db;