import CustomSelect from '../../js/components/custom-select.js';
 
const selectExample = () => {
  new CustomSelect( $('#custom-select') );
  new CustomSelect( $('#custom-select2') );
  new CustomSelect( $('#custom-select-opt-group') );
  new CustomSelect( $('#custom-multi-select-1') );
  new CustomSelect( $('#custom-multi-select-2') );
}

export  {selectExample}