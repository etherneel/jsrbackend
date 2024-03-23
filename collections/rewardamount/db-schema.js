/*
 * @file: db-schema.js
 * @description: db schema for customer collection.
 * @author: Manthan Vaghasiya
 */

import mongoose from 'mongoose';
const rewardamountSchema = new mongoose.Schema({
    firstName: { type: String },
    walletAddress:{ type: String },
    duration:{ type: String },
    limit:{ type: String },
    referralAddress:{ type: String },
    dateTime:{ type: String },
    amount:{ type: Number },
    planeAmount:{ type: Number },
    rewardamount:{ type: Number },
    level:{ type: Number },
    percentage:{ type: Number },
    lastName: { type: String },
    companyName: { type: String },
    phone: { type: String },
    email: { type: String },
    password: { type: String },
    loginToken: [
        {
            token: {
                type: String,
            },
        },
    ],
    isEnabled: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    lastLoginDate: {type: Number},
    deletedAt: Number,
    isUpdated: Boolean,
    isMailVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default:  Date()},
    updatedAt: { type: Date, default:  Date()}
});
export default rewardamountSchema;