const theme_btn = document.querySelector(".theme-btn");

theme_btn.addEventListener('click' , () => {
    document.body.classList.toggle('dark-mode');
})