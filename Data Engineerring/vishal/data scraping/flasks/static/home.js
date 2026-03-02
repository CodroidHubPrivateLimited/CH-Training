// Default show static section on page load
window.onload = function () {
    showStatic();
};

function showStatic() {
    document.getElementById("staticSection").style.display = "block";
    document.getElementById("apiSection").style.display = "none";
    document.getElementById("staticBtn").classList.add("active");
    document.getElementById("apiBtn").classList.remove("active");
}

function showApi() {
    document.getElementById("apiSection").style.display = "block";
    document.getElementById("staticSection").style.display = "none";
    document.getElementById("apiBtn").classList.add("active");
    document.getElementById("staticBtn").classList.remove("active");
}