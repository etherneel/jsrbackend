/**
 * @desc the entry point
 * @author Manthan Vaghasiya
 * @since 28 May 2022
 */
require = require("esm")(module /*, options*/);

require('dotenv').config({ path: './.env' });
require('./server.js');





















