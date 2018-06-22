let optionMap = {
    title: {
        text: '游客分布',
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
    //视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）
    visualMap: {
        show: false,
        min: 111,
        max: 999,
        inRange: {
            //color: ['#212BC9', '#4F5044', '#178AEA', '#7D17EA', '#EA3C17']
            color: ['#0470D6', '#0254D2', '#0746CF', '#0139D1', '#082DDA']
        },
        left: '10%',
        bottom: '10%',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable: true,
    },
    series: [
        {
            //系列名称，用于tooltip的显示，legend的图例筛选，在setOption更新数据和配置项时用于指定对应的系列
            name: '本地',
            type: 'map',
            mapType: '贵州',
            roam: true,
            zoom: 1,
            aspectScale: 1,
            layoutCenter: ['50%', '50%'],
            layoutSize: '85%',
            label: {
                show: true,
                formatter: '{b}\n{c}人',
                position: 'right',
                color: 'white',
                fontSize: 10
            },
            emphasis: {
                label: {
                    show: true,
                    formatter: '{b}\n{c}人',
                    textStyle: {
                        color: 'white',
                        fontSize: 20,
                        fontWeight: 'bold',
                    }
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#021e3a',
                    borderColor: '#2ba7ff',
                    //borderWidth: 0.1,
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            data: [
                {
                    //name: "贵阳",
                    coord: [106.671072, 26.639634],
                    value: 66,
                    //symbol: 'pin'
                },
                {
                    //name: "毕节",
                    coord: [105.286516, 27.271978],
                    value: 55,
                    //symbol: 'pin'
                }
            ],
            /*            markPoint: {
                            symbolSize: 80,
                            label: {
                                normal: {
                                    show: true,
                                    formatter: '{b}\n{c}人'
                                }
                            },
                            itemStyle: {
                                normal: {
                                    areaColor: '#C1FFC1',
                                    color: ['rgba(17, 168,171, 0.7)']
                                },
                                emphasis: {
                                    color: ['rgb(127, 255, 0)']
                                }
                            },
                            markArea: {
                                itemStyle: {
                                    normal: {
                                        color: ['#7FFFD4']
                                    }
                                }
                            },
                            data: [
                                {
                                    //name: "贵阳",
                                    coord: [106.671072, 26.639634],
                                    value: 66,
                                    //symbol: 'pin'
                                },
                                {
                                    //name: "毕节",
                                    coord: [105.286516, 27.271978],
                                    value: 55,
                                    //symbol: 'pin'
                                }
                            ]
                        }*/
        }
    ]
};

function getAreaByCode(mapLevel, mapCode, value) {
    switch (mapLevel) {
        case 'province':
            for (let v of value) {
                if (!v || v ==null ) {
                    v.cnt = 0;
                    v.name = "";
                }
                if (v.name.indexOf('市') > 0) v.name = v.name.replace('市', '');
                if (v.name.indexOf('州') > 0) v.name = v.name.replace('州', '');
            }
            return {"cn": "贵州", "url": "guiZhou"};
        case 'city':
            switch (mapCode) {
                case '851':
                    return {"cn": "贵阳", "url": "city/guiYang"};
                case '852':
                    return {"cn": "遵义", "url": "city/zunYi"};
                case '853':
                    return {"cn": "安顺", "url": "city/anShun"};
                case '854':
                    return {"cn": "黔南", "url": "city/qianNan"};
                case '855':
                    return {"cn": "黔东南", "url": "city/qianDongNan"};
                case '856':
                    return {"cn": "铜仁", "url": "city/tongRen"};
                case '857':
                    return {"cn": "毕节", "url": "city/biJie"};
                case '858':
                    return {"cn": "六盘水", "url": "city/liuPanShui"};
                case '859':
                    return {"cn": "黔西南", "url": "city/qianXiNan"};
            }
    }
}

ajaxPromise({
    'type': 'POST',
    'url': url_youkeFenbu,
    'beforeSend': () => {
        optionMap.series[0].data = [];
    }
}).then((resp, status) => {
    let res = getAreaByCode(resp.data.mapLevel, resp.data.mapCode, resp.data.value);
    dynamicLoadJS(`/szqy/static/plugin/Map/offline/country/province/${res.url}.js`,
        function () {
            optionMap.series[0].mapType = res.cn;
            optionMap.series[0].data = resp.data.value;

            let sortedData = _.sortBy(resp.data.value, 'value');
            optionMap.visualMap.min = sortedData[0].value;
            optionMap.visualMap.max = sortedData[sortedData.length - 1].value;

            echarts.init($('#shengwaiLvke')[0]).setOption(optionMap);
        });
});


