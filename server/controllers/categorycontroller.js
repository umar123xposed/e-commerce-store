import { response } from "express";
import category from "../models/category.js";
//get request
export const getCategory=async(req, res)=>{
    const categories= await category.find()
    if(!categories){
        return res.status(500).json({"error": "No category found!"})
        
    }
    res.status(200).json(categories)
}
//post request
export const postCategory=async(req,res)=>{
    const {name,color,icon}= req.body
    try {
    const existingCategory= await category.findOne({name})
    if(existingCategory){
        return res.status(400).json({"error": "category already exist"})
     }
    
        const newCategory= new category({
            name:name,
            color:color,
            icon:icon
        })
        
        const saveCategory= await newCategory.save()
        res.status(201).json(saveCategory)
    } catch (error) {
        res.status(500).json({"error":error})
        
    }
}

//delete request
export const deleteCategory=async(req,res)=>{
    const id=req.params.id
    try {
        const deletedCategory= await category.findOneAndDelete({_id:id})
        res.status(200).json({"success": true, deletedCategory})
    } catch (error) {
        res.status(500).json({"error": error.message})
        
    }
}