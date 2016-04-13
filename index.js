/*
var stocks = require('yahoo-finance-stream')({ frequency: 5000 });

stocks.watch('uwti');
stocks.watch('ibm');

stocks.on('data', function(stock) {
  // console.log(stock);
  console.log('%s: %d', stock.symbol, stock.bid);
});
*/

var yahooFinance = require('yahoo-finance');

yahooFinance.historical({
  symbol: 'uwti',
  from: '2016-04-11',
  to: '2016-04-12',
  // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
}, function (err, quotes) {
  if (err) {
    console.log(err)
  } else {
    console.log(quotes)
  }

});
