import { Users } from "../models/user.js";
export const getAllusers=async(req,res)=>{
    const users=await Users.find({})
   res.json({
       success:true,
       users,
   });
};
export const register=async(req,res)=>{
    const {name,email,password}=req.body
   await Users.create({
        name,
        email,
        password
    })
   res.json({
       success:true,
       message:"Register Successfully"
   });
};

 export const getUserDetails=async(req,res)=>{
    const {id}=req.params;
    const user=await Users.findById(id);
    // console.log(req.params);
    res.json({
        success:true,
       user,
    })

};

 export const updateUsers=async(req,res)=>{
    const {id}=req.params;
    const user=await Users.findById(id);
    // console.log(req.params);
    res.json({
        success:true,
        message:"Updated",
    })

};

export const deleteUsers=async(req,res)=>{
    const {id}=req.params;
    const user=await Users.findById(id);
   
    // console.log(req.params);
    res.json({
        success:true,
        message:"Delete",
    })

};