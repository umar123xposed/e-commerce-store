import product from "../models/products.js"
//get request
export const getProduct=async(req, res)=>{
    const items= await product.find()
    try {
        if(!items){
            res.status(401).json({"error":"Could not find the products"})
            return
        }
        res.status(201).json(items)
    } catch (error) {
        res.status(500).json({"error":error})
        
    }
    
}
//post request
export const postProduct=(req,res)=>{ 
try {
    const {name,image,count}=req.body
    const items= new product({
        name: name,
        image: image,
        count: count
    })

    items.save()
    .then(()=>{
        res.status(200).json(items)
    })
    .catch((error)=>{
        res.status(400).json({"error":error})
    })
} catch (error) {
    res.status(500).json({"error":error})
}
   
}

export const deleteProduct=(req,res)=>{
    const id= req.params
    try {
        if (!id){
            res.status
        }
    } catch (error) {
        
    }
}

