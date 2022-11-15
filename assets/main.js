console.clear();

function loading() {
    $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip",
        success: function(data) {
            var country = data.country;
            if (country != 'Russia') {
                eval("document.write('Страна не поддерживается')");
                console.clear();
                console.log('%c Ваша страна не поддерживается(' + country + ')', 'background: transparent; color: #212121; font-size: 16px;');
            } else {
                console.log('%c' + country + ' - Отлично!', 'background: transparent; color: #212121; font-size: 16px;');
            }

        }
    });
}
console.log('%c Стоп-стоп-стоп! \n Тут делать нечего ', 'background: transparent; color: #ff0000; font-size: 32px; text-align: left;');
console.log('%c Если вам интересно, то пишите сюда https://kaurcev.tk/jobs', 'background: transparent; color: #212121; font-size: 16px;');