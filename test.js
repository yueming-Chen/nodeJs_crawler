  var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "http://blog.infographics.tw",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.item h2");
    for(var i=0;i<titles.length;i++) {
      console.log($(titles[i]).text());
      result.push($(titles[i]).text());
    }
    fs.writeFileSync("C:/Users/rach/Desktop/test/result.json", JSON.stringify(result));
  });