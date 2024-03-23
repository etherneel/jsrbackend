/*
 * @file: index.js
 * @description: It's combine all customer routers.
 * @author: Manthan Vaghasiya
 */

import saveCustomer from './save';
import login from './login';
import list from './list';


export default [saveCustomer, login,list];

