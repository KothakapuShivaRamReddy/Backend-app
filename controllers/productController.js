import productModel from "../models/productModel.js";

const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.render("products/index", { products });
};
//add product controller
const addproduct=async(req,res)=>{
    const product=req.body;
    await productModel.create(product);//inserts the data
    res.redirect("/products")
}
const addproductForm=async(req,res)=>{
    res.render("products/add")
}
//edit product controller
const editproduct=async(req,res)=>{
    const Id=req.params.id;
    const product=await productModel.findOne({_id:Id});
    res.render("products/edit",{product});
}
const editproductForm=async(req,res)=>{
    const Id=req.params.id;
    await productModel.findByIdAndUpdate(Id,req.body)
    res.redirect("/products")
}

const deleteproduct=async(req,res)=>{
    const Id=req.params.id;
    await productModel.findByIdAndDelete(Id);
    res.redirect("/products")
}
export {getProducts,addproductForm,addproduct,deleteproduct,editproduct,editproductForm}