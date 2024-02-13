import Datepicker from './datepicker.html?raw';
import Timepicker from './timepicker.html?raw';
import Monthpicker from './monthpicker.html?raw';

import { useEffect, useState } from '@storybook/client-api';
import { monthpickerExample } from './monthpicker.jsx';
import { datepickerExample } from './datepicker.js';

import { html, uid } from '../../js/utils.js';
import { DEFAULTS, datepicker } from '../../js/components/datepicker.js';

import { monthpicker } from '../../js/components/monthpicker.jsx';

export default {
	title: 'Forms/Datepicker',
	parameters: {
		backgrounds: { default: 'white' },
		badges: ['stable'],
	},
};

export const DatepickerExamples = () => {
	const [id] = useState(uid);
	useEffect(() => datepickerExample(document.getElementById(id)), []);
	return `
    <div id="${id}">${Datepicker}</div>
  `;
};

export const TimepickerExamples = () => Timepicker;

export const MonthpickerExamples = () => {
	const [id] = useState(uid);
	useEffect(() => monthpickerExample(document.getElementById(id)), []);
	return `
    <div id="${id}">${Monthpicker}</div>
  `;
};

function DatepickerTemplate(args) {
	const [id] = useState(uid);

	useEffect(() => {
		datepickerExample(document.getElementById(id));
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-standard">Välj datum</label>
      <div class="input-group">
        <input
          type="date"
          id="date-standard"
          name="date-standard"
          class="form-control"
          ${args.disabled ? 'disabled' : ''}
          required />
        <span class="input-group-append">
          <button
            class="btn"
            type="button"
            aria-controls="date-standard"
            title="Välj datum"
            ${args.disabled ? 'disabled' : ''}>
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

function DisabledWeekendsTemplate(args) {
	useEffect(() => {
		const weekdays = document.getElementById('date-weekdays');
		console.log('week', weekdays);
		if (weekdays) {
			const weekdaysDuetEl = datepicker(weekdays);
			weekdaysDuetEl.isDateDisabled = function (date) {
				return date.getDay() % 6 === 0;
			};
		}
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-standard">Välj datum</label>
      <div class="input-group">
        <input type="date" id="date-weekdays" name="date-weekdays" class="form-control" required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-weekdays" title="Välj datum">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

function ValidTemplate(args) {
	useEffect(() => {
		const validated = document.getElementById('date-validated');
		if (validated) {
			const validatedGroup = validated.closest('.form-group');
			const validatedDuetEl = datepicker(validated);
			validatedDuetEl.addEventListener('duetChange', function ({ details }) {
				validatedGroup.classList.add('has-valid');
			});
		}
	}, [args]);

	return `
    <div class="form-group w-25 has-valid">
      <label for="date-validated">Välj datum</label>
      <div class="input-group">
        <input
          type="date"
          id="date-validated"
          name="date-validated"
          class="form-control"
          required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-validated" title="Välj datum">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

function MinMaxTemplate(args) {
	useEffect(() => {
		const minmax = document.getElementById('date-minmax');
		if (minmax) datepicker(minmax);
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-minmax">Välj datum</label>
      <div class="input-group">
        <input
          type="date"
          id="date-minmax"
          name="date-minmax"
          min="1984-01-01"
          max="1984-12-31"
          class="form-control"
          required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-minmax" title="Välj datum">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}
function CustomLocationTemplate(args) {
	useEffect(() => {
		const finnish = document.getElementById('date-finnish');
		if (finnish) {
			datepicker(finnish, {
				...DEFAULTS,
				localization: {
					buttonLabel: 'Valitse päivämäärä',
					placeholder: 'pp.kk.vvvv',
					selectedDateMessage: 'Valittu päivämäärä on',
					prevMonthLabel: 'Edellinen kuukausi',
					nextMonthLabel: 'Seuraava kuukausi',
					monthSelectLabel: 'Kuukausi',
					yearSelectLabel: 'Vuosi',
					closeLabel: 'Sulje ikkuna',
					calendarHeading: 'Valitse päivämäärä',
					dayNames: [
						'Sunnuntai',
						'Maanantai',
						'Tiistai',
						'Keskiviikko',
						'Torstai',
						'Perjantai',
						'Lauantai',
					],
					monthNames: [
						'Tammikuu',
						'Helmikuu',
						'Maaliskuu',
						'Huhtikuu',
						'Toukokuu',
						'Kesäkuu',
						'Heinäkuu',
						'Elokuu',
						'Syyskuu',
						'Lokakuu',
						'Marraskuu',
						'Joulukuu',
					],
					monthNamesShort: [
						'Tammi',
						'Helmi',
						'Maalis',
						'Huhti',
						'Touko',
						'Kesä',
						'Heinä',
						'Elo',
						'Syys',
						'Loka',
						'Marras',
						'Joulu',
					],
					locale: 'fi-FI',
				},
			});
		}
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-finnish">Välj datum</label>
      <div class="input-group">
        <input type="date" id="date-finnish" name="date-finnish" class="form-control" required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-finnish" title="Välj datum">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

export const DefaultDatepicker = DatepickerTemplate.bind({});
DefaultDatepicker.args = {
	disabled: false,
};

export const DisabledWeekdays = DisabledWeekendsTemplate.bind({});
DisabledWeekdays.args = {};

export const MinMax = MinMaxTemplate.bind({});
MinMax.args = {};

export const ValidDatepicker = ValidTemplate.bind({});
ValidDatepicker.args = {};

export const FinishDatepicker = CustomLocationTemplate.bind({});
FinishDatepicker.args = {};

export function MonthDefault(args) {
	useEffect(() => {
		const standard = document.getElementById('date-month');
		if (standard) monthpicker(standard);
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-month">Välj månad</label>
      <div class="input-group">
        <input type="month" id="date-month" name="date-month" class="form-control" required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-month" title="Välj månad">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

export function MonthMinMax(args) {
	useEffect(() => {
		const minmax = document.getElementById('date-month-minmax');
		if (minmax) monthpicker(minmax);
	}, [args]);

	return `
    <div class="form-group w-25">
      <label for="date-month">Välj månad</label>
      <div class="input-group">
        <input
          type="month"
          id="date-month-minmax"
          name="date-month"
          class="form-control"
          min="2023-04"
          max="2024-10"
          required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-month-minmax" title="Välj månad">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}

export function MonthValidated(args) {
	useEffect(() => {
		const validated = document.getElementById('date-month-validated');
		if (validated) {
			const validatedGroup = validated.closest('.form-group');
			const container = monthpicker(validated);
			container.addEventListener('change', () => {
				validatedGroup.classList.add('has-valid');
			});
		}
	}, [args]);

	return `
    <div class="form-group has-valid w-25">
      <label for="date-month-validated">Choose a date</label>
      <div class="input-group">
        <input
          type="date"
          id="date-month-validated"
          name="date-month-validated"
          class="form-control"
          required />
        <span class="input-group-append">
          <button class="btn" type="button" aria-controls="date-month-validated" title="Välj datum">
            <svg class="icon" width="24" height="24">
              <use href="lf-icons/sprite/24/icons.svg#calendar-24"></use>
            </svg>
          </button>
        </span>
      </div>
    </div>
  `;
}
