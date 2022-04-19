const Order = require('../models/order')
const Product = require('../models/product')
const User=require('../models/user')
const ErrorHandler = require('../utils/errorHandler');

const isAuthenticatedUser=require('../middlewares/user')

const catchAsyncErrors = require('../middlewares/catchAsyncError'); 
const order = require('../models/order');
const product = require('../models/product');

//create a new order

exports.newOrder = catchAsyncErrors(async (req,res,next)=>{

    const{
        orderItems,
        personalInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
        paymentInfo
    }=req.body;
    const order = await Order.create({

        orderItems,
        personalInfo,
        itemsPrice,
        taxPrice,
        totalPrice,
        paymentInfo,
        paidAt:Date.now(),
        user:req.user._id

    })
    res.status(200).json({
        success:true,
        order
    })
})

//Get Single Order

exports.getSingleOrder = catchAsyncErrors(async(req,res,next)=>{

    const order = await Order.findById(req.params.id).populate('user','email name')
    if(!order){
        return next(new ErrorHandler('No Order found by this id',404))
    }

    res.status(200).json({
        success:true,
        order
    })
})


//Get Logged in User orders

exports.myOrders = catchAsyncErrors(async(req,res,next)=>{

    const orders = await Order.find({user:req.user.id});
    
  
    res.status(200).json({
        success:true,
        orders
    })
})


//Get All orders By tourAgent

exports.allOrders = catchAsyncErrors(async(req,res,next)=>{
       
    const orders = await Order.find();
    
    let totalAmount = 0;

    orders.forEach(order=>{
        totalAmount +=order.totalPrice
    })
    res.status(200).json({
        success:true,
        totalAmount,
        orders
    })
})

//Updare or Process Order

exports.updateOrder = catchAsyncErrors(async(req,res,next)=>{

    const order = await Order.findById(req.params.id);
    
  if(order.orderStatus==='Completed'){

    return next (new ErrorHandler('You have already Completed the order',400))
  };

   order.orderItems.forEach(async item=>{

    await updateStock(item.product,item.quantity)
   })

   order.orderStatus = req.body.status,
   order.completedAt = Date.now();

   await order.save();
    res.status(200).json({
        success:true
    })
})

async function updateStock(id, quantity){

    const product = await Product.findById(id);

    product.stock = product.stock - quantity;
    
    await product.save({validateBeforeSave:false});   
}

//Delete Order

exports.deleteOrder = catchAsyncErrors(async(req,res,next)=>{

    const order = await Order.findById(req.params.id).populate('user','email name')
    if(!order){
        return next(new ErrorHandler('No Order found by this id',404))
    }

    await order.remove();

    res.status(200).json({
        success:true,
        
    })
})