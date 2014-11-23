// 'View controller' type thing
(function () {
    var element = document.getElementById('boonar'),
        slider = document.getElementById('slider'),

        onSlide = function (e) {
            val = e.target.value;

            element.count = val;
        };

    slider.addEventListener('change', onSlide, false); // for IE11 :)
    slider.addEventListener('input', onSlide, false);

    // CUSTOM EVENT from the x-foo tag.
    element.addEventListener('OUCH_MOTHERFUCKER', function (e) {
        console.log(e.detail.message);
    }, false);

    window.setTimeout(function () {
        element.config = {
            foobar: 'I am an UPDATED config value',
            gazonk: 'HALLA I AM GAZONK',
            woop: {
                nested: 'whatever!'
            }
        };
    }, 1000);

    window.addEventListener('polymer-ready', function (e) {
        resolveApplication();

        element.config = {
            foobar: 'I am a config value'
        };


        document.querySelector('.loading').remove();

        console.log('POLYMER IS READY FOR YOUR SHITTY CODE!!!');
    });

    function resolveApplication() {
        var resolveDiv = document.getElementById('resolver');
        resolveDiv.setAttribute('resolved', '');
        resolveDiv.removeAttribute('unresolved');
    }
}());
