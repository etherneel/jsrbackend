/**
 * This is Contain Save router/api.
 * @author Manthan Vaghasiya
 *
 */

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { rewardAmountDilyAddFn } from "../../../../controllers/user/user";
//import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
//import { contractorPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });
let multer = require("multer");
let upload = multer({ dest: "../../views" });


/**
 * @swagger
 * /api/v1/user/rewardAmountDilyAdd:
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
 *   responses:
 *    "200":
 *     description: success
 *    "400":
 *     description: fail
 */

 const dataSchema = Joi.object({
  walletAddress: Joi.string().required().label("walletAddress"),
});

app.post(
  "/rewardAmountDilyAdd",
  validator.body(dataSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  rewardAmountDilyAddFn
);

export default app;
