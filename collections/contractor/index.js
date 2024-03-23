/**
 * This is the indexer for contractor model
 * @author Manthan Vaghasiya
 * @since Saturday, May 28, 2022
 */
import mongoose from "mongoose";
import dbSchema from "./db-schema";

class contractorClass {


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

}

dbSchema.loadClass(contractorClass);

export default mongoose.model("contractor", dbSchema);
