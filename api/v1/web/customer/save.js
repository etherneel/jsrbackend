/**
 * This is Contain Save router/api.
 * @author Manthan Vaghasiya
 *
 */

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { addCustomerFn } from "../../../../controllers/customer/customer";
//import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
//import { contractorPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });
let multer = require("multer");
let upload = multer({ dest: "../../views" });


/**
 * @swagger
 * /api/v1/customer/add:
 *  post:
 *   tags: ["Customer"]
 *   summary: Save customer information.
 *   description: api used for Save customer information.
 *   parameters:
 *      - in: body
 *        name: lead
 *        description: Save customer information.
 *        schema:
 *         type: object
 *         properties:
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           companyName:
 *             type: string
 *           phone:
 *             type: string
 *           email:
 *             type: string
 *           password:
 *             type: string
 *   responses:
 *    "200":
 *     description: success
 *    "400":
 *     description: fail
 */

 const dataSchema = Joi.object({
  firstName: Joi.string().required().label("firstName"),
  lastName: Joi.string().required("lastName"),
  companyName: Joi.string().default(1).required("companyName"),
  phone: Joi.string().required().label("phone"),
  email: Joi.string().required().label("email"),
  password: Joi.string().required().label("password"),
});

app.post(
  "/add",
  validator.body(dataSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  addCustomerFn
);

export default app;
