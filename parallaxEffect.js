// This parallax effect is based on this tutorial from Codepen user oscicen!
// https://codepen.io/oscicen/pen/zyJeJw

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#parallax");
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depthBackground = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depthChupi
        if (mediaQuery.matches) {
            _depthChupi = `${43 - (_mouseX - _w) * 0.01}% ${-20 - (_mouseY - _h) * 0.01}%`;
        }
        if (!mediaQuery.matches) {
            _depthChupi = `${43 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        }
        let x = `${_depthChupi},  ${_depthBackground}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }
})();