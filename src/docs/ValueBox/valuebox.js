import { each } from '../../js/utils';

const valueboxExample = (context) => {
	if (!context) {
		return;
	}
	each(
		'.value-box-text',
		function (el) {
			const width = el.getBBox().width || el.getComputedTextLength();
			el.setAttribute('viewBox', `0 0 ${width} 18`);
		},
		context
	);
};

export { valueboxExample };
