(function (undefined) {

    window.onload = function (event) {
        resizeCubes();
    };

    window.onresize = function (event) {
        resizeCubes();
    };

    function resizeCubes() {
        var windowSize = document.getElementsByTagName('body')[0].clientWidth;
        var distance = windowSize % 300;
        var amount = 0;
        var size = 0;

        if (distance <= 150) {
            amount = Math.floor(windowSize / 300);
            size = windowSize / amount;
        } else {
            amount = Math.floor(windowSize / 300);
            size = windowSize / amount;
        }

        var tiles = document.querySelectorAll('div.tile');
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].setAttribute("style", "width:" + size + "px");
        }
    }
})();
