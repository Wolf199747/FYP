const mongoose= require('mongoose');

const ProductSchema= new mongoose.Schema({

    name:{
        type: String,
        required:[true,'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 Characters']
    },
    price:{

        type:Number,
        required:[true,'Please enter product price'],
        maxLength:[5,'Product name cannot exceed 5 Characters'],
        default:0.0
    },
    description:{
        type:String,
        required:[true,'Please enter product description'],
    },
    ratings:{
        type:Number,
        default:0
    },
    images:{
            type: String,
            required:true
},
    category:{
        type: String,
        required:[true,'Please enter product category'],
        enum:{
            values:[
                'Tour',
                'Travel'
            ],
            message:'Please select Correct Category'
        }
    },
    location:{
        type: String,
        required:[true,'Please enter Package Location'],
        enum:{
            values:[
                'Swat',
                'Islamabad',
                'Murree',
                'Gilgit',
                'Lahore',
                'Kaghan',
                'Naran',
                'Kashmir'
            ],
            message:'Please select Correct Location'
        }
    },
    noOfPersons:{
        type:String,
        required:[true,'Please enter Person(s) Capacity']
    },
    seller:{
        type:String,
        required:[true,'Please enter Agent Type']
    },
   
    duration:{
        type: String,
        required:[true,'Please enter Duration length']
    },
    stock:{
        type: Number,
        required:[true,'Please enter product Type'],
        maxLength:[5, 'Product cannot exceed 5 characters'],
        default:0
    },
    
    
 
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports= mongoose.model('product',ProductSchema);
