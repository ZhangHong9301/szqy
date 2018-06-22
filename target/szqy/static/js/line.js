var optionLine_keliuQushi = {
    title: {
        text: '客流趋势',
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
        left: '4%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    legend: {
        data: [],
        top: '10',
        textStyle: {
            color: '#a4cada',
            fontSize: 12
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisPointer: {
            type: 'shadow'
        },
        axisLabel: {
            textStyle: {
                color: 'white'
            },
            interval: 0,
            rotate: 15,
            /*            formatter: function (value) {
                            return value.split("").join("\n");
                        } //垂直显示 */
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#3594dd',
            }
        }

    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: 'white'
            }
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
        name: '人数',
        type: 'line',
        //smooth: true,
        /*symbol: 'circle',*/
        stack: '总量',
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 136, 212, 0)'
                }])
            }
        },
/*        areaStyle : {
            normal : {
                color : new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset : 0,
                            color : 'rgba(0, 136, 212, 0.3)'
                        },
                        {
                            offset : 0.8,
                            color : 'rgba(0, 136, 212, 0)'
                        } ], false),
                shadowColor : 'rgba(0, 0, 0, 0.1)',
                shadowBlur : 10
            }
        },*/
        itemStyle : {
            normal : {
                color : 'rgb(0,136,212)'

            }
        },
    }],
    dataset: {
        source: [
            {'time': '0点', 'cnt': 12000},
            {'time': '1点', 'cnt': 13200},
        ]
    },
};

ajaxPromise({
    'type': 'POST',
    'url': url_keliuQushi,
    'beforeSend': () => {
        optionLine_keliuQushi.dataset.source = [];
    }
}).then((resp, status) => {
    optionLine_keliuQushi.dataset.source = resp.data;

/*    let unit = getEchartUnit(optionLine_keliuQushi);
    optionLine_keliuQushi.tooltip.formatter = function (params) {
        return params[0].value.cnt + unit;
    };
    optionLine_keliuQushi.axisLabel.formatter = function (value) {
        return value + unit;
    };*/

    echarts.init($('#keliuQushi')[0]).setOption(optionLine_keliuQushi);
});