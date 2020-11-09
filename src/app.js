const express = require('express');

const app = express();
const hbs = require('hbs')
const path = require("path");
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')


//defin path for express config
const index = path.join(__dirname,'../public');
const view_new = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')


//setup handlebars engine and view location
//setup directry to serve
app.set('view engine','hbs')
//change views to templates
app.set('views', view_new)
hbs.registerPartials(partialsPath)



//setup stationary directory to show
app.use(express.static(index))




app.get('', (req, res)=>{
    res.render('index',{
        name:"tushar Nagar",
        title:"tushar nagar",
        age:"66"
    }) 
})


app.get('/weather',(req, res)=>{
    if(!req.query.address){
        return res.send({
           error:"please provide address" 
        })
    }

     geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
         if(error){
             return res.send({error})
         }
         forecast(latitude, longitude, (error, forecastData)=>{
             if(error){
                 return res.send({error})
             }
             res.send({
                 forecast:forecastData,
                 location,
                 address:req.query.address
             })
         })
     })

    // res.send({
    //     forecast:'it is raining',
    //     location:'mumbai',
    //     address:req.query.address
    // })
})






app.get('/products',(req, res)=>{
    if(!req.query.search){
      return res.send({
            error:'Must Provide search terms'
        })
    }
    // or we can use below code in else to get of rid with error
console.log(req.query.search);
    res.send({
        product:[]
        })
})

app.get('/address',(req, res)=>{

})

app.get('/about', (req, res)=>{
    res.render('about',{
        name:"tushar Nagar",
        title:"about",
        about:"tushar is sjsj",
        age:"66sss"
    })
})


app.get('/help', (req, res)=>{
    res.render('help',{
        name:"tushar Nagar",
        title:"help",
        head:"heading is here",
        para:"asdjn ask akd asdk aksd aks dakdask dasdkasd"
  
  
    })
})



app.get('/help/*',(req, res)=>{
    res.render('help404',{
        title:"404 page",
       name:"tushar" 
    })
})


app.get('*', (req,res)=>{
    res.render('404',{
       title:"404 page",
       name:"tushar" 
    })

})

// app.get('*', (req,res)=>{
//     res.send('my 404 page')

// })
// app.get('', (req, res) => {
//     res.send('<h1> hello </h1>');
// })  

// app.get('/help', (req, res) => {
//     res.send({
//         name:   "tushar nagar",
//         age:9,
//     })
//     })


// app.get('/whether', (req, res)=>{
// res.send({
//     forecast:"it is winter",
//     location:"india"
// }
// )
// })

app.listen(3000, ()=>{
    console.log("server is up")
})