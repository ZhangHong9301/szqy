let optionBar_lvkeLaiyuanTop10 = {
    title: {
        text: '旅客来源Top10',
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
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    grid: {
        top: '22%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        axisLabel: {
            textStyle: {
                color: 'white'
            },
            interval: 0,
            //rotate: 15,
            //formatter: function (value) {return value.split("").join("\n");}
        },
        axisLine: {
            lineStyle: {
                color: '#3594dd'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: 'white'
            },
        },
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3594dd',
            }
        }
    }],
    series: [{
        name: '',
        type: 'bar',
        color: '#3594dd',
        barWidth: '40%',
        itemStyle : {
            normal : {
                color : new echarts.graphic.LinearGradient(0, 0, 0,
                    1, [ {
                        offset : 0,
                        color : 'rgba(17, 168,171, 1)'
                    }, {
                        offset : 1,
                        color : 'rgba(17, 168,171, 0.1)'
                    } ]),
                shadowColor : 'rgba(0, 0, 0, 0.1)',
                shadowBlur : 10
            }
        }
    }],
    dataset: {
        source: [
            {'province': '四川', 'cnt': 12000},
            {'province': '云南', 'cnt': 13200},
        ]
    },
};

let optionBar_duanxinFasongPaihang = {
    title: {
        text: '短信发送排行',
        left: 20,
        top: 8,
        //backgroundColor: '#86B3FF',
        textStyle: {
            color: 'white',
            fontSize: 16,
            fontWeight: 'normal'
        },
        padding: [5, 10],
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLabel: {
            textStyle: {
                color: 'white'
            },
            interval: 0,
            //rotate: 15,
            //formatter: function (value) {return value.split("").join("\n");}
        },
        axisLine: {
            lineStyle: {
                color: '#3594dd',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            textStyle: {
                color: 'white'
            },
            //formatter: '{value}人'
        },
        axisLine: {
            lineStyle: {
                color: '#3594dd',
            }
        }
    },
    series: [{
        type: 'bar',
        color: '#3594dd',
        barWidth: '60%',
        itemStyle : {
            normal : {
                color : new echarts.graphic.LinearGradient(0, 0, 0,
                    1, [ {
                        offset : 0,
                        color : 'rgba(17, 168,171, 1)'
                    }, {
                        offset : 1,
                        color : 'rgba(17, 168,171, 0.1)'
                    } ]),
                shadowColor : 'rgba(0, 0, 0, 0.1)',
                shadowBlur : 10
            }
        }
    }],
    dataset: {
        source: [
            {'province': '四川', 'cnt': 120000000},
            {'province': '云南', 'cnt': 132000000},
        ]
    },
};

ajaxPromise({
    'type': 'POST',
    'url': url_lvkeLaiyuanTop10,
    'beforeSend': () => {
        optionBar_lvkeLaiyuanTop10.dataset.source = [];
    }
}).then((resp, status) => {
    optionBar_lvkeLaiyuanTop10.dataset.source = _.sortBy(resp.data, function(item) {
        return -item['cnt'];
    });

    /*    let unit = getEchartUnit(optionBar_lvkeLaiyuanTop10);
        optionBar_lvkeLaiyuanTop10.tooltip.formatter = function (params) {
            return params[0].value.cnt + unit;
        };
        optionBar_lvkeLaiyuanTop10.axisLabel.formatter = function (value) {
            return value + unit;
        };*/

    echarts.init($('#lvkeLaiyuanTop10')[0]).setOption(optionBar_lvkeLaiyuanTop10);
});

ajaxPromise({
    'type': 'POST',
    'url': url_duanxinFasongPaihang,
    'beforeSend': () => {
        optionBar_duanxinFasongPaihang.dataset.source = [];
    }
}).then((resp, status) => {
    optionBar_duanxinFasongPaihang.dataset.source = _.sortBy(resp.data, function(item) {
        return -item['cnt'];
    });

    /*    let unit = getEchartUnit(optionBar_lvkeLaiyuanTop10);
        optionBar_lvkeLaiyuanTop10.tooltip.formatter = function (params) {
            return params[0].value.cnt + unit;
        };
        optionBar_lvkeLaiyuanTop10.axisLabel.formatter = function (value) {
            return value + unit;
        };*/

    echarts.init($('#duanxinFasongPaihang')[0]).setOption(optionBar_duanxinFasongPaihang);
});