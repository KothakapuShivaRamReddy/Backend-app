import { getProducts ,addproductForm,addproduct,deleteproduct ,editproduct,editproductForm} from "../controllers/productController.js";
import express from "express";
const productRouter = express.Router();
productRouter.get("/", getProducts);

productRouter.get("/add",addproductForm);//imported from the product controller
productRouter.post("/add",addproduct)

//delete router 
// sends the id as a params which is accessed in controllers as req.params.id
productRouter.get("/:id/delete",deleteproduct)//:id which takes id from the querydtring comes from add.js

//edit route for products
productRouter.get("/:id/edit",editproduct)

productRouter.post("/save",editproductForm)

export default productRouter;