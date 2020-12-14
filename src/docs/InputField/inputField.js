const inputFieldExample = () => {
  $(':input').not(':button,:hidden').each(function() {
    if (!$(this).parents('#stateExamples').length) {
      $(this).blur(function() {
        if ($(this).val().length > 0) {
          $(this).parent().addClass('has-valid');
        } else {
          $(this).parent().removeClass('has-valid');
        }
      });
    }
  });
}

export  {inputFieldExample}