/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Manthan Vaghasiya
 */
import { Router } from "express";
const app = Router();

import contractor from "./contractor";
import customer from "./customer";
import user from "./user";

/*********** Combine all Routes ********************/
app.use("/contractor", contractor);
app.use("/customer", customer);
app.use("/user", user);



export default app;
