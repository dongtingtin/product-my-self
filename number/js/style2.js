$('.banner-img-2').click(function() {
    setInterval(function() {
        $(this).text('检查更新中...');
        setTimeout(function() {
            $('.banner-img-2').text('更新已完成');
        }, 2000);
    }, 5000)

})
var i = 0;
$('.radius').click(function() {
        if (i == 0) {
            $('.radius').css({ right: '0px' });
            $('.text2-2').css({ backgroundColor: '#8fccff' });
            $('.banner-img-2').text('检查更新中...');
            setTimeout(function() {
                $('.banner-img-2').text('更新已完成');
            }, 2000);
            i = 1;
        } else {

            $('.radius').css({ right: '20px' });
            $('.text2-2').css({ backgroundColor: '#dcdcdc' });
            $('.banner-img-2').text('检查更新');
            i = 0;
        }
    })
    // $('.radius').click(function() {
    //     $('.radius').css({ right: '10px' });
    //     $('.radius').click(function() {
    //         $('.radius').css({ left: '5px' });
    //         $('.text2-2').css({ backgroundColor: '#dcdcdc' });
    //     })
    //     $('.text2-2').css({ backgroundColor: '#8fccff' });
    // })