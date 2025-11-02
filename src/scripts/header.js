
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos - 1) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-55 px";
        }
        prevScrollpos = currentScrollPos;
    }
