/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Manthan Vaghasiya
 */

// Please assign all url here related WEB api's
import web from "./v1/web";
/*********** Combine all Routes ********************/
export default [
    ...web,
];
