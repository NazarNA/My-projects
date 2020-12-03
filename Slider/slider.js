let sliderFactory = {

	getNewSlider: function (){
	let newSlider = {
	btnPrev: null, // document.querySelector('.btn-prev'),
	btnNext: null, //document.querySelector('.btn-next'),
	labelPrev: null, //document.getElementById('label-prev'),
	labelNext: null, //document.getElementById('label-next'),
	sliderImg: null, //document.querySelector('.slider-img'),
	countOfImg: null, //document.getElementById('countNum'),
	sliderItems: [],	
	currentIndex: 2,

	start: function(elementID) {
		let that = this;

		let element = document.getElementById(elementID);

		this.btnPrev = element.querySelector('.btn-prev');
		this.btnNext = element.querySelector('.btn-next');
		this.labelPrev = element.querySelector('#label-prev');
		this.labelNext = element.querySelector('#label-next');
		this.sliderImg = element.querySelector('.slider-img');
		this.countOfImg = element.querySelector('.countNum');


		this.btnPrev.addEventListener('click',function(e){
			that.onBtnPrevClick(e);
		});
		this.btnNext.addEventListener('click',function(e){
			that.onBtnNextClick(e);
		});

		this.sliderItems.push('https://i.pinimg.com/564x/fc/cf/c6/fccfc6d09690533e4408e28fc59d1976.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/69/4d/cc/694dcc4a7f1cd7a0b1d9241f422ab7d5.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/34/a4/f5/34a4f54edf651fb0822c062ba77d2416.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/05/90/be/0590be27179342fdf898f784a0e9e9d7.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/91/69/db/9169db4e3052e8c00a32213dc3c813af.jpg');

		that.sliderImg.src = this.sliderItems[this.currentIndex];
	},

	onBtnPrevClick: function() {
		if(this.currentIndex !== 0){
			this.currentIndex--;
		}
		this.sliderImg.src = this.sliderItems[this.currentIndex];
		this.countOfImg.innerHTML = this.currentIndex + 1;

		if (this.currentIndex === 0){
			this.labelPrev.style.visibility = 'hidden';
		} else if(this.currentIndex > 0) {
			this.labelNext.style.visibility = 'visible';
		};
	},

	onBtnNextClick: function() {
		if(this.currentIndex !== this.sliderItems.length - 1){
			this.currentIndex++;
		}	;
		this.sliderImg.src = this.sliderItems[this.currentIndex];
		this.countOfImg.innerHTML = this.currentIndex + 1;

		if (this.currentIndex === this.sliderItems.length - 1){
			this.labelNext.style.visibility = 'hidden';
		} else if(this.currentIndex < this.sliderItems.length - 1) {
			this.labelPrev.style.visibility = 'visible';
		};
	},
	}; 	

	return newSlider;
}
};



function getNewSlider(){
	let newSlider = {
	btnPrev: null, // document.querySelector('.btn-prev'),
	btnNext: null, //document.querySelector('.btn-next'),
	labelPrev: null, //document.getElementById('label-prev'),
	labelNext: null, //document.getElementById('label-next'),
	sliderImg: null, //document.querySelector('.slider-img'),
	countOfImg: null, //document.getElementById('countNum'),
	sliderItems: [],	
	currentIndex: 2,

	start: function(elementID) {
		let that = this;

		let element = document.getElementById(elementID);

		this.btnPrev = element.querySelector('.btn-prev');
		this.btnNext = element.querySelector('.btn-next');
		this.labelPrev = element.querySelector('#label-prev');
		this.labelNext = element.querySelector('#label-next');
		this.sliderImg = element.querySelector('.slider-img');
		this.countOfImg = element.querySelector('.countNum');


		this.btnPrev.addEventListener('click',function(e){
			that.onBtnPrevClick(e);
		});
		this.btnNext.addEventListener('click',function(e){
			that.onBtnNextClick(e);
		});

		this.sliderItems.push('https://i.pinimg.com/564x/fc/cf/c6/fccfc6d09690533e4408e28fc59d1976.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/69/4d/cc/694dcc4a7f1cd7a0b1d9241f422ab7d5.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/34/a4/f5/34a4f54edf651fb0822c062ba77d2416.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/05/90/be/0590be27179342fdf898f784a0e9e9d7.jpg');
		this.sliderItems.push('https://i.pinimg.com/564x/91/69/db/9169db4e3052e8c00a32213dc3c813af.jpg');

		that.sliderImg.src = this.sliderItems[this.currentIndex];
	},

	onBtnPrevClick: function() {
		if(this.currentIndex !== 0){
			this.currentIndex--;
		}
		this.sliderImg.src = this.sliderItems[this.currentIndex];
		this.countOfImg.innerHTML = this.currentIndex + 1;

		if (this.currentIndex === 0){
			this.labelPrev.style.visibility = 'hidden';
		} else if(this.currentIndex > 0) {
			this.labelNext.style.visibility = 'visible';
		};
	},

	onBtnNextClick: function() {
		if(this.currentIndex !== this.sliderItems.length - 1){
			this.currentIndex++;
		}	;
		this.sliderImg.src = this.sliderItems[this.currentIndex];
		this.countOfImg.innerHTML = this.currentIndex + 1;

		if (this.currentIndex === this.sliderItems.length - 1){
			this.labelNext.style.visibility = 'hidden';
		} else if(this.currentIndex < this.sliderItems.length - 1) {
			this.labelPrev.style.visibility = 'visible';
		};
	},
	}; 	

	return newSlider;
}

