import Breadcrumb from './breadcrumb.html?raw';

export default {
	title: 'Navigations/Breadcrumb',
	parameters: {
		backgrounds: { default: 'gray' },
		badges: ['stable'],
	},
};

function Template({ transparent }) {
	return `
  <nav aria-label="Breadcrumb">
    <ol class="breadcrumb ${transparent ? 'breadcrumb-transparent' : ''}">
      <li class="breadcrumb-item">
        <a href="#" onclick="return false">Private banking</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#" onclick="return false">Insurances</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">Car insurance</li>
    </ol>
  </nav>
  `;
}

export const Default = Template.bind({});
Default.args = {
	transparent: false,
};

export const Transparent = Template.bind({});
Transparent.args = {
	transparent: true,
};

export const breadcrumbExample = () => Breadcrumb;
