/**
 * This is for Contain function layer for contractor controller.
 * @author Manthan Vaghasiya
 *
 */

const ObjectId = require('mongodb').ObjectID;
import { successAction, failAction } from '../../utilities/response';
import Message from '../../utilities/messages';
import {
   addUser,
   onLogin,
   getCustomer,
   getUserInfo,
   addwithdrawalAmount,
   getrewardAmountList ,
   userCountTeam,
   rewardAmountListadd,
   withdrawalDataList,
   rewardAmountDilyAdd,
   rewardAmountDilyList,
   dollerhousechin} from '../../services/user/user';

/*************************** rewardAmountDilyAddFn ***************************/
export const rewardAmountDilyAddFn = async (req, res) => {
  try {
   
      const data = await rewardAmountDilyAdd(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};


/*************************** dollerhousechinFn ***************************/
export const dollerhousechinFn = async (req, res) => {
  try {
   
      const data = await dollerhousechin(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** rewardAmountDilyListFn ***************************/
export const rewardAmountDilyListFn = async (req, res) => {
  try {
   
      const data = await rewardAmountDilyList(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** addContractors ***************************/
export const addUserFn = async (req, res) => {
    try {
     
        const data = await addUser(req);
        res.status(200).json(successAction(data, Message.success));
    } catch (error) {
        res.status(400).json(failAction(error.message));
    }
};

/*************************** withdrawalDataListFn ***************************/
export const withdrawalDataListFn = async (req, res) => {
  try {
   
      const data = await withdrawalDataList(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** addContractors ***************************/
export const rewardAmountListaddFn = async (req, res) => {
  try {
   
      const data = await rewardAmountListadd(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};


/*************************** userGetinfoAllFn ***************************/
export const userCountTeamFn = async (req, res) => {
  try {
   
      const data = await userCountTeam(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** addContractors ***************************/
export const getrewardAmountListFn = async (req, res) => {
  try {
   
      const data = await getrewardAmountList(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** getUserInfoFn ***************************/
export const getUserInfoFn = async (req, res) => {
  try {
   
      const data = await getUserInfo(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/*************************** addStackamountFn ***************************/
export const addwithdrawalAmountFn = async (req, res) => {
  try {
    
      const data = await addwithdrawalAmount(req);
      res.status(200).json(successAction(data, Message.success));
  } catch (error) {
      res.status(400).json(failAction(error.message));
  }
};

/**************** Login user ***********/
export const getCustomerFn = async (req, res, next) => {
    try {
      const data = await getCustomer(req, res, next);
      res.status(200).json(successAction(data, Message.success));
    } catch (error) {
      res.status(400).json(failAction(error.message));
    }
  };

  /**************** Login user ***********/
export const login = async (req, res, next) => {
    try {
      const data = await onLogin(req, res, next);
      res.status(200).json(successAction(data, Message.success));
    } catch (error) {
      res.status(400).json(failAction(error.message));
    }
  };

// /*************************** getcontractor ***************************/
// export const getcontractors = async (req, res) => {
//     try {
//         const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
//         const createdBy = req.user ? ObjectId(req.user._id) : undefined;
//         const data = await getcontractor(req, mainUserId, createdBy);
//         res.status(200).json(successAction(data, Message.success));
//     } catch (error) {
//         res.status(400).json(failAction(error.message));
//     }
// };

// /*************************** getcontractorwithid ***************************/
// export const getcontractorwithids = async (req, res) => {
//     try {
//         const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
//         const createdBy = req.user ? ObjectId(req.user._id) : undefined;
//         const data = await getcontractorwithid(req, mainUserId, createdBy);
//         res.status(200).json(successAction(data, Message.success));
//     } catch (error) {
//         res.status(400).json(failAction(error.message));
//     }
// };

// /*************************** deletecontractor ***************************/
// export const deletecontractors = async (req, res) => {
//     try {
//         const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
//         const createdBy = req.user ? ObjectId(req.user._id) : undefined;
//         const data = await deletecontractor(req, mainUserId, createdBy);
//         res.status(200).json(successAction(data, Message.success));
//     } catch (error) {
//         res.status(400).json(failAction(error.message));
//     }
// };

// /*************************** updatecontractor ***************************/
// export const updatecontractors = async (req, res) => {
//     try {
//         const mainUserId = req.user ? ObjectId(req.user.mainUserId) : undefined;
//         const createdBy = req.user ? ObjectId(req.user._id) : undefined;
//         const data = await updatecontractor(req, mainUserId, createdBy);
//         res.status(200).json(successAction(data, Message.success));
//     } catch (error) {
//         res.status(400).json(failAction(error.message));
//     }
// };

