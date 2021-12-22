window.onload = function correctTime() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
    setTimeout(correctTime, 1000);

    function checkTime(i) {
        if (i < 10) { i = '0' + i; }
        return i;
    }
}