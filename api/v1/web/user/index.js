/*
 * @file: index.js
 * @description: It's combine all customer routers.
 * @author: Manthan Vaghasiya
 */

import saveUser from './save';
import getUserInfo from './userGetinfo';
import withdrawalAmount from './withdrawalAmount';
import rewardAmountList from './rewardAmountList';
import userCountTeam from './userCountTeam';
import rewardAmountListadd from './rewardAmountListadd'
import withdrawalDataList from './withdrawalDataList';
import rewardAmountDilyAdd from './rewardAmountDilyAdd';
import rewardAmountDilyList from './rewardAmountDilyList';
import dollerhousechin from './dollerhousechin'

export default [saveUser,
    getUserInfo,
    withdrawalAmount,
    rewardAmountDilyList,
    rewardAmountList,
    rewardAmountListadd,
    userCountTeam,
    withdrawalDataList,
    rewardAmountDilyAdd,
    dollerhousechin];

