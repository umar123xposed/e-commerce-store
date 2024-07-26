import category from "../models/category.js";

//get request
export const getCategory=async(req, res)=>{
    try{
    const categories= await category.find()
    if(!categories){
        return res.status(404).json({error: "No category found!"})
        
    }
    return res.status(200).json(categories)
}
catch(error){
    res.status(500).json({error:error.message})
}
}

//getbyid request
export const getById=async(req,res)=>{
    try {
        const id=req.params.id
        const categories= await category.findById({_id:id})
        if(!categories){
            return res.status(404).json({error:"No category found!"})
        }
        return res.status(201).json(categories)
    } catch (error) {
        return res.status(500).json({error :error.message})
        
    }
    
}

//post request
export const postCategory=async(req,res)=>{
    const {name,color,icon}= req.body
    try {
    const existingCategory= await category.findOne({name})
    if(existingCategory){
        return res.status(400).json({error: "category already exist"})
     }
    
        const newCategory= new category({
            name:name,
            color:color,
            icon:icon
        })
        
        const saveCategory= await newCategory.save()
        res.status(201).json(saveCategory)
    } catch (error) {
        res.status(500).json({error:error.message})
        
    }
}

//update request
export const updateCategory = async (req, res) => {
    const { name, color, icon } = req.body;
    const id = req.params.id;

    try {
        const categoryExists = await category.findById({_id:id});
        if (!categoryExists) {
            return res.status(404).json({ error: "Category not found" });
        }

        const updatedCategory = await category.findByIdAndUpdate(
            id, 
            { name, color, icon },
            { new: true } 
        );

        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


//delete request
export const deleteCategory=async(req,res)=>{
    const id=req.params.id
    try {
        const deletedCategory= await category.findOneAndDelete({_id:id})
        res.status(200).json({"success": true, deletedCategory})
    } catch (error) {
        res.status(500).json({error: error.message})
        
    }
}