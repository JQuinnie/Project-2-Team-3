// Set up database using Sequelize to take in data fields

module.exports = function (sequelize, DataTypes) {
  const Coins = sequelize.define('Coins', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    coin_id: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    },
    symbol: {
      type: DataTypes.STRING
    },
    rank: {
      type: DataTypes.INTEGER
    },
    price_usd: {
      type: DataTypes.DECIMAL(13, 4)
    },
    total_supply: {
      type: DataTypes.DECIMAL(13, 0)
    },
    percent_change_24h: {
      type: DataTypes.DECIMAL(2, 2)
    }
  });
  return Coins;
}
