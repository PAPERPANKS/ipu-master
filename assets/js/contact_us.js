function showResult(e) {
    return 0 == e.length ? (document.getElementById("wrapper").innerHTML = "",
    document.getElementById("wrapper").style.border = "0px",
    void (document.getElementById("wrapper").style.display = "none")) : (window.XMLHttpRequest ? xmlhttp = new XMLHttpRequest : xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.onreadystatechange = function() {
        4 == xmlhttp.readyState && 200 == xmlhttp.status && (document.getElementById("wrapper").innerHTML = xmlhttp.responseText,
        document.getElementById("wrapper").style.display = "block")
    }
    ,
    xmlhttp.open("GET", "livesearch.php?q=" + e, !0),
    void xmlhttp.send())
}
function showResultuss(e) {
    return 0 == e.length ? (document.getElementById("wrapper").innerHTML = "",
    document.getElementById("wrapper").style.border = "0px",
    void (document.getElementById("wrapper").style.display = "none")) : (window.XMLHttpRequest ? xmlhttp = new XMLHttpRequest : xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"),
    xmlhttp.onreadystatechange = function() {
        4 == xmlhttp.readyState && 200 == xmlhttp.status && (document.getElementById("wrapper").innerHTML = xmlhttp.responseText,
        document.getElementById("wrapper").style.display = "block")
    }
    ,
    xmlhttp.open("GET", "../livesearchuss.php?q=" + e, !0),
    void xmlhttp.send())
}
var element;
$(document).ready(function() {
    $("tr").click(function(e) {
        var t = $(this).attr("id");
        $("." + t).toggle(),
        element = $("." + t).map(function() {
            return this.id
        }).get();
        for (var n = 0; n < element.length; n++)
            $("." + element[n]).hide()
    })
});
