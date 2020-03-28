const connection=require("../connection");
const Schema=connection.Schema;
const blogSchema= new Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date,default:Date.now}
});
const Blog=connection.model("Blog",blogSchema);
// Blog.insert({
//     title:"Test Blog",
//     image:"https://cdn.vox-cdn.com/thumbor/81dix4pSzNqGq5Lq0PYmALAtWPc=/0x0:1920x803/1200x800/filters:focal(1140x0:1446x306)/cdn.vox-cdn.com/uploads/chorus_image/image/62934392/detective_pikachu_trailer_25_1920.0.jpg",
//     body:"BLOG POST!!!"
// });
module.exports=Blog;