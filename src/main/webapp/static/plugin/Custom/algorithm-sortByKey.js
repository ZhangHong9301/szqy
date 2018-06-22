function byKey(k, desc) {
    if (!desc) //默认升序排列(第二个参数没有传递)
        desc = 1;
    else
        desc = (desc) ? -1 : 1;
    return function (a, b) {
        a = a[k];
        b = b[k];
        if (a < b) {
            return desc * -1;
        }
        if (a > b) {
            return desc * 1;
        }
        return 0;
    }
}