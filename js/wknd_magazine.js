function show_lang() {
    document.getElementById("hidden_lang").classList.toggle("none");
    document.addEventListener("click", function(event) {
        if (event.target.closest(".language") || event.target.closest(".language_block")) return;
        document.getElementById("hidden_lang").classList.add("none");
    });
}
function open_bg() {
    document.getElementById("hidden_bg").classList.toggle("none");
    document.addEventListener("click", function(event) {
        if (event.target.closest("#hidden_bg") || event.target.closest(".bg_btn")) return;
        document.getElementById("hidden_bg").classList.add("none");
    });
}