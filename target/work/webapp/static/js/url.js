let url_duanxinFasongPaihang = '/szqy/Prov/getSmsLeaderboard';
let url_jinriLeijiFasongliang = '/szqy/Prov/smsCountByDay';
let url_jinnianLeijiFasongliang = '/szqy/Prov/smsCountByYear';
let url_dangqianXiaoxiFasongliang = '/szqy/Prov/smsCountByTime';
let url_keliuQushi = '/szqy/Prov/flowTrend';
let url_youkeLvyouShichang = '/szqy/Prov/cusPlayTime';
let url_youkeZhuliuFenxi = '/szqy/Prov/cusStayTime';
let url_lvkeLaiyuanTop10 = '/szqy/Prov/cusLandTop';
let url_keliu = '/szqy/Prov/allDayFlow';
let url_youkeFenbu = '/szqy/Prov/getHeatMap';

let isFakeData = false;
if (isFakeData) {
    url_duanxinFasongPaihang = 'json/sample/duanxinFasongPaihang.json';
    url_jinriLeijiFasongliang = 'json/sample/jinriLeijiFasongliang.json';
    url_jinnianLeijiFasongliang = 'json/sample/jinnianLeijiFasongliang.json';
    url_dangqianXiaoxiFasongliang = 'json/sample/dangqianXiaoxiFasongliang.json';
    url_keliuQushi = 'json/sample/keliuQushi.json';
    url_youkeLvyouShichang = 'json/sample/youkeLvyouShichang.json';
    url_youkeZhuliuFenxi = 'json/sample/youkeZhuliuFenxi.json';
    url_lvkeLaiyuanTop10 = 'json/sample/lvkeLaiyuanTop10.json';
    url_keliu = 'json/sample/keliu.json';
    url_youkeFenbu = 'json/sample/youkeFenbu.json';

    //dynamicLoadJS("src/plugin/pullToRefresh/touch-emulator-0.0.2.js");
    //dynamicLoadJS("src/plugin/pullToRefresh/pulltorefresh-0.1.14.js");
    //dynamicLoadJS("src/plugin/pullToRefresh/init.js");
}