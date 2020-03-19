const valueboxExample = () => {
  $(document).ready(function() {
    $('.value-box-text').each(function() {
      
        const text = $(this).text();
        const width = text[0].getBBox().width || text.getComputedTextLength();
        const height = 18;
        el.setAttribute('viewBox', `0 0 ${ width } ${ height }`);
    })
  });
}

export {valueboxExample}