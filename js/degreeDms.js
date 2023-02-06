function convertDegreeToDMS(degree) {
    var deg = degree | 0;
    var frac = Math.abs(degree - deg);
    var min = (frac * 60) | 0;
    var sec = (frac * 3600 - min * 60) | 0;
    return deg + "°" + min + "'" + sec + '"';
}

function convertDMSToDegree(degrees, minutes, seconds) {
    var degree = degrees + minutes / 60 + seconds / (60 * 60);
    return degree;
}

export {convertDegreeToDMS, convertDMSToDegree}