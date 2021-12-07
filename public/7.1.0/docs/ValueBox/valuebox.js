const valueboxExample = () => {
  $(document).ready(function() {
    $('.value-box-text').each(function() {
        const width = $(this)[0].getBBox().width || $(this).getComputedTextLength();
        const height = 18;
        $(this)[0].setAttribute('viewBox', `0 0 ${ width } ${ height }`);
    })
  });
}

export {valueboxExample}