const catchAsyncErrors = require('../middlewares/catchAsyncError')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//Process Stripe Payments

exports.processPayment = catchAsyncErrors(async(req,res,next)=>{

    const paymentIntent = await stripe.paymentIntents.create({

        amount:req.body.amount,
        currency:'usd',

        metadata:{Intergration_Check:'accept_a_payment'}
    });
    res.status(200).json({
        success:true,
        client_secret:paymentIntent.client_secret
    })
})

//Send Strip API Key
exports.sendStripeApi = catchAsyncErrors(async(req,res,next)=>{

    res.status(200).json({
       stripeApiKey:process.env.STRIPE_API_KEY
    })
})