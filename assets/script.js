const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>",
	}
]

const dots = document.querySelector(".dots");
const arrowLeft = document.querySelector(".arrow_left");
const images = document.querySelector(".banner-img");
const p = document.querySelector("#banner p");
const dot = document.querySelectorAll(".dots .dot");
const arrowRight = document.querySelector(".arrow_right");
let imgActive = 0;

/* Creation des bulletPoints*/
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (i == imgActive) {
			dot.classList.add("dot_selected")
		}
		dots.appendChild(dot);
	}

	const arrayBulletpoints = document.querySelectorAll(".dots .dot");
/* Clic sur bouton suivant */
	arrowRight.addEventListener("click", () => {
		arrayBulletpoints[imgActive].classList.remove("dot_selected");
		imgActive++;
		console.log("next")
		if (imgActive >= slides.length) {
			imgActive = 0;
		}
		images.src = "./assets/images/slideshow/" + slides[imgActive].image;
		p.innerHTML = slides[imgActive].tagLine;
		arrayBulletpoints[imgActive].classList.add("dot_selected")
	})

	/*clic sur bouton précédent */
	arrowLeft.addEventListener("click", () => {
		arrayBulletpoints[imgActive].classList.remove("dot_selected");
		imgActive--;
		console.log("prev")
		if (imgActive < 0) {
			imgActive = slides.length - 1;
		}
		images.src = "./assets/images/slideshow/" + slides[imgActive].image;
		p.innerHTML = slides[imgActive].tagLine;
		arrayBulletpoints[imgActive].classList.add("dot_selected")
	})



