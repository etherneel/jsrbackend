/**
 * This is for Contain function layer for contractor service.
 * @author Manthan Vaghasiya
 *
 */


import messages, { Message } from "../../utilities/messages";


import userModel from "../../collections/user";
import addwithdrawalAmountModel from "../../collections/withthrowalamount";
import rewardamountModel from "../../collections/rewardamount";
import rewardReferalCountModel from "../../collections/teamAmountget";
import rewarAmountDailyModel from "../../collections/rewarAmountDaily";
import DollerhouseModel from "../../collections/dollerhousechin";
import dollerhousechinRamountModel from "../../collections/dollerhousechinRamount";
import levelrewaramountDailyModel from "../../collections/levelrewaramountDaily";
import TeamAmountModel from "../../collections/teamAmountget";

const ObjectId = require("mongodb").ObjectID;
let path = require("path");
let _ = require("lodash");
let fs = require("fs");

/*************************** dollerhousechin ***************************/
export const dollerhousechin = async (req) => {
  let walletAddress = req.body.walletAddress;
  let referralAddress = req.body.referralAddress;




}




/*************************** userGetinfoAll ***************************/

export const userCountTeam = async (req) => {
  try {
    // Fetch user data from the database
    let where = { isDeleted: false };
    let useralldataget = await userModel.findQuery(where);

    // Initialize an object to store wallet addresses and their corresponding team member counts
    let teamCounts = {};

    // Iterate through the user data
    useralldataget.forEach(user => {
      const { walletAddress, referralAddress } = user;

      // Increment the team count for the wallet address
      if (!teamCounts[walletAddress]) {
        teamCounts[walletAddress] = 1;
      } else {
        teamCounts[walletAddress]++;
      }

      // Increment the team count for the referral address if it's different from the wallet address
      if (referralAddress !== walletAddress) {
        if (!teamCounts[referralAddress]) {
          teamCounts[referralAddress] = 1;
        } else {
          teamCounts[referralAddress]++;
        }
      }
    });

    return {
      teamCounts
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    return { error: error.message };
  }
}


/*************************** rewardAmountListadd ***************************/
export const rewardAmountListadd = async (req) => {
  let data = await rewardReferalCountModel.findQuery(req.body);
  console.log("rewardAmountListadd", rewardAmountListadd);
  if (data) {
    return {
      Message: "rewardAmountList  Info Get Sucess !",
      userData: data,
    }
  } else {
    throw new Error("ewardAmountList Difine!");
  }
}

/*************************** rewardAmountDilyList ***************************/
export const rewardAmountDilyList = async (req) => {
  let whererewardAmountDilyList = {
    isDeleted: false,
    walletAddress: req.body.walletAddress
  }

  let data = await rewarAmountDailyModel.findQuery(whererewardAmountDilyList);
  let dailylevvelReward = await levelrewaramountDailyModel.findQuery(whererewardAmountDilyList);

  console.log("dailylevvelReward",dailylevvelReward);
  if (data) {
    return {
      Message: "User All rewarAmountDaily Data List !",
      userData: data,
      dailylevvelReward:dailylevvelReward
    }
  } else {
    throw new Error("rewarAmountDaily Difine!");
  }
}


/*************************** withdrawalDataList ***************************/
export const withdrawalDataList = async (req) => {
  let wherewithdrawaldata = {
    isDeleted: false,
    walletAddress: req.body.walletAddress
  }

  let data = await addwithdrawalAmountModel.findQuery(wherewithdrawaldata);
  console.log("data", data);
  if (data) {
    return {
      Message: "User All withdrawal Data List !",
      userData: data,
    }
  } else {
    throw new Error("ewardAmountList Difine!");
  }
}



/*************************** addUser ***************************/


export const addUser = async (req) => {

  let insertUserData = {
    walletAddress: req.body.walletAddress,
    amount: req.body.amount,
    percentage: req.body.percentage,
    duration: req.body.duration,
    limit: req.body.limit,
    referralAddress: req.body.referralAddress
  }

  if (insertUserData) {
    let data = await userModel.saveQuery(insertUserData);

  } else {
    messages("User Information Not Insert !");
  }


  // rewardcode start with rewardamountModel tabel

  let Raddress = {
    isDeleted: false,
    referralAddress: req.body.referralAddress
  }

  let rewardamountModelAlldata = await userModel.findQuery(Raddress);

  let uniqueCombinations = new Set();

  rewardamountModelAlldata.forEach(data => {
    let combination = `${data.referralAddress}-${data.walletAddress}`;
    uniqueCombinations.add(combination);
  });

  let uniqueCount = uniqueCombinations.size;
  console.log("uniqueCount", uniqueCount);

  if (uniqueCount === 0) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = Amountpercentage / 2;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    console.log("rewardamountFindReferral", rewardamountadd)
  }
  else if (uniqueCount === 1) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = Amountpercentage / 2;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    console.log("rewardamountFindReferral", rewardamountadd)
  }
  else if (uniqueCount === 2) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = (Amountpercentage * 25) / 100;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    // console.log("rewardamountFindReferral", rewardamountadd)
  }
  else if (uniqueCount === 3) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = (Amountpercentage / 10) / 100;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    // console.log("rewardamountFindReferral", rewardamountadd)
  }
  else if (uniqueCount >= 4 && uniqueCount <= 10) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = (Amountpercentage / 5) / 100;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    // console.log("rewardamountFindReferral", rewardamountadd)
  }
  else if (uniqueCount >= 11 && uniqueCount <= 15) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = (Amountpercentage * 40) / 100;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    // console.log("rewardamountFindReferral", rewardamountadd)
  } else if (uniqueCount >= 16 && uniqueCount <= 20) {
    let Amount = req.body.amount;
    let percentage = req.body.percentage;
    let Amountpercentage = (Amount * percentage) / 100;
    let RewardAmount = (Amountpercentage * 2.5) * 100;

    let rewardamountaddReferralData = {
      walletAddress: req.body.walletAddress,
      referralAddress: req.body.referralAddress,
      rewardamount: RewardAmount,
      level: uniqueCount,
      planeAmount: Amount,
    }

    let rewardamountadd = await rewardamountModel.saveQuery(rewardamountaddReferralData);
    // console.log("rewardamountFindReferral", rewardamountadd)
  }



}

