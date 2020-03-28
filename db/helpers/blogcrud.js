const blogModel=require('../models/blogs');
const blogOperations={
    add(response){
        const blogs=[{title:"Test Blog_1",
          image:"http://pngimg.com/uploads/pokemon/pokemon_PNG96.png",
        body:"BLOG POST 1!!!"},{title:"Test Blog_2",
        image:"http://pngimg.com/uploads/pokemon/pokemon_PNG96.png",
      body:"BLOG POST 2!!!"}];
      blogModel.insertMany(blogs,(err)=>{
          if(err){
              response.status(500).json({'message':'Error During Add'});
          }
          else{
              response.status(500).json({'message':'Add Successful'});
          }
      })
    },
    fetch(response){
        blogModel.find({},(err,blogs)=>{
            if(blogs){
                // response.status(200).json({'blogs':docs});
                response.render("index",{blogs:blogs});
            }
            else{
                response.status(404).json({'blogs':[]});
            }
        })
    },
    // creates(request,response){
    //     blogModel.create(request.body.blog,(err,newBlog)=>{
    //         if(err){
    //             response.render("new");
    //         }
    //         else{
    //             response.redirect("/blogs")
    //         }
    
    // })
  
// }
}
module.exports=blogOperations;