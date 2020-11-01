window.addEventListener("scroll", () => {
    const navbar = document.querySelector('#navbar');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.style.backgroundColor = "#2b6cb0";
        navbar.style.top = "0";
    } else {

        navbar.style.removeProperty("background-color");
        navbar.style.top = "0";

    }
})


window.addEventListener("load", () => {
    const NewsBar = document.querySelector('#NavNews');
    const CloseButton = document.querySelector('#close-news');
    CloseButton.addEventListener("click", () => {
        NewsBar.remove()
    })
})