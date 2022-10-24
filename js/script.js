// СОБЫТИЯ УПРАВЛЕНИЯ СЛАЙДЕРОМ
//var offset = 0;	// смещение от левого края
//const sliderLine = document.querySelector('.slider_line');

//document.querySelector('.slider_btn_next').addEventListener('click', function(){
//	offset = offset + 920;	// offset += 920;
//	if (offset > 1840) {
//		offset = 0;
//	}
//	sliderLine.style.left = -offset + 'px';
//});
//document.querySelector('.slider_btn_previous').addEventListener('click', function () {
//	offset = offset - 920;	// offset -= 920;
//	if (offset < 0) {
//		offset = 1840;
//	}
//	sliderLine.style.left = -offset + 'px';
//});

// СОБЫТИЯ АДАПТИВНОГО СЛАЙДЕРА
const sliderContents = document.querySelectorAll('.slider_content');
const sliderLine = document.querySelector('.slider_line');
const btnPrev = document.querySelector('.slider_btn_previous');
const btnNext = document.querySelector('.slider_btn_next');
var count = 0;
var sliderWidth;

function init() {
	sliderWidth = document.querySelector('.transports_block_slider').offsetWidth;
	sliderLine.style.width = sliderWidth * sliderContents.length + 'px';
	sliderContents.forEach(item => {
		item.style.width = sliderWidth + 'px';
		item.style.height = 'auto';
	});
		rollSlider();
}
window.addEventListener('resize', init);
init();

btnPrev.addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = sliderContents.length - 1;
	}
	rollSlider();
});
btnNext.addEventListener('click', function () {
	count++;
	if (count >= sliderContents.length) {
		count = 0;
	}
	rollSlider();
});
function rollSlider() {
	sliderLine.style.transform = 'translate(-' + count * sliderWidth + 'px)';
}

// var x1 = null;
// var y1 = null;
// sliderLine.addEventListener('touchstart', handleTouchStart);
// sliderLine.addEventListener('touchmove', handleTouchMove);
// function handleTouchStart(e) {
// 	const firstTouch = e.touches[0];
// 	x1 = firstTouch.clientX;
// 	y1 = firstTouch.clientY;
// 	console.log(x1);
// 	console.log(y1);
// }
// function handleTouchMove(e) {
// 	if (!x1 || !y1) {
// 		return false;
// 	}
	
// 	var x2 = e.touches.clientX;
// 	var y2 = e.touches.clientY;
// 	var xDiff = x2 - x1;
// 	var yDiff = y2 - y1;

// 	console.log(x2);
// 	console.log(y2);

// 	if (Math.abs(xDiff) > Math.abs(yDiff)) {
// 		// право-лево
// 		if (xDiff > 0) {
// 			console.log('right');	
// 		} else {
// 			console.log('left');	
// 		}
// 	} else {
// 		// вверх-вниз
// 		if (yDiff > 0) {
// 			console.log('top');	
// 		} else {
// 			console.log('bottom');	
// 		}
// 	}
// 	x1 = null;
// 	y1 = null;
// }




// СОБЫТИЯ ВЫБОРА УСЛУГИ
var serviceItems = document.querySelectorAll('.services_item');
serviceItems.forEach(item => {
	item.addEventListener('click', function(){
		if (this.classList.contains('choosed')) {
			this.classList.remove('choosed');
			var parentImg = this.firstElementChild;
			parentImg.firstElementChild.setAttribute('src', 'img/Vector-white.svg');
		} else {
			this.classList.add('choosed');
			var parentImg = this.firstElementChild;
			parentImg.firstElementChild.setAttribute('src', 'img/Vector.svg');
		}
	});
});



// СОБЫТИЯ КЛИКА НА ПУНКТ МЕНЮ
var btnServicesLink = document.getElementById("services_link");
var btnAboutLink = document.getElementById("about_link");
var btnContactsLink = document.getElementById("contacts_link");
var btnMobileServicesLink = document.getElementById("mobile_services_link");
var btnMobileAboutLink = document.getElementById("mobile_about_link");
var btnMobileContactsLink = document.getElementById("mobile_contacts_link");
var servicesBlock = document.querySelector('.services');
var aboutBlock = document.querySelector('.about');
var contactsBlock = document.querySelector('.map');

btnServicesLink.addEventListener('click', function(){
	'use strict';
	servicesBlock.scrollIntoView({block:'start', behavior:'smooth'});
});
btnMobileServicesLink.addEventListener('click', function(){
	'use strict';
	servicesBlock.scrollIntoView({block:'start', behavior:'smooth'});
});

btnAboutLink.addEventListener('click', function(){
	'use strict';
	aboutBlock.scrollIntoView({block:'start', behavior:'smooth'});
});
btnMobileAboutLink.addEventListener('click', function(){
	'use strict';
	aboutBlock.scrollIntoView({block:'start', behavior:'smooth'});
});

btnContactsLink.addEventListener('click', function(){
	'use strict';
	contactsBlock.scrollIntoView({block:'start', behavior:'smooth'});
});
btnMobileContactsLink.addEventListener('click', function(){
	'use strict';
	contactsBlock.scrollIntoView({block:'start', behavior:'smooth'});
});

var menuList = document.querySelector('.mobile_menu_list');
document.querySelector('.mobile_menu').addEventListener('click', function(){
	if (!this.classList.contains('open')) {
		this.classList.add('open');
		menuList.classList.add('show');
	} else {
		this.classList.remove('open');
		menuList.classList.remove('show');
	}
});