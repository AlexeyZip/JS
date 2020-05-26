
//  find elements
let showPrevBtn = document.getElementById('show-prev-btn');
let showNextBtn = document.getElementById('show-next-btn');
let sliderImages = document.getElementById('slide-img');

// subscribe to events
showPrevBtn.addEventListener('click', onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);
// create images array
let imagesUrls = [];
imagesUrls.push('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png');
imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');
imagesUrls.push('https://vignette.wikia.nocookie.net/wikies/images/a/a9/CSS3.png/revision/latest/scale-to-width-down/340?cb=20160909123652&path-prefix=ru');
imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');

let currentImageIndex = 0;

sliderImages.src = imagesUrls[currentImageIndex];
showPrevBtn.disabled = true;



// functions definitions
function onShowPrevBtnClick(){
    currentImageIndex--;
    sliderImages.src = imagesUrls[currentImageIndex];
    showNextBtn.disabled = false;
         // disabled next button id need
         if (currentImageIndex === 0) {
            showPrevBtn.disabled = true;  
        }
}
function onShowNextBtnClick(){
    currentImageIndex++;
    sliderImages.src = imagesUrls[currentImageIndex];
    showPrevBtn.disabled = false;
        // disabled next button id need
    if (currentImageIndex === (imagesUrls.length - 1) ){
        showNextBtn.disabled = true;
    }
   
}