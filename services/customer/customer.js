/**
 * This is for Contain function layer for contractor service.
 * @author Manthan Vaghasiya
 *
 */

 import {
  encryptpassword,
  decryptPassword,
  generateRandom,
  generateToken,
  generateJwtTokenFn,
} from "../../utilities/universal";

import {Message} from "../../utilities/messages";

import customerModel from "../../collections/customer";
const ObjectId = require("mongodb").ObjectID;
let path = require("path");
let _ = require("lodash");
let fs = require("fs");


/*************************** addContractor ***************************/
export const addCustomer = async (req) => {
  console.log("req service =>", req.body)
  const { email } = req.body;
  console.log("email =>", email)
    let customerData = await customerModel.findOneQuery({ email: email });
    console.log("customerData =>", customerData)
    if (customerData) {
      throw new Error("Email Address Already Exists!");
    } else {
      console.log("req.body.password =>", req.body.password);
      let password = await encryptpassword(req.body.password);
      console.log("encryptpassword  password =>", password);
      console.log("still we have req.body.password =>", req.body.password);
      req.body.password = password
      console.log("after we have req.body.password =>", req.body.password);
      let project = await customerModel.saveQuery(req.body);
      console.log("project data =>", project);
     
      return "data inserted";
    }
  
};

export const onLogin = async (req, res, next) => {
  const payload = req.body;

  let userData = await customerModel.findOneQuery({
    email: payload.email.toLowerCase(),
    isDeleted: false,
  });
  if (!userData) throw new Error("Email not exists");

  let match = await decryptPassword(payload.password, userData.password);
  if (!match) throw new Error("Password Invalid");
  if (userData.isMailVerified == false) throw new Error("Please verify email");
 
  if (userData?.loginToken) {
    if (userData?.loginToken?.length >= 5) {
      let rr = await customerModel.findByConditionAndUpdate(
        { _id: userData["_id"] },
        {
          $pop: { loginToken: -1 },
        },
        { new: true }
      );
    }
  }

 
  const data = await customerModel.onLoginDoneFn(userData._id, {

    token: await generateJwtTokenFn({
      userId: userData["_id"],
    }),
    });
  res.setHeader("Access-Control-Expose-Headers", "token");
  res.setHeader("token", data.loginToken[data.loginToken.length - 1].token);


  return {
    email: data.email,
    lastLogin: data.lastLoginDate,
   };
};


/*************************** addContractor ***************************/
export const getCustomer = async (req) => {
  
  console.log("req.userInfo=>",req.userInfo)
  
    let contractorData = await customerModel.findQuery({_id: req.userInfo  });
  
      return contractorData;

  
};