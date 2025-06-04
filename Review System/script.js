const submitBtn = document.querySelector(".submitBtn");
const reviewInput = document.querySelector("#reviewText");
const reviewDisplay = document.querySelector(".reviewDisplay")

submitBtn.addEventListener('click', ()=>{
    
    const value = reviewInput.value;
    console.log(value);
    

    const review = document.createElement('div');
    review.className = "review";

    review.innerText = value;

    reviewDisplay.appendChild(review);


    reviewInput.value = '';
})