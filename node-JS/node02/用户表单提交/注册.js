var http = require("http");//引入http模块
var url = require("url");//引入URL模块  URL模块:用于解析URL路径和参数
http.createServer((req,res)=>{
    res.write('<head><meta charset="UTF-8"></head>');

    //url :
    //   请求地址和端口/根目录/子目录? 参数
    //  127.0.0.1:8080/home/data?name=啦啦&age=12
    // (method)请求方式 : get / post
    var urlObj = url.parse(req.url,true);//当参数为true时,query解析为对象.参数默认为false

    if(urlObj.pathname == "/aaa"){
        console.log(urlObj.query);
        res.write(JSON.stringify(urlObj.query));
    }

    res.end();//结束请求
}).listen(8080);