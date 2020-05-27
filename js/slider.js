let sliderFactory = {
    createNewSlider:function (){



        let newSlider = {
            imagesUrls: [],
            currentImageIndex: 0,
            showPrevBtn: null, 
            showNextBtn: null,
            slideImage: null,
        
            start: function (elemId) {
                let that = this;
                let elemSelector = '#' + elemId
                let elem = document.querySelector(elemSelector);
        
                this.showPrevBtn = elem.querySelector('.show-prev-btn');
                this.showNextBtn = elem.querySelector('.show-next-btn');
                this.slideImage = elem.querySelector('.slider-img');
                //subscribe to event
                this.showPrevBtn.addEventListener('click', function (e) {
                    that.onShowPrevBtnClick(e);
                });
        
                this.showNextBtn.addEventListener('click', function (e) {
                    that.onShowNextBtnClick();
                });
        
        
                this.imagesUrls.push('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png');
                this.imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');
                this.imagesUrls.push('https://vignette.wikia.nocookie.net/wikies/images/a/a9/CSS3.png/revision/latest/scale-to-width-down/340?cb=20160909123652&path-prefix=ru');
                this.imagesUrls.push('https://beginpc.ru/images/internet/js_logo.jpg');
        
        
        
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = true;
            },
        
            onShowPrevBtnClick: function (e) {
                this.currentImageIndex--;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showNextBtn.disabled = false;
        
                //disabled prev button if need
                if (this.currentImageIndex === 0) {
                    this.showPrevBtn.disabled = true;
                }
            },
        
            onShowNextBtnClick: function (e) {
                this.currentImageIndex++;
                this.slideImage.src = this.imagesUrls[this.currentImageIndex];
                this.showPrevBtn.disabled = false;
        
                //disabled next button if need
                if (this.currentImageIndex === (this.imagesUrls.length - 1)) {
                    this.showNextBtn.disabled = true;
                }
            }
        
        };
        
            return newSlider;
        }
};

