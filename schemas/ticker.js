const mongoose = require('mongoose')

const ticker = new mongoose.Schema({
    list:[{
        type:String
    }]
});



module.exports = Ticker = mongoose.model('ticker', ticker, 'tickers');