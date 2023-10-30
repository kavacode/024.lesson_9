/*
 * У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg 
 * Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
 */

const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg',];

function showRandom() {
	const randomImg = Math.trunc(Math.random() * images.length);

const random = document.getElementById('random');


const randomUrl = 'img/' + images[randomImg];
random.src = randomUrl;


}

const imageButton = document.getElementById('imageButton');
imageButton.addEventListener('click', showRandom);