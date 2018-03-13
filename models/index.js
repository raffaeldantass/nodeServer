import Sequelize from 'sequelize';

const Op = Sequelize.Op;
const sequelize = new Sequelize('test_graphql_db', 'postgres', 'imapassword', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: Op
});

const db = {
  User: sequelize.import('./user.js'),
};

// Object.keys(db).forEach((modelName) => {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });

 db.sequelize = sequelize;
// db.Sequelize = Sequelize;

export default db;