/*************************** getUserInfo ***************************/
export const getUserInfo = async (req) => {


  let userWalletAddress = req.body.walletAddress;

  let getUserData = await userModel.findQuery({ walletAddress: userWalletAddress });

  if (getUserData) {
    return {
      Message: "User Info Get Sucess !",
      userData: getUserData,
    }
  } else {
    throw new Error("User walletAddress not Difine!");
  }
}

/*************************** getrewardAmountList ***************************/
export const getrewardAmountList = async (req) => {


  let userWalletAddress = req.body.walletAddress;

  let getrewardAmountData = await rewardamountModel.findQuery({ referralAddress: userWalletAddress });
  let getrewardamountdailydata = await rewarAmountDailyModel.findQuery({ walletAddress: userWalletAddress });

  const totalRewardAmount = getrewardAmountData.reduce((total, item) => total + item.rewardamount, 0);
  const totalRewardAmountdaily = getrewardamountdailydata.reduce((total, item) => total + item.rewardamount, 0);

  let LevelRewarsData = await addwithdrawalAmountModel.findQuery({ walletAddress: userWalletAddress });
  const totalUsrWithdrwalRewardAmount = LevelRewarsData.reduce((total, data) => total + data.amount, 0);

  const totalAmountUserWallet = totalRewardAmount + totalRewardAmountdaily;
  const totalAmountUserWallet2 = totalAmountUserWallet - totalUsrWithdrwalRewardAmount;

  //total limit count widtrawal
  let LevelRewarsAllData = await rewardamountModel.findQuery({ walletAddress: userWalletAddress });
  const totalPlaneAmount = LevelRewarsAllData.reduce((total, data) => total + data.planeAmount, 0);
  const totalPlaneAmountMultiplied = totalPlaneAmount * 3;
  const totalLimit = totalPlaneAmountMultiplied - totalUsrWithdrwalRewardAmount;



  //total Team Count code 
  let where = { isDeleted: false };
  let useralldataget = await userModel.findQuery(where);

  let teamCounts = {};
  useralldataget.forEach(user => {
    const { walletAddress, referralAddress } = user;

    if (!teamCounts[walletAddress]) {
      teamCounts[walletAddress] = 1;
    } else {
      teamCounts[walletAddress]++;
    }

    if (referralAddress !== walletAddress) {
      if (!teamCounts[referralAddress]) {
        teamCounts[referralAddress] = 1;
      } else {
        teamCounts[referralAddress]++;
      }
    }
  });
  const walletAddressToCount = userWalletAddress;
  const countForWalletAddress = teamCounts[walletAddressToCount];


  //team Level count 
  let TeamMainLevel = await rewardamountModel.findQuery({ walletAddress: userWalletAddress });
  // const uniqueLevels = Array.from(new Set(TeamMainLevel.map(item => item.level)));
  const uniqueLevels = Array.from(new Set(TeamMainLevel.map(item => item.level)));


  // total team bonus
  let totalteambounsdata = await TeamAmountModel.findQuery({ walletAddress: userWalletAddress });
  const totalteambonus = totalteambounsdata.reduce((total, data) => total + data.amount, 0);

  if (getrewardAmountData) {
    return {
      Message: "rewardAmount Info Get Sucess !",
      userData: getrewardAmountData,
      totalRewardAmount: totalAmountUserWallet2,
      totalUsrWithdrwalRewardAmount: totalUsrWithdrwalRewardAmount,
      totalLimit: totalLimit,
      totalTeamcount: countForWalletAddress,
      teamLevel: uniqueLevels,
      totalteambonus:totalteambonus

    }
  } else {
    throw new Error("User walletAddress not Difine!");
  }
}

