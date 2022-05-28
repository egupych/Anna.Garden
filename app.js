//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация слайдов карусели
//::::::::::::::::::::::::::::::::::::::::::::::::::

// const slides = document.querySelectorAll(".slide");

// for (const slide of slides) {
//   slide.addEventListener("mouseover", () => {
//     clearActiveClasses();
    
//     slide.classList.add("active");
//   });
// }

// function clearActiveClasses() {
//   slides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
// }

//::::::::::::::::::::::::::::::::::::::::::::::::::
//Анимация прокрутки до якоря
//::::::::::::::::::::::::::::::::::::::::::::::::::

function setScrollIntoView(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView(top);
}

function setScrollIntoViewOptions(top) {
	const me = document.querySelector('.me');
	me.scrollIntoView({
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

// })

document.addEventListener('DOMContentLoaded', () => {
  
	//===== MICRO-SLIDER begin
	const __ms = document.querySelector('.micro-slider');
	const __msSlider = new MicroSlider(__ms, { indicators: true, indicatorText: '' });
	const hammer = new Hammer(__ms);
	  const __msTimer = 3000;
	let __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
	  
	
	//detect gesture tap event with hammer js library
	hammer.on('tap', function(e) {
	  clearInterval(__msAutoplay);
	  console.log(e.type + ' gesture detected');
	});
	
	//detect gesture swipe event with hammer js library
	hammer.on('swipe', function(e) {
	  clearInterval(__msAutoplay); 
	  __msAutoplay = setInterval(() => __msSlider.next(), __msTimer);
	  console.log(e.type + ' gesture detected');
	});
	
  });