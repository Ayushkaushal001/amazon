const mongoose = require('mongoose');

const orderSchema =  new mongoose.Schema({
	emailId :{type:String,required:[true,'emailId required']},
	firstName:{type:String,required:[true,'firstname required']},
	lastName:{type:String,required:[true,' lastname required']},
	addressId:{type:String,required:[true,'address required']},
	userId:{type:String,required:[true,'userId required']},
	subtotal:{type:String,required:[true,'  subtotal required']},
	charges:{type:String,required:[true,' charges required']},
	status:{type:String,required:[true,' status required']},
	mode:{type:String,required:[true,' mode required']},
	rorder:{type:String,default : null},
	date :{type:Date, default : Date.now}

})
module.exports = mongoose.model( 'Order' , orderSchema, 'Order');
