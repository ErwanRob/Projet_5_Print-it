const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById("banner");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
let currentIndex = 0;
const interval = 3000;

function showSlide(index) {
	// Update image source
	const image = banner.querySelector(".banner-img");
	image.src = `./assets/images/slideshow/${slides[index].image}`;
	image.alt = `Slide ${index + 1}`;

	//Tries for transtions might require different structure method ?
	/*
	for (let i = 0; i < slides.length; i++) {
		image.classList.remove("active");
	}
	image.classList.add("active");
	*/

	// Update tagline
	const tagline = banner.querySelector("p");
	tagline.innerHTML = slides[index].tagLine;
	
	// Update active dot
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach((dot, dotIndex) => {
		if (dotIndex === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

arrowLeft.addEventListener("click", function () {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	showSlide(currentIndex);
	console.log('Previous');
});

arrowRight.addEventListener("click", function () {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	showSlide(currentIndex);
	console.log('Next');
});

// Add a dot for each items in the slides tab
slides.forEach(() => {
	const dotElement = document.createElement("span");
	dotElement.classList.add("dot");
	dotsContainer.appendChild(dotElement);
});

//Set the automatic run of the slide function
setInterval(function () {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	showSlide(currentIndex);
	console.log('Auto next');
}, interval)

// Show the initial slide
showSlide(currentIndex);













/* imageElement = document.createElement("img");
imageElement.src = slides.image;

const arrowleft = document.querySelector(".arrow_left");
const arrowright = document.querySelector(".arrow_right");
const dotsDiv = document.querySelector(".dots");
const nbSlide = slides.length;
let slideIndex = 0;
let dotIndex = 0;


arrowleft.addEventListener("click", function () {
	console.log("left")
});
arrowright.addEventListener("click", function () {

	console.log("right")
});




for (let i = 0; i < slides.length; i++) {
	const dotElement = document.createElement("span");
	dotElement.classList.add("dot");
	if (i === 0) {
		dotElement.classList.add("dot_selected");
	}
	dotsDiv.appendChild(dotElement);
} */

/* function nextSlide() {
	slide
}
 */



/* arrowright.addEventListener('click', nextSlide); */

//dot
/* 
const bannerImage = document.createElement("img")
bannerImage.src = slides[i].image; */





/* BASE 
	const dotEmptyElement = document.createElement("span");
	dotEmptyElement.classList.add("dot");
	const dotFullElement = document.createElement("span");
	dotFullElement.classList.add("dot");
	dotFullElement.classList.add("dot_selected");
	
	const dotsDiv = document.querySelector(".dots");
	
	dotsDiv.appendChild(dotEmptyElement);
	dotsDiv.appendChild(dotFullElement);
	*/


