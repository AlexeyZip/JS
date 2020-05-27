let slider1 = {
    imagesUrls: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById('show-prev-btn'),
    showNextBtn: document.getElementById('show-next-btn'),
    slideImage: document.getElementById('slide-img'),

    start: function () {
        //subscribe to event
        this.showPrevBtn.addEventListener('click', this.onShowPrevBtnClick);
        this.showNextBtn.addEventListener('click', this.onShowNextBtnClick);

        this.imagesUrls.push('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png');
        this.imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');
        this.imagesUrls.push('https://vignette.wikia.nocookie.net/wikies/images/a/a9/CSS3.png/revision/latest/scale-to-width-down/340?cb=20160909123652&path-prefix=ru');
        this.imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');



        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function () {
        this.currentImageIndex--;
        this.slideImage.src = this.imageUrls[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        //disabled prev button if need
        if (this.currentImageIndex === 0) {
            showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function () {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesUrls[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        //disabled next button if need
        if (this.currentIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    },

}