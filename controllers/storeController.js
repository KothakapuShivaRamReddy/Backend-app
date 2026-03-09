import productModel from "../models/productModel.js";

const showProducts = async (req,res) => {
    const products=await productModel.find();//fetching the data (taking data from database) and sending
    res.render("store/products",{products});
}

export {showProducts};