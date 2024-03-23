/**
 * This is Contain Save router/api.
 * @author Vishal Chouhan
 *
 */

import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import {
  updatecontractors,
} from "../../../../controllers/contractor/contractor";
// import { checkToken, decodeJwtTokenFn } from "../../../../utilities/universal";
// import { contractorPermission } from "../../../../utilities/permission";

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/contractor/update:
 *  post:
 *   tags: ["Contractor"]
 *   summary: update Contractor information.
 *   description: api used for update Contractor information.
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: lead
 *        description: update Contractor information.
 *        schema:
 *         type: object
 *         properties:
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           contactorType: 
 *             type: string
 *           companyName:
 *             type: string
 *           phone:
 *             type: string
 *           email:
 *             type: string
 *           micsConNotes:
 *             type: string
 *           address1:
 *             type: string
 *           address2:
 *             type: string
 *           city:
 *             type: string
 *           state:
 *             type: string
 *           zipcode:
 *             type: string
 *           country:
 *             type: string
 *           empIdentiNumber:
 *             type: string
 *           licenseInfo:
 *             type: string
 *           insureanceInfo:
 *             type: string
 *           bondInfo:
 *             type: string
 *   responses:
 *    "200":
 *     description: success
 *    "400":
 *     description: fail
 */

app.post(
  "/update",
  // decodeJwtTokenFn,
  // contractorPermission,
  updatecontractors
);

export default app;
