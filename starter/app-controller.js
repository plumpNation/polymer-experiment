// 'View controller' type thing
(function () {
    var element = document.getElementById('boonar'),
        slider = document.getElementById('slider');

    slider.addEventListener('input', function (e) {
        onSlide(e.target.value);
    }, false);

    function onSlide(val) {
        element.count = val;
    }

    window.addEventListener('polymer-ready', function (e) {
        console.log('POLYMER IS READY FOR YOUR SHITTY CODE!!!');
    });
}());
