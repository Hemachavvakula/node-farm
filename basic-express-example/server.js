const express = require('express');
const app =express();

app.use(express.json());


app.get('/',(req,res)=>{
res.send('<h1>Hello World</h1>')
})
 const products =[
   { 
    id:1,
    name:'honey'
},
{ 
    id:2,
    name:'money'
},
{ 
    id:3,
    name:'wfffff'
}

 ]
app.get('/products',(req,res)=>{
    res.json(products);
})

app.get('/products/:id',(req,res)=>{
    const newData = products.filter(
        item=> item.id.toString() === req.params.id
    );
     return res.json(newData);
})

app.post('/addproducts',(req,res)=>{
    const {id,name} = req.body;
    console.log(id,name);
    return res.send('Data Stored !!')
})
app.listen(5000,() => console.log("server running...."));
