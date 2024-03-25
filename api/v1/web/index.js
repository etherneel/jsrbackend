/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Manthan Vaghasiya
 */
import { Router } from "express";

const router = Router();

import contractor from "./contractor";
import customer from "./customer";
import user from "./user";

/*********** Combine all Routes ********************/
router.use("/contractor", contractor);
router.use("/customer", customer);
router.use("/user", user);

module.exports = router;
