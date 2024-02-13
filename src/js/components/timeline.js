import Collapse from 'bootstrap5/js/src/collapse';
import { delegate } from '../utils';

const EXPANDED_ATTR = 'aria-expanded';

const collapsibles = new WeakMap();

document.addEventListener(
	'click',
	delegate('[data-bs-toggle="collapse:timeline"]', function onClick(event) {
		const target = document.querySelector(this.dataset.bsTarget);
		const isExpanded = this.getAttribute(EXPANDED_ATTR) === 'true';

		let collapsible = collapsibles.get(target);
		if (!collapsible) {
			collapsible = new Collapse(target, { toggle: false });
			collapsibles.set(target, collapsible);
		}

		if (isExpanded) {
			target.addEventListener(
				'hidden.bs.collapse',
				() => {
					this.parentElement.classList.remove('is-open');
					this.setAttribute(EXPANDED_ATTR, 'false');
				},
				{ once: true }
			);
		} else {
			target.addEventListener(
				'show.bs.collapse',
				() => {
					this.parentElement.classList.add('is-open');
					this.setAttribute(EXPANDED_ATTR, 'true');
				},
				{ once: true }
			);
		}

		collapsible.toggle();
	})
);
