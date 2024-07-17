const dotenv = require("dotenv");
const joi = require("joi");
dotenv.config({ path: "./.env" });

const EnvVarsSchema = joi
  .object({
    PORT: joi.number().default(3080),
    MONOGODB_URL: joi.string().trim().description("mongodb url"),
    JWT_SECRET_KEY: joi
      .string()
      .description("JWT Secret Key....")
      .default("This is a JWT secrete_key"),
    BASE_URL: joi.string().trim().description("Base URL"),
  })
  .unknown();

const { value: EnvVars, Error } = EnvVarsSchema.prefs({
  errors: { label: "key" },
}).validate(process.env);

if (Error) {
  console.log("Config File Error :- ", Error);
}

module.exports = {
  port: EnvVars.PORT,
  mongodb: {
    url: EnvVars.MONOGODB_URL,
    options: {
      useNewUrlParser: true,
      useunifiedTopology: true,
    },
  },
  base_url: EnvVars.BASE_URL,
  jwt: {
    secret_key: EnvVars.JWT_SECRET_KEY,
  },
};
