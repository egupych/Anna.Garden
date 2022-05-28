//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация слайдов карусели
//::::::::::::::::::::::::::::::::::::::::::::::::::

const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActiveClasses();
    
    slide.classList.add("active");
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function setScrollIntoView1(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView(top);
}

function setScrollIntoView1Options(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView2(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView(top);
}

function setScrollIntoView2Options(top) {
	const lesson = document.querySelector('.lesson');
	lesson.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView3(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView(top);
}

function setScrollIntoView3Options(top) {
	const boxprice = document.querySelector('.boxprice');
	boxprice.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView4(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView(top);
}

function setScrollIntoView4Options(top) {
	const themes = document.querySelector('.themes');
	themes.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView5(top) {
	const header = document.querySelector('header');
	header.scrollIntoView(top);
}

function setScrollIntoView5Options(top) {
	const header = document.querySelector('header');
	header.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

function setScrollIntoView6(top) {
	const header = document.querySelector('header');
	header.scrollIntoView(top);
}

function setScrollIntoView6Options(top) {
	const header = document.querySelector('header');
	header.scrollIntoView({
		block: "start",
		inline: "nearest",
		behavior: "smooth"
	});
}

//::::::::::::::::::::::::::::::::::::::::::::::::::
// Кастомный курсор
//::::::::::::::::::::::::::::::::::::::::::::::::::


// const cursor1 = document.querySelector(".cursor1");
// document.addEventListener("mousemove", (e) => {
//   cursor1.style.left= e.pageX+"px";
//   cursor1.style.top= e.pageY+"px";
// })

// const cursor2 = document.querySelector(".cursor2");
// document.addEventListener("mousemove", (e) => {
//   cursor2.style.left= e.pageX+"px";
//   cursor2.style.top= e.pageY+"px";
// })

// const cursor3 = document.querySelector(".cursor3");
// document.addEventListener("mousemove", (e) => {
//   cursor3.style.left= e.pageX+"px";
//   cursor3.style.top= e.pageY+"px";
// })

// const cursor4 = document.querySelector(".cursor4");
// document.addEventListener("mousemove", (e) => {
//   cursor4.style.left= e.pageX+"px";
//   cursor4.style.top= e.pageY+"px";
// })


//::::::::::::::::::::::::::::::::::::::::::::::::::
// Анимация появлении текста, фото
//::::::::::::::::::::::::::::::::::::::::::::::::::

const animItems = document.querySelectorAll("._anim-items");

if (animItems.length>0) {
	window.addEventListener("scroll", animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems [index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1;
		
			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY> animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			}  else {
				if (!animItem.classList.contains('_anim-no')){
					animItem.classList.remove('_active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	setTimeout(()=>{
		animOnScroll();
	},300);

}


//::::::::::::::::::::::::::::::::::::::::::::::::::
// Инерция скрола страницы (доработать)
//::::::::::::::::::::::::::::::::::::::::::::::::::

// let y = 0

// document.body.addEventListener('wheel', (e) => {
//     const height = document.body.offsetHeight

//     y = y + e.wheelDeltaY
  
//     if(y < -height + window.innerHeight) {
//       y = -height + window.innerHeight
//     }
  
//     if(y > 0) {
//       y = 0
//     }
  
//     const tr = `translateY(${y}px)`
//     document.body.style.transform = tr

// })"