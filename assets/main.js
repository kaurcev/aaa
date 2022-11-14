function loading() {
    $.ajax({
        url: "https://get.geojs.io/v1/ip/geo.js",
        dataType: "jsonp",
        jsonpCallback: "geoip",
        success: function(data) {
            var country = data.country;
            if (country != 'Russia') {
                eval("document.write('Страна не поддерживается')");
            }
        }
    });
}