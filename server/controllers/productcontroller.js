
import Category from "../models/category.js"
import product from "../models/products.js"

//get request
export const getProduct=async(req, res)=>{
    const items= await product.find()
    try {
        if(!items){
            return res.status(401).json({"error":"Could not find the products"})
            
        }
        return res.status(201).json(items)
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
    
}
//getbyid request
export const getById=async(req,res)=>{
    const id=req.params.id
    try {
        const items= await product.findById({_id:id}).populate("category")
        if(!items){
            return res.status(404).json({ error:"Could not find the product"})
            
        }
        return res.status(200).json(items)
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

//post request
export const postProduct=async(req,res)=>{ 
try {
    const {name,description,richdescription,image,brand,price,category,count,rating,numReviews,isFeatured}=req.body
    const categories= await Category.findById(category)

    if(!categories){
        return res.status(404).json({error: "Invalid Category."})
    }
    
    const Products= new product({
        name:name,
        description:description,
        richdescription:richdescription,
        image: image,
        brand:brand,
        price:price,
        category:category,
        count:count,
        rating: rating,
        numReviews: numReviews,
        isFeatured: isFeatured
    })

    const items = await Products.save()
    return res.status(200).json(items)
} catch (error) {
    return res.status(500).json({error:error.message})
}
   
}
//delete request
export const deleteProduct=async(req,res)=>{
    const id= req.params.id
    try {
        const deletedProduct= await product.findByIdAndDelete({_id:id})
        res.status(201).json({success:true, deletedProduct})
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}

//update request
export const updateProduct=async(req,res)=>{
    const {name,description,richdescription,image,brand,price,category,count,rating,numReviews,isFeatured}=req.body
    const id=req.params.id
    try {
        const existingProduct= await product.findById({_id:id})
        if(!existingProduct){
            return res.status(404).json({error: "No existing product found to be updated!"})
        }
        const updatedProduct= await product.findByIdAndUpdate({_id:id}, {name,description,richdescription,image,brand,price,category,count,rating,numReviews,isFeatured}, {new: true})

        return res.status(200).json(updatedProduct)
    } catch (error) {
        return res.status(500).json({error:error.message})
        
    }
}

