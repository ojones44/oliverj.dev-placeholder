const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 10;

hero.addEventListener('mousemove', adjustBoxShadow);

function adjustBoxShadow(e) {
	const { offsetWidth: width, offsetHeight: height } = hero;
	// offsetX / offsetY is where the cursor is
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x = x + e.target.offsetLeft;
		y = y + e.target.offsetTop;
	}

	const xWalk = Math.round((x / width) * walk - walk / 2);
	const yWalk = Math.round((y / height) * walk - walk / 2);

	text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(255, 255, 255, 0.2)`;
}
