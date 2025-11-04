const theme_btn = document.querySelector(".theme-btn");
const bodyComputedStyle = window.getComputedStyle(document.body);
const color = 'rgb(189, 167, 167)'; 
const backGroundColor = bodyComputedStyle.backgroundColor;
checkDarkMode(backGroundColor, color)
console.log(document.body.className);





theme_btn.addEventListener('click' , () => {
    const backGroundColor = bodyComputedStyle.backgroundColor;
    document.body.classList.toggle('dark-mode');
    checkDarkMode(backGroundColor, color)
})

function checkDarkMode(backGroundColor,color) {
    if(document.body.className === "dark-mode"){
        theme_btn.innerText = 'Light Mode';
    }
    else theme_btn.innerText = 'Dark Mode';
}