$("document").scroll(function() {
    $(window).width() <= 700 ? $(function() {
        function o() {
            return window.pageYOffset || document.documentElement.scrollTop
        }
        var e = 150;
        $(window).scroll(function() {
            var i = o();
            i >= e ? ($(".topheadmobile").css("display", "block"),
            $(".topheadmobile").addClass("fixmobile")) : ($(".topheadmobile").removeClass("fixmobile"),
            $(".topheadmobile").hide())
        })
    }) : $(".topheadmobile").hide()
});
