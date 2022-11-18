// document.getElementsByTagName("main")[0].style.display = "none";

function loading() {
    console.clear();

        document.getElementById("loading").remove();
    }
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
                console.clear();
                console.log('%c Стоп-стоп-стоп! \n Тут делать нечего ', 'background: transparent; color: #ff0000; font-size: 32px; text-align: left;');
                console.log('%c Если вам интересно, то пишите сюда https://kaurcev.tk/jobs', 'background: transparent; color: #212121; font-size: 16px;');
                console.log('%c' + country + ' - Отлично!', 'background: transparent; color: #212121; font-size: 16px;');
            }

        }
    });
}

var deadline = '2022-10-19';

function getTimeRemaining(nashe_vremya) {
    var t = Date.parse(new Date()) - Date.parse(nashe_vremya);
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return { 'total': t, 'days': days, 'hours': hours, 'minutes': minutes, 'seconds': seconds };
}

function initializeClock(id, nashe_vremya) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(nashe_vremya);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) { clearInterval(timeinterval); }
    }
    updateClock();

    var timeinterval = setInterval(updateClock, 1000);
}
initializeClock('countdown', deadline);

/*

        Start Test Site
        http://localhost/

        Start Site
        http://kaurcev.tk/

*/
