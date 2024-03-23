/**
 * This is Contain Save router/api.
 * @author Manthan Vaghasiya
 *
 */

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import {
  getcontractorwithids,
} from "../../../../controllers/contractor/contractor";
// import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
// import { contractorViewPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });
let multer = require("multer");
let upload = multer({ dest: "../../views" });


/**
 * @swagger
 * /api/v1/contractor/getcontractorwithids:
 *  post:
 *   tags: ["Contractor"]
 *   summary: get Contractor information.
 *   description: api used for get Contractor information.
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: lead
 *        description: get Contractor information.
 *        schema:
 *         type: object
 *         properties:
 *           id:
 *             type: string
 *   responses:
 *    "200":
 *     description: success
 *    "400":
 *     description: fail
 */

app.post(
  "/getcontractorwithids",
  // decodeJwtTokenFn,
  // contractorViewPermission,
  getcontractorwithids
);
export default app;
