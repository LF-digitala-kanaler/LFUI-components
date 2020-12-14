import CustomSelect from '../../js/components/custom-select.js';

const dropdownExample = () => {
  new CustomSelect( $('#custom-select'));
  new CustomSelect( $('#custom-select2'));
  new CustomSelect( $('#custom-select3'));
  new CustomSelect( $('#custom-select4'));
  new CustomSelect( $('#custom-multi-select-1') );
  new CustomSelect( $('#custom-multi-select-2') );
  new CustomSelect( $('#custom-multi-select-3') );
  new CustomSelect( $('#custom-multi-select-4') );
  new CustomSelect( $('#custom-multi-select-5') );
  


  // Need for documentation only
  $('.dropdown .custom-select-dd').dropdown() 
}

export  {dropdownExample}