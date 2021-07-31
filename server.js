const express = require('express');
const path = require('path');
const axios = require('axios');


const app = express();



app.use(express.static(path.join(__dirname, 'views')));

app.set('view engine', 'ejs');

const fetchPrice = async()  =>  {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json", {
        });
        var price = response.data.bpi.USD.rate;
        return price;
}

app.get('/', async (req, res) => {
    try{
        var price = await fetchPrice();
        res.render('index', {price: price});
    }catch(err){
        res.render('index');
    }
});

app.get('/api/price', async (req, res) => {
    try{
        var price = await fetchPrice();
        res.status(200).json({ price });
    }catch(err){
        console.log(err);
        const errors = {error: "Error getting price"};
        res.status(500).json({ errors });
    }
})

var PORT = process.env.PORT || 5000;
var server = app.listen(PORT);


