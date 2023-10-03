const  mongoose =  require("mongoose");
const { Schema } = mongoose;

let orderData = new Schema(
  {
    shop: { type: String, required: true },
    id: { type: String, required: true },
    status:{type: Number, required : true},
    orderName:{type: String, required : true},
    orderNumber:{type: Number, required : true},
    orderCreatedAt:{ type: String, requied: true},
    orderID : {type: String, required : true},
    orderData : {type: Array},
    properties: { type: String, required: true }
  },
  { timestamps: true }
);
// appMediaData.index({ shop: 1});
let orderModel = mongoose.model("orderData", orderData);
module.exports =orderModel;