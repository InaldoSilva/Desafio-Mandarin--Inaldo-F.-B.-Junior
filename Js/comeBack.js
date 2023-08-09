let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Vai perder as novidades? 😯";
})
window.addEventListener("focus", () => {
    document.title = "Mandatrends";
})