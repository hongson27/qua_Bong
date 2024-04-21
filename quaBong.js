let quaBong = document.getElementById("quaBong");
function init() {
    quaBong = document.getElementById("quaBong");
    quaBong.style.position = "relative";
    quaBong.style.left = "0px";
}
function moveRight() {
    quaBong.style.left = parseInt(quaBong.style.left) + 10 + 'px';
}
window.onload = init;
