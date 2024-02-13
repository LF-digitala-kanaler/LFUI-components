import Collapse from 'bootstrap5/js/src/collapse';
import { delegate } from '../utils';

const NO_EXPAND = 'data-no-expand';
const EXPANDED_ATTR = 'aria-expanded';
const VALID_ELEMENTS_SELECTOR =
	'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';

document.addEventListener(
	'click',
	delegate('[data-bs-toggle="collapse:table-row"]', function (event) {
		const target = document.querySelector(this.dataset.bsTarget);
		const eventTarget = this.closest(VALID_ELEMENTS_SELECTOR);
		const collapsible = new Collapse(target, { toggle: false });
		const isExpanded = this.getAttribute(EXPANDED_ATTR) === 'true';

		if (eventTarget && eventTarget.hasAttribute(NO_EXPAND)) {
			return;
		}

		if (isExpanded) {
			target.addEventListener(
				'hidden.bs.collapse',
				() => {
					this.classList.remove('table-active');
					this.setAttribute(EXPANDED_ATTR, 'false');
				},
				{ once: true }
			);
		} else {
			target.addEventListener(
				'show.bs.collapse',
				() => {
					this.classList.add('table-active');
					this.setAttribute(EXPANDED_ATTR, 'true');
				},
				{ once: true }
			);
		}

		collapsible.toggle();
	})
);
