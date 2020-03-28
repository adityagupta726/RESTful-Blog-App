const express=require('express');
//  const app=express();
const BlogRoute=express.Router();
const bodyParser=require("body-parser");
BlogRoute.use(bodyParser.urlencoded({extended:false}));
const blogModel=require('../db/models/blogs');
const blogOperations=require("../db/helpers/blogcrud");

//INDEX route
BlogRoute.get("/blogs",(request,response)=>{

     blogOperations.fetch(response);
});


//NEW route
BlogRoute.get("/blogs/new",(request,response)=>{
    response.render("new");
});


// BlogRoute.get("/addblogs",(request,response)=>{
  
//     blogOperations.add(response);
// });


//Create route
BlogRoute.post("/blogs",(request,response)=>{
   
    //create blog
    // console.log(request.body);
    // request.body.blog.body=request.sanitize(request.body.blog.body);
    // console.log("*****************");
    // console.log(request.body);
    blogModel.create(request.body.blog,(err,newBlog)=>{
                if(err){
                    response.render("new");
                }
                else{
                    //redirect to the index
                    response.redirect("/blogs");
                }
        
        })
    
});

//show route
BlogRoute.get("/blogs/:id",(request,response)=>{
blogModel.findById(request.params.id,(err,foundBlog)=>{
    if(err){
        response.redirect("/blogs");
    }
    else{
        response.render("show",{blog:foundBlog})
    }
})
});

//Edit route
BlogRoute.get("/blogs/:id/edit",(request,response)=>{
    blogModel.findById(request.params.id,(err,foundBlog)=>{
        if(err){
            response.redirect("/blogs");
        }
        else{
            response.render("edit",{blog:foundBlog})
        }
    })
});
//update route
BlogRoute.put("/blogs/:id",(request,response)=>{
   blogModel.findByIdAndUpdate(request.params.id,request.body.blog,(err,updateblog)=>{
if(err){
    response.redirect("/blogs");

}
else{
    response.redirect("/blogs/"+request.params.id);
}
   })

});

//Delete route
BlogRoute.delete("/blogs/:id",(req,res)=>{
   //destroy blog 
   blogModel.findByIdAndRemove(req.params.id,(err)=>{
       if(err){
           res.redirect("/blogs");
       }
       else{
           res.redirect("/blogs");
       }
   })
    
});

BlogRoute.get("/",(request,response)=>{
    response.redirect("/blogs");
});
module.exports=BlogRoute;