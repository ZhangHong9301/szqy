let optionPie_youkeLvyouShichang = {
    title: {
        text: '游客旅游时长',
        left: 20,
        top: 10,
        //backgroundColor: '#86B3FF',
        textStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'normal'
        },
        padding: [5, 10],
    },
    //legend: {},
    tooltip: {formatter: '{b}: {d}%'},
    series: [{
        type: 'pie',
        radius: ['0', '45%'], //饼图的半径，数组的第一项是内半径，第二项是外半径。
        center: ['50%', '60%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        color:['#104e8b','#024df7','#2c85f3','#0ca2f8','#31777e','#01626b'],
        label: {
            color: 'white'
        }
        // No encode specified, by default, it is '2012'.
    }],
    dataset: {
        source: [
            ['10分钟以下', 41.1],
            ['10-20分钟', 86.5]
        ]
    },
};

let optionPie_youkeZhuliuFenxi = {
    title: {
        text: '游客驻留分析',
        left: 20,
        top: 10,
        //backgroundColor: '#86B3FF',
        textStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'normal'
        },
        padding: [5, 10]
    },
    //legend: {},
    tooltip: {formatter: '{b}: {d}%'},
    series: [{
        type: 'pie',
        radius: ['0', '45%'], //饼图的半径，数组的第一项是内半径，第二项是外半径。
        center: ['50%', '60%'], //饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        color:['#104e8b','#024df7','#2c85f3','#0ca2f8','#31777e','#01626b'],
        label: {
            color: 'white'
        }
        // No encode specified, by default, it is '2012'.
    }],
    dataset: {
        source: [
            ['10分钟以下', 41.1],
            ['10-20分钟', 86.5]
        ]
    },
};

ajaxPromise({
    'type': 'POST',
    'url': url_youkeLvyouShichang,
    'beforeSend': () => {
        optionPie_youkeLvyouShichang.dataset.source = [];
    }
}).then((resp, status) => {
    optionPie_youkeLvyouShichang.dataset.source = resp.data;

    echarts.init($('#youkeLvyouShichang')[0]).setOption(optionPie_youkeLvyouShichang);
});

ajaxPromise({
    'type': 'POST',
    'url': url_youkeZhuliuFenxi,
    'beforeSend': () => {
        optionPie_youkeZhuliuFenxi.dataset.source = [];
    }
}).then((resp, status) => {
    optionPie_youkeZhuliuFenxi.dataset.source = resp.data;

    echarts.init($('#youkeZhuliuFenxi')[0]).setOption(optionPie_youkeZhuliuFenxi);
});
