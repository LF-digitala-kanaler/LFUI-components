const uploadExample = () => {
  if (! $('.upload').length ){
    return null
  }
    let element = document.querySelector('.upload');
    let input = element.querySelector('.upload-input');
    let placeholder = element.querySelector('.upload-placeholder');
    let remove = element.querySelector('.upload-remove');
  
  const popoverMarkup = (data) => {
      return `
        <div role="alert" id="popover" class="popover-tooltip popover-bottom popover-attach">
          <p class="popover-title">Preview</p>
          <div class="popover-content">
            <div class="card">
              <div class="card-block">
                <img class="img-fluid w-100" src=${data.src} alt=""  />
              </div>
            </div>
          </div>
        </div>
      `;
    };
    const createMarkup = (data) => {
      return `
       <div class="upload-preview  mb-05 ${data.validationClass}">
          <div class="upload-body">
          ${
            (() => {
             
              if(data.popover === true) { 
                return ` <span role="button" tabindex="-1" class="popover-tooltip-trigger p-0 b-0  mr-05" aria-controls="popover">
                  <img class="upload-image" alt="" src=${data.src} width="35" height="35" />
                  ${popoverMarkup(data)}
                </span> `;
              } else {
                return `
                  <div class="upload-image mr-05">${data.src}</div>
                `;
              }
            })()
            
          }
          <span class="upload-name">${data.name}</span>
            <button type="button" class="close ml-auto upload-remove">
            Close
          </button>
        </div>
        
          ${
              (() => {
                if(data.popover === false) { 
                  
                  return `
                    <small class="upload-feedback">Description of error in input</small> 
                  `;
                }else {
                  return ` 
                  `;
                }
              })()
            }
      </div>
      `;
        
    };
    
    const previewFile = (file) => {
      const fileType = /image.*/;
      let reader = new FileReader();
        
      if (file.type.match(fileType)) { 
        reader.readAsDataURL(file);
        
        let data = {
          src: '#',
          name: ' ',
          file: ' ',
          popover: true,
          validationClass: ' '
        };
        placeholder.insertAdjacentHTML('beforeend', createMarkup(data));  
        
        
        reader.onloadend = () => {
          
          let data = {
            src: reader.result,
            name: file.name,
            file: file,
            popover: true,
            validationClass: 'has-valid'
          };

          $(placeholder).children('.upload-preview').last().replaceWith(createMarkup(data));
          // },500);
         
          
        }; 
        
      } else {
        let data = {
          src: ' ',
          name: file.name,
          file: file,
          validationClass: 'has-danger',
          popover: false
        };
        placeholder.insertAdjacentHTML('beforeend', createMarkup(data));  
        
      }
    };
    const handleFiles = (files) => {
      Array.from(files).forEach(file => { 
        previewFile(file);
      });
    };
    const handleUpload = () => {
      const FILES = input.files;
      handleFiles(FILES);
    };
    
    const handleRemove =(event) => {
      
      if (event.target && $(event.target).is('.upload-remove')) {
        $(event.target).parent().parent().remove();
      }
    };    
    
    $(document).on('change', element, handleUpload);
    $(document).on('click', remove, handleRemove);
    input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
    input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });


    $('#upload-test-btn').on('click', function() {
      
      $('#upload2').addClass('loading');
      var timeleft = 100;
      const loaderTest = setInterval(function() {
        timeleft--;
        $('#upload2 .upload-progress-bar').css('transform', 'translateX(-' + timeleft + '%)');
        if(timeleft <= 0)
          clearInterval(loaderTest);
        if(timeleft === 0)
          $('#upload2').parent().parent().addClass('has-valid');
      }, 15);
    });
  
}

export {uploadExample};