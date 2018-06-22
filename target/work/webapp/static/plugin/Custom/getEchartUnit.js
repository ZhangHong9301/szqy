const TEN_THOUSAND = 10000;
const HUNDRED_MILLION = 100000000;

function getEchartUnit(option) {
    let minCnt = parseFloat(_.sortBy(option.dataset.source, 'cnt')[0]['cnt']);
    switch (minCnt) {
        case minCnt < TEN_THOUSAND:
            return '人';
        case minCnt >= TEN_THOUSAND && minCnt < HUNDRED_MILLION:
            for (let v of option.dataset.source) {
                v.cnt = v.cnt % TEN_THOUSAND ? (v.cnt / TEN_THOUSAND).toFixed(2) : v.cnt / TEN_THOUSAND;
            }
            return '万';
        case minCnt >= HUNDRED_MILLION:
            for (let v of option.dataset.source) {
                v.cnt = v.cnt % HUNDRED_MILLION ? (v.cnt / HUNDRED_MILLION).toFixed(2) : v.cnt / HUNDRED_MILLION;
            }
            return '亿';
    }
}