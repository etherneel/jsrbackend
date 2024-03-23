/*
 * @file: login.js
 * @description: It Contain login router/api.
 * @author: Manthan Vaghasiya
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { login } from "../../../../controllers/customer/customer";
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/customer/login:
 *  post:
 *   tags: ["Customer"]
 *   summary: user login api
 *   description: api used to login users
 *   parameters:
 *      - in: body
 *        name: user
 *        description: The user to login.
 *        schema:
 *         type: object
 *         required:
 *          - user login
 *         properties:
 *           email:
 *             type: string
 *             required:
 *           password:
 *             type: string
 *             required:
 *   responses:
 *    "200":
 *     description: success
 */

const loginSchema = Joi.object({
    email: Joi.string()
        .required()
        .label("Email or username")
    , password: Joi.string()
        .required()
        .label("Password")
});

app.post('/login', validator.body(loginSchema, {
    joi: { convert: true, allowUnknown: false }
}), login);

export default app;
