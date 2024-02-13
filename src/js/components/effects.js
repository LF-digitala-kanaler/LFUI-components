import { delegate } from '../utils';

const PRESSED_ATTR = 'aria-pressed';
const isTouch = 'ontouchstart' in window;
const eventIn = isTouch ? 'touchstart' : 'mousedown';
const eventOut = isTouch ? 'touchend' : 'mouseup mouseout dragstart';

document.addEventListener(
	eventIn,
	delegate('[data-effect]', (event) => {
		let up = false;
		let tilted = false;
		const effect = this.dataset.effect;

		function cleanup() {
			this.classList.remove(`${effect}-in ${effect}-out`);
			this.removeEventListener('animationend', onIn);
			this.removeEventListener(eventOut, onOut);
		}

		function release() {
			this.classList.add(`${effect}-out`);
			this.classList.remove(`${effect}-in`);
			this.setAttribute(PRESSED_ATTR, 'false');
			this.addEventListener('animationend', cleanup, { once: true });
		}

		function onIn() {
			tilted = true;
			if (up) release();
		}

		function onOut() {
			up = true;
			if (tilted) release();
		}

		if (this.disabled) {
			return;
		}

		this.classList.add(`${effect}-in`);
		this.classList.remove(`${effect}-out`);
		this.setAttribute(PRESSED_ATTR, 'true');
		this.addEventListener(eventOut, onOut, { once: true });
		this.addEventListener('animationend', onIn, { once: true });
	})
);
