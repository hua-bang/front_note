// 以往的封装方式
// (function() {
//     var $ = (window.$ = {});
//     $.web = "hdcms";

//     var url = "hdcms.com";  //外部无法直接获取得到
//     //使用了函数直接返回
//     $.getUrl = function() {
//         return url;
//     }   
// }.bind(window)());

{
    let $ = (window.$ = {});
    $.web = "hdcms";

    let url = "hdcms.com";  //外部无法直接获取得到
    //使用了函数直接返回
    $.getUrl = function() {
        return url;
    }      
}