  var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "http://www.nytimes.com/?action=click&contentCollection=Opinion&region=TopBar&module=HomePage-Title&pgtype=article",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $(".story-heading");
    for(var i=0;i<titles.length;i++) {
      console.log($(titles[i]).text());
      result.push($(titles[i]).text());
    }
    //the file will save at site where you in your location path
    fs.writeFileSync("C:/Users/rach/Desktop/test/result.json", JSON.stringify(result));
  });