require("dotenv").config();

module.exports = {
  HOST: "ep-noisy-resonance-a16sz79g-pooler.ap-southeast-1.aws.neon.tech",
  USER: "default",
  PASSWORD: "UcFsj1bZT3uV",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
