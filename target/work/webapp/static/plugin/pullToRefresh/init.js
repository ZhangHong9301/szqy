TouchEmulator();

PullToRefresh.init({
    mainElement: 'body',
    instructionsPullToRefresh: '下拉刷新',
    instructionsReleaseToRefresh: '释放更新',
    instructionsRefreshing: '加载中',
    iconArrow: '&#9660',
    iconRefreshing: '',
    onRefresh: () => {
        window.location.reload();
    }
});