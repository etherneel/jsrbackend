/**
 * This is Contain Save router/api.
 * @author Manthan Vaghasiya
 *
 */

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import {
  deletecontractors,
} from "../../../../controllers/contractor/contractor";
// import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
// import { contractorPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/contractor/delete:
 *  post:
 *   tags: ["Contractor"]
 *   summary: get Contractor information.
 *   description: api used for delete Contractor information.
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: lead
 *        description: delete Contractor information.
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
  "/delete",
  // decodeJwtTokenFn,
  // contractorPermission,
  deletecontractors
);

export default app;
