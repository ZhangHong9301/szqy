function getOutlinePoint(outlineStr) {
    let outlinePoint = [];
    for (let v of outlineStr.split(";")) outlinePoint.push(new BMap.Point(v.split(",")[0], v.split(",")[1]));
    return outlinePoint;
}

function drawOutline(bmapObj, outlineStr, styleJSON) {
    let cityPolygon = new BMap.Polygon(getOutlinePoint(outlineStr), styleJSON);
    bmapObj.addOverlay(cityPolygon);
}