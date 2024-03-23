/**
 * This is the indexer for contractor model
 * @author Manthan Vaghasiya
 * @since Saturday, May 28, 2022
 */
import mongoose from "mongoose";
import dbSchema from "./db-schema";

class rewardamountSchemaClass {


  static findRecordWithFilterFn(payload) {
    return this.findOne(payload);
  }
  

  static findOneQuery(payload) {
    return this.findOne(payload);
  }

  static saveQuery(payload) {
    return this(payload).save();
  }

  static findQuery(where) {
    return this.find(where);
  }

  static findOrderWithSort(where, sort, skipRecord, limitRecord) {
    return this.find(where).sort(sort).skip(skipRecord).limit(limitRecord);
  }

  static findWithCount(where) {
    return this.find(where).count();
  }

  static aggregateQuery(aggregateQuery) {
    return this.aggregate(aggregateQuery);
  }

  static findByConditionAndUpdate(condition, payload) {
    return this.findOneAndUpdate(condition, payload);
  }
  static onLoginDoneFn(userId, payload) {

    console.log(" payload.token=>", payload.token)
    let updateData = {
      $push: {
        loginToken: {
          token: payload.token,
        },
      },
      lastLoginDate: Date.now()
    };


    return this.findByIdAndUpdate(userId, updateData, { new: true });
  }

}

dbSchema.loadClass(rewardamountSchemaClass);

export default mongoose.model("rewarAmountDaily", dbSchema);
