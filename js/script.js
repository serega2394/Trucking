// СОБЫТИЯ УПРАВЛЕНИЯ СЛАЙДЕРОМ
var offset = 0;	// смещение от левого края
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_btn_next').addEventListener('click', function(){
	offset = offset + 920;	// offset += 920;
	if (offset > 1840) {
		offset = 0;
	}
	sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider_btn_previous').addEventListener('click', function () {
	offset = offset - 920;	// offset -= 920;
	if (offset < 0) {
		offset = 1840;
	}
	sliderLine.style.left = -offset + 'px';
});



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