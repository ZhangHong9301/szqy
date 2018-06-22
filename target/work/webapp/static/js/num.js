ajaxPromise({
    'type': 'POST',
    'url': url_keliu,
    'beforeSend': () => {
        $('#dangriLeijiKeliu').text('');
        $('#shishiXinzeng').text('');
        $('#jingzengKeliu').text('');
    }
}).then((resp, status) => {
    $('#dangriLeijiKeliu').text(resp.data['dangriLeijiKeliu']);
    $('#shishiXinzeng').text(resp.data['shishiXinzeng']);
    $('#jingzengKeliu').text(resp.data['jingzengKeliu']);
});

ajaxPromise({
    'type': 'POST',
    'url': url_dangqianXiaoxiFasongliang,
    'beforeSend': () => {
        $('#dangqianXiaoxiFasongliang').text('');
    }
}).then((resp, status) => {
    $('#dangqianXiaoxiFasongliang').text(resp.data);
});

ajaxPromise({
    'type': 'POST',
    'url': url_jinnianLeijiFasongliang,
    'beforeSend': () => {
        $('#jinnianLeijiFasongliang').text('');
    }
}).then((resp, status) => {
    $('#jinnianLeijiFasongliang').text(resp.data);
});


ajaxPromise({
    'type': 'POST',
    'url': url_jinriLeijiFasongliang,
    'beforeSend': () => {
        $('#jinriLeijiFasongliang').text('');
    }
}).then((resp, status) => {
    $('#jinriLeijiFasongliang').text(resp.data);
});

