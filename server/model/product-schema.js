import mongoose from 'mongoose';

const prductSchema  = new mongoose.Schema({
    id: {
        type:String,
        require: true,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String,

})

const Product = mongoose.model('Product', prductSchema);

export default Product;
       