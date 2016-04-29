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
    url: "https://nportal.ntut.edu.tw/login.do",
    method: "POST"
  }, function(e,r,b) {
    if(e || !b) { return; }
    console.log(b);
    var $ = cheerio.load(b);
    var result = [];
    // var titles = $(".story-heading");
    // for(var i=0;i<titles.length;i++) {
    //   console.log($(titles[i]).text());
    //   result.push($(titles[i]).text());
    // }
    //the file will save at site where you in your location path
    fs.writeFileSync("C:/Users/rach/Desktop/test/result.json", JSON.stringify(result));
  });

  // aaa9HgDZuELsd4YbZLNqv 
  // aaavjgQpdXBFh4H5LMNqv

var express = require('express');
// 首先引入 cookie-parser 这个模块
var cookieParser = require('cookie-parser');

var app = express();
app.listen(3000);

// 使用 cookieParser 中间件，cookieParser(secret, options)
// 其中 secret 用来加密 cookie 字符串（下面会提到 signedCookies）
// options 传入上面介绍的 cookie 可选参数
app.use(cookieParser());

app.get('/', function (req, res) {
  // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
  // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
  if (req.cookies.isVisit) {
    console.log(req.cookies);
    res.send("再次欢迎访问");
  } else {
    res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    res.send("欢迎第一次访问");
  }
});