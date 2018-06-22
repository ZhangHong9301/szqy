$.ajaxSetup({
    type: "GET",
    headers: {},
    //预期服务器返回的数据类型
    //如果不指定，JQuery将自动根据http包mime信息返回responseXML或responseText，并作为回调函数参数传递
    //contentType: 当发送信息至服务器时，内容编码类型默认为"application/x-www-form-urlencoded"。该默认值适合大多数应用场合
    cache: false, //不会从浏览器缓存中加载请求信息
    //timeout: 15000,
    error: function ($thisXHR, textStatus, errorMsg) {
        // jqXHR 是经过jQuery封装的XMLHttpRequest对象
        // textStatus 可能为： null、"timeout"、"error"、"abort"或"parsererror"
        // errorMsg 可能为： "Not Found"、"Internal Server Error"等
        console.log(`【请求失败(${this.type})】\nURL: ${this.url}\ntextStatus: ${textStatus}\nerrorMsg: ${errorMsg}`);
    }
});

const ajaxPromise = param => {
    return new Promise((resolve, reject) => {
        $.ajax({
            'type': param.type || 'GET',
            'async': param.async || true,
            'url': param.url,
            'data': param.data || '',
            'dataType': param.dataType || 'JSON',
            'cache': false,
            'beforeSend': param.beforeSend || (() => {
            }),
            'success': (resp, status) => {
                switch (resp.statusCode) {
                    case 0:
                        resolve(resp); //将promise的状态从pending转为fullfilled
                        break;
                    case 1:
                        console.log(`【响应异常(${this.type})】\nURL: ${this.url}`);
                        break;
                    case 2:
                        console.log(`【查无数据(${this.type})】\nURL: ${this.url}`);
                }
            },
            'error': () => {
                reject();
            }
        })
    })
};
