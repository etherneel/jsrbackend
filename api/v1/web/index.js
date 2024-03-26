/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Manthan Vaghasiya
 */
import { Router } from "express";

const router = Router();

import user from "./user";

/*********** Combine all Routes ********************/
router.use("/user", user);

module.exports = router;
