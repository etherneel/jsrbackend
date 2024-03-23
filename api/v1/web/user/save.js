/**
 * This is Contain Save router/api.
 * @author Manthan Vaghasiya
 *
 */
// http://localhost:4000/web-api-docs/

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { addUserFn } from "../../../../controllers/user/user";
//import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
//import { contractorPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });
let multer = require("multer");
let upload = multer({ dest: "../../views" });


/**
 * @swagger
 * /api/v1/user/add:
 *  post:
 *   tags: ["user"]
 *   summary: Save customer information.
 *   description: api used for Save customer information.
 *   parameters:
 *      - in: body
 *        name: lead
 *        description: Save customer information.
 *        schema:
 *         type: object
 *         properties:
 *           walletAddress:
 *             type: string
 *           amount:
 *             type: Number
 *           percentage:
 *             type: Number
 *           duration:
 *             type: string
 *           limit:
 *             type: string
 *           referralAddress:
 *             type: string
 *   responses:
 *    "200":
 *     description: success
 *    "400":
 *     description: fail
 */

 const dataSchema = Joi.object({
  walletAddress: Joi.string().required().label("walletAddress"),
  amount: Joi.number().required("amount"),
  percentage: Joi.number().required("percentage"),
  duration: Joi.string().default(1).required("duration"),
  limit: Joi.string().required().label("limit"),
  referralAddress: Joi.string().required().label("referralAddress"),
});

app.post(
  "/add",
  validator.body(dataSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  addUserFn
);

export default app;
