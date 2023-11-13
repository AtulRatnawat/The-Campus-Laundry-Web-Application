const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentschema = new Schema({
    razorpay_order_id:{
        type:String,
        required:true,
    },
    razorpay_payment_id:{
        type:String,
        required:true,
    },
    razorpay_signature:{
        type:String,
        required:true,
    },
})

const Payment =mongoose.model("Payment",paymentschema);


module.exports = Payment;