import mongoose from "mongoose";
const dbConnect= async ()=>{ 
    const URL=process.env.MONGO_URL;
    try{
       
        await mongoose.connect(URL);//it return a promise
        //console.log()//it was not excuted till mongoose connection excution
    } catch(err){
      console.log(err);
    }
}

export default dbConnect;
