var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);
var CoinMarketCap = require("node-coinmarketcap");
var coinmarketcap = new CoinMarketCap();

coinmarketcap.multi(coins => {
    Twitter.post('statuses/update', {status: '🔥 Current BTC price:
    $' +  coins.get("BTC").price_usd + '\n🚀Current ETH price: $'
    + coins.get("ETH").price_usd + '\n💰Current Litecoin price: $'
    + coins.get("LTC").price_usd}, function(error, tweet, response) {
        if(error){
            console.log(error);
        }
        console.log(tweet);
        console.log(response);
    });
});
