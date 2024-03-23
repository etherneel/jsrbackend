// Define an async function to fetch user data
const fetchUserData = async () => {
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
};

// // Cron job to run the fetchUserData function every 2 seconds
// cron.schedule('*/2 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         console.log('User data fetched:', userData);
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 25) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 100
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });


// cron.schedule('*/4 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 125) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });

// cron.schedule('*/6 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 600) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 2500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });

// cron.schedule('*/8 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 3000) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 12500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });


// cron.schedule('*/10 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 15000) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 62500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });


// cron.schedule('*/12 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 90000) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 312500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });

// cron.schedule('*/14 * * * * *', async () => {
//     try {
//         const userData = await fetchUserData();
//         const { teamCounts } = userData;
//         const walletAddressesWith25 = [];
//         for (const [walletAddress, count] of Object.entries(teamCounts)) {
//             if (count === 425000) {
//                 walletAddressesWith25.push(walletAddress);
//             }
//         }

//         console.log('Wallet addresses with teamCounts equal to 25:', walletAddressesWith25);

//         // Define findDataTeamAmount here
//         let findDataTeamAmount = await TeamAmountModel.findQuery({ walletAddress: { $in: walletAddressesWith25 } });

//         for (const walletAddress of walletAddressesWith25) {
//             const existingData = findDataTeamAmount.find(data => data.walletAddress === walletAddress && data.amount === 100);
//             if (!existingData) {
//                 let dataAdd25 = {
//                     walletAddress: walletAddress,
//                     amount: 1562500
//                 };
//                 let result = await TeamAmountModel.saveQuery(dataAdd25);
//                 console.log('New data added:', result);
//             }
//         }

//     } catch (error) {
//         console.error('Error fetching user data:', error);
//     }
// });