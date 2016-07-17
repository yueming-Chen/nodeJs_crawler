  var request = require("request");
  var fs = require("fs");
  // var header={
  //   'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
  //   'Accept-Encoding':'gzip, deflate, sdch',
  //   'Accept-Language':'zh-TW,zh;q=0.8,en-US;q=0.6,en;q=0.4',
  //   'Connection':'keep-alive',
  //   'Cookie':'__utma'=19105767.1628139178.1444977461.1453305783.1459780192.5; __utmz=19105767.1444977461.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _ga=GA1.3.1628139178.1444977461; JSESSIONID='aaa9HgDZuELsd4YbZLNqv',
  //   'Host':'nportal.ntut.edu.tw',**
  //  'Upgrade-Insecure-Requests':1,**
  //   'User-Agent':'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.112 Safari/537.36',
  // };
  var cheerio = require("cheerio");
	  request({
	    url: "https://dotblogs.com.tw/joysdw12/archive/2013/06/08/captcha-cracked.aspx",
	    method: "GET"
	  }, function(e,r,b) {
	    if(e || !b) { return; }
	    console.log(b);
	    var $ = cheerio.load(b);
	    var result = [];
	    fs.writeFileSync("C:/Users/rach/Desktop/test/result.json", JSON.stringify(result));
	  });
