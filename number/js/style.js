var f = setInterval(function() {
    var res = document.getElementById('jdt-1');
    var res2 = res.offsetWidth;
    var ser = document.getElementById('jdt-2');
    var res3 = ser.offsetWidth;
    var num = document.getElementById('num');
    $('#jdt-2').animate({ width: res2 + 'px' }, 2000);
    var j = res2 / 100;
    num.innerHTML = Math.floor(`${res3/j}`);
    if (res2 = res3) {
        setTimeout(function() {
            window.location.href = 'number2.html';
        }, 2000);
        return clearInterval(f);
    }
}, 100)