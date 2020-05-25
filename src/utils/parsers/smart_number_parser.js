function get_smart_number(num) {
    var b = (num).toPrecision(2).split("e"); // get power
    var k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3); // floor at decimals, ceiling at trillions
    var c = k < 1 ? num.toFixed(0) : (num / Math.pow(10, k * 3)).toFixed(1); // divide by power
    var d = c < 0 ? c : Math.abs(c); // enforce -0 is 0
    var e = d + ['', 'k', 'm', 'B', 'T'][k]; // append power
    return e;
}

export default get_smart_number;
