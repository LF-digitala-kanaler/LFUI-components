const CustomFile = (function ($) {

  class CustomFile {
    constructor(element) {
      this.element = $(element); 

      this._addEventListeners();
      
    }

    _addEventListeners() {
      let _this = this;
      // needed for focus state in firefox

      _this.element.on( 'focus', function(){ _this.element.addClass( 'has-focus' ); });
      _this.element.on( 'blur', function(){ _this.element.removeClass( 'has-focus' ); });


      //Since firefox does not trigger change when you close down the file window we have to use click
      _this.element.on( 'click', function () { 
        if( _this.element.hasClass('has-file') || _this.element.hasClass('has-multiple')){
          setTimeout(function(){
            _this.element.removeClass('has-file');
            _this.element.next('.custom-file-label').find('.custom-file-option').remove();
            _this.element.removeClass( 'has-focus' );
          },350);
        }
      });

      _this.element.on( 'change', function (event) {
        let fileInput = event.target;
        
        
        if (fileInput.value) {
          
          let files = event.target.files;
          let label = files[0].name;
          
          if (files.length > 0) { 
            _this.element.addClass('has-file');
            
          }
          if (files.length === 0) { 
            _this.element.removeClass('has-file');
          } 
          if (files.length > 1) {
            
            label = files.length;
            $(this).next('.custom-file-label').addClass('has-multiple');
          }
          else {
            $(this).next('.custom-file-label').removeClass('has-multiple');
          }
          
          $(this).next('.custom-file-label').html('<div class="custom-file-option">' + label + '</div>');
        } else {
          
          _this.element.removeClass('has-file');
          $(this).next('.custom-file-label').find('.custom-file-option').remove();
        }
       
      });
    }
}

  $.fn.customfile = function() {
    return this.each(function() {
      let data = $(this).data('customfile');
      
      if (!data) {
        data = new CustomFile(this);
        $(this).data('customfile', data);
      }
    });
  };

  $.fn.customfile.Constructor = CustomFile;

  return CustomFile;

}(jQuery));

export default CustomFile;