/*************************** addwithdrawalAmount ***************************/
export const addwithdrawalAmount = async (req) => {
  let LevelRewardsDataGetWhere = {
    isDeleted: false,
    referralAddress: req.body.walletAddress,
  };

  let LevelRewarsData = await rewardamountModel.findQuery(LevelRewardsDataGetWhere);
  const totalUsrWithdrwalRewardAmount = LevelRewarsData.reduce((total, data) => total + data.rewardamount, 0);
  const totalPlaneAmount = LevelRewarsData.reduce((total, data) => total + data.planeAmount, 0);

  const totalPlaneAmountMultiplied = totalPlaneAmount * 3;

  let TotalAmountGetWhere = {
    isDeleted: false,
    walletAddress: req.body.walletAddress,
  };

  let TotalUserwithdrawalAmountDataGet = await addwithdrawalAmountModel.findQuery(TotalAmountGetWhere);

  let totalAmount = 0;
  TotalUserwithdrawalAmountDataGet.forEach(data => {
    totalAmount += data.amount;
  });


  let userWidtwalAmountWallet = totalUsrWithdrwalRewardAmount - totalAmount;
  let getrewardamountdailydata = await rewarAmountDailyModel.findQuery({ walletAddress: req.body.walletAddress });
  const totalRewardAmountdaily = getrewardamountdailydata.reduce((total, item) => total + item.rewardamount, 0);

  //levelrewarddaily count
  let levelRewarddata = await levelrewaramountDailyModel.findQuery({ walletAddress: req.body.walletAddress });
  const totallevelrewarddaily = levelRewarddata.reduce((total, item) => total + item.rewardamount, 0);

  let userWidtwalAmountWallet2 = userWidtwalAmountWallet + totalRewardAmountdaily + totallevelrewarddaily;
  console.log("userWidtwalAmountWallet2",userWidtwalAmountWallet2);

  if (totalPlaneAmountMultiplied >= req.body.amount) {
    if (req.body.amount >= 10) {
      if (userWidtwalAmountWallet2 >= req.body.amount) {
        let addstackamountData = {
          walletAddress: req.body.walletAddress,
          amount: req.body.amount,
        }
        if (addstackamountData) {
          let data = await addwithdrawalAmountModel.saveQuery(addstackamountData);

          return {
            Message: "You have successfully withdrawn rewards !"
          }
        } else {
          return {
            messages: "User Stack Amount Data Not Insert !"
          }
        }
      } else {
        return {
          messages: "Please check your Amount !"
        }
      }
    } else {
      return {
        messages: "Withdraw minimum 5$!"
      }
    }
  } else {
    return {
      messages: "Please check your reward limit!"
    }
  }
};







