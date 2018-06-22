function jointBackEnd() {
    let remoteContext = '';
    remoteContext = '';

    ajaxPromise({
        'url': remoteContext + '',
        'beforeSend': () => {
            optionLine.dataset.source = [];
        },
    }).then((resp, status) => {
        for (let v of resp.data)
            optionLine.dataset.source.append({
                'statDate': v['statDate'], '用户数': v['用户数']
            });
        echarts.init($("#manruYonghuQushiDay")[0]).setOption(optionLine);
    }).catch(

    )
}

let series_mapCountry_in = [{ //seriesData[0] 线条图
    //name: v[0],
    type: 'lines',
    zlevel: 2,
    effect : {
        show : true,
        period : 4,
        trailLength : 0.7,
        color : 'rgba(255,255,255,0.3)',
        symbolSize : 3
    },
    lineStyle : {
        normal : {
            color : '#a6c84c',
            width : 0,
            curveness : 0.2
        }
    },
    data: []
}];

let optionMap_Country = {
    title: {
        text: '游客来源分析',
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
    backgroundColor: 'transparent',
    //title: localTitle,
    tooltip: {
        show: false,
        trigger: "item",
        formatter: function (v) {
            return v[1].replace(':', ' > ');
        }
    },
/*    visualMap: {
        calculable: true,
        inRange: {
            color: ['#50a3ba', '#eac736', '#d94e5d']
        },
        textStyle: {
            color: '#fff'
        }
    },*/
    geo: {
        map: 'china',
        label: {
            show: true,
            formatter: '{b}',
            position: 'right',
            color: 'white',
            fontSize: 8
        },
        roam: false,
        zoom: 1,
        itemStyle: {
            normal: {
                areaColor: '#021e3a',
                borderColor: '#2ba7ff',
                //borderWidth: 0.1,
            },
            emphasis: {
                areaColor: '#2a333d'
            }
        }
    },
    series: series_mapCountry_in
};

ajaxPromise({
    'url': '/szqy/static/plugin/Map/offline/provincialCapitalCoord.json',
}).then((resp, status) => {
    for (let k in resp.data) {
        series_mapCountry_in[0].data.push({
            fromName: k,
            toName: '贵阳',
            value: 0,
            coords: [resp.data[k], [106.671072, 26.639634]]
        });
    }

    echarts.init($('#youkeGuishudiFenxi')[0]).setOption(optionMap_Country);
});









