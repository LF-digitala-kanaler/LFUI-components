const CustomSelect = (function ($) {

  const KeyCode = {
    SPACE_KEYCODE: 32,
    ENTER_KEYCODE: 13,
    ESCAPE: 27,
    ARROW_UP_KEYCODE: 38,
    ARROW_DOWN_KEYCODE: 40,
    TAB_KEYCODE: 9
  };

  const ClassName = {
    SHOW: 'show'
  };

  const DataName = {
    SELECT_ALL: 'select-all'
  };

  const DefaultOption = {
    defaultPlaceholder: 'Välj',
    onSelect: null
  };

  class CustomSelect {
    constructor(element, config) {
      this.element = $(element);
      this.placeholder = this.element.find('span:first');
      this.dropdownElement = this.element.find('.custom-select-dd');
      this.options = this.element.find('.custom-dropdown > .dropdown-item');
      this.isMultiSelect = this.element.find('.custom-multi-select').length > 0;
      this.parent = this.element.parent();
      this.config = this._getConfig(config);

      this._addEventListeners();
      this._init();
    }

    _init() {
      let _this = this;
      this.val = _this.isMultiSelect ? [] : '';
      this.index = -1;
      this.searchString = '';
      
      if (_this.isMultiSelect) {
        _this.element.find('.custom-dropdown > .dropdown-item').each(function (index, option) {
          _this._updateValueList($(option));
        });
      }
    }

    _getConfig(config) {
      let returnConfig = $.extend({}, DefaultOption);

      if (config) {
        if (config.onSelect && typeof config.onSelect === 'function') {
          returnConfig.onSelect = config.onSelect;
        }

        if (config.defaultPlaceholder && typeof config.defaultPlaceholder === 'string') {
          returnConfig.defaultPlaceholder = config.defaultPlaceholder;
        }
      }

      return returnConfig;
    }

    _addEventListeners() {
      let _this = this;

      if (_this.isMultiSelect) {
        _this._addCustomMultiSelectEventListeners();
      } else {
        _this._addCustomSelectListeners();
      }

      _this.element.on('keypress',function (e){
        let code = (e.keyCode ? e.keyCode : e.which);
        if(code === KeyCode.SPACE_KEYCODE || code === KeyCode.ENTER_KEYCODE) {
          if (code === KeyCode.SPACE_KEYCODE) {
            // prevent space from scrolling page
            e.preventDefault();
          }

          if(_this.index !== -1 && !(_this.index >= _this.element.find('.custom-dropdown > .dropdown-item').length)) {
            _this._focusOption(_this.isMultiSelect, _this.element.find('.custom-dropdown > .dropdown-item')[_this.index]);
          }
        }
      }).on('keydown', function (e) {
        let code = (e.keyCode ? e.keyCode : e.which);
        
        if(!_this._isDropdownOpen()) {
         
          switch(code) {
            case KeyCode.ARROW_UP_KEYCODE:
              e.preventDefault();
              _this.dropdownElement.dropdown('toggle');
              if(_this.index === -1) {
                _this.element.find('.custom-dropdown > .dropdown-item')[_this.element.find('.custom-dropdown > .dropdown-item').length -1].focus();
                _this.index = (_this.element.find('.custom-dropdown > .dropdown-item').length -1);
              }
              if(_this.index !== -1 && !(_this.index >= _this.element.find('.custom-dropdown > .dropdown-item').length)) {
                _this._focusOption(_this.isMultiSelect, _this.element.find('.custom-dropdown > .dropdown-item')[_this.index]);
              }
              break;
            case KeyCode.ARROW_DOWN_KEYCODE:
              e.preventDefault();
              _this.dropdownElement.dropdown('toggle');
              if(_this.index !== -1 && !(_this.index >= _this.element.find('.custom-dropdown > .dropdown-item').length)) {
                _this._focusOption(_this.isMultiSelect, _this.element.find('.custom-dropdown > .dropdown-item')[_this.index]);
              }
              break;
            default:
              break;
          }
        }
        else {
          switch(code){
            case KeyCode.ARROW_UP_KEYCODE:
              if(_this.index === -1) {
                _this.element.find('.custom-dropdown > .dropdown-item')[_this.element.find('.custom-dropdown > .dropdown-item').length -1].focus();
                _this.index = _this.element.find('.custom-dropdown > .dropdown-item').length;
              }
              if (_this.index > 0) {
                _this.index--;
              }
              e.preventDefault();
              if (_this.index >= 0) {
                _this._focusOption(_this.isMultiSelect, _this.element.find('.custom-dropdown > .dropdown-item')[_this.index]);
              }
              break;
            case KeyCode.ARROW_DOWN_KEYCODE:
              if (_this.index < (_this.element.find('.custom-dropdown > .dropdown-item').length -1)) {
                _this.index++;
              }
              e.preventDefault();

              if (_this.index <= (_this.element.find('.custom-dropdown > .dropdown-item').length -1)) {
                _this._focusOption(_this.isMultiSelect, _this.element.find('.custom-dropdown > .dropdown-item')[_this.index]);
              }
              break;
            case KeyCode.TAB_KEYCODE:
              e.preventDefault();
              break;
            case KeyCode.ESCAPE:
              _this.dropdownElement.dropdown('toggle');
              break;
            default:
              const keys = new RegExp('^([a-z]|[åäö]|[0-9])$');
              if (keys.test(e.key.toString().toLowerCase())) {
                e.preventDefault();
                _this.searchString += e.key;

                let match = _this._getMatchingOption();
                
                if (match) {
                  if (_this.isMultiSelect) {
                    match.find('[type=checkbox]').focus();
                  } else {
                    _this._setSelectedOption(match);
                  }

                  setTimeout(function() {
                    _this.searchString = '';
                  }, 1000);
                } else {
                  _this.searchString = '';
                }
              }
              break;
          }
        }
      });
    }

    _addCustomMultiSelectEventListeners() {
      let _this = this;

      _this.options.on('change click keydown',function (e) {
        let code = (e.keyCode ? e.keyCode : e.which);
  
        if (e.target.tagName !== 'INPUT' || (e.target.tagName === 'INPUT' && code === KeyCode.SPACE_KEYCODE)) {
         
          if ((code === KeyCode.SPACE_KEYCODE
            || code === KeyCode.ENTER_KEYCODE || e.type === 'click')) {
           
            if (e.type === 'click' || e.type === 'keydown') {
              e.stopPropagation();
            }
            if(e.target.tagName === 'DIV') {
              $(this).find('input').trigger('change');
            }
            let shouldTriggerCheckbox = e.target.tagName === 'DIV' || (!e.target.hasAttribute('for') && code !== KeyCode.SPACE_KEYCODE);
            let selectAll = $(this).data(DataName.SELECT_ALL);
            if (selectAll) {
              let isIndeterminate = $(this).find('[type=checkbox]').is(':indeterminate');
              _this._toggleSelectAll($(this), !$(this).find('[type=checkbox]').is(':checked'), isIndeterminate, shouldTriggerCheckbox);
              
            } else {
              
              _this._updateValueList($(this), e.type, shouldTriggerCheckbox);
            }

            if (_this.val.length > 0) {
              _this.parent.addClass('has-valid');
            } else {
              _this.parent.removeClass('has-valid');
            }

            if (_this.config.onSelect) {
              _this.config.onSelect(e);
            }
          }
        }
      });
    }

    _focusOption(isMultiSelect, option) {
      if (isMultiSelect) {
        $(option).find('[type=checkbox]').focus();
      } else {
        option.focus();
      }
    }

    _addCustomSelectListeners() {
      let _this = this;

      _this.element.find($('.custom-dropdown:not(.custom-multi-select)')).on('click touchstart keypress', _this.element.find('.custom-dropdown > .dropdown-item'), function (e) {
        var target = $(e.target);
        if (!(target.is('.dropdown-item'))) { 
          target = target.closest('.dropdown-item');
        }
        
        _this._setSelectedOption(target);
        e.preventDefault();
        _this.dropdownElement.dropdown('toggle');

        if (_this.config.onSelect) {
          _this.config.onSelect(e);
        }
      });
    }

    _getMatchingOption() {
      const regExp = new RegExp('^' + this.searchString, 'i');
      const _this = this;

      let matchingOption;
      _this.element.find('.custom-dropdown > .dropdown-item').each(function(index, option){
        let text = option.text;
        if (_this.isMultiSelect) {
          text = $(option).find('.custom-control-label').text();
        }

        if (regExp.test(text)) {
          matchingOption = $(option);
        }
      });

      return matchingOption;
    }

    _setSelectedOption(option) {
      option.focus();
      this.val = option.html();
      this.index = option.index();
      this.placeholder.html(this.val);
      this.parent.addClass('has-valid');
    }

    _updateValueList(option, eventType, shouldTriggerCheckbox) {
      if (eventType && option.hasClass('dropdown-item') && !option.find('[type=checkbox]').is(':checked')) {
        
        if (shouldTriggerCheckbox && eventType === 'click') {
          option.find('[type=checkbox]').prop('checked', true);
        }
        this.val.push(option.find('.custom-control-label').text());
      } else {
        if (shouldTriggerCheckbox && eventType === 'click') {
          option.find('[type=checkbox]').prop('checked', false);
        }
        let index = this.val.indexOf(option.find('.custom-control-label').text());
        if (index > -1) {
          this.val.splice(index, 1);
        }
      }
      
      if (this.selectAllOptionElement) {
        this._updateSelectAllCheckbox(shouldTriggerCheckbox);
      }
      this._updateValidState();
      this.placeholder.text(this._getPlaceholderText());
    }

    _updateValidState() {
      if (this.val.length > 0) {
        this.parent.addClass('has-valid');
      } else {
        this.parent.removeClass('has-valid');
      }
    }

    _updateSelectAllCheckbox(triggeredByClick) {
      let selectAllCheckbox = this.selectAllOptionElement.find('[type=checkbox]');
      let isAllOptionIndeterminate = selectAllCheckbox.is(':indeterminate');
      let isAllOptionChecked = selectAllCheckbox.is(':checked');
      
      if (isAllOptionIndeterminate && this.val.length === 0) {
        selectAllCheckbox.prop('indeterminate', false);
        if (!triggeredByClick) {
          
          selectAllCheckbox.prop('checked', false);
        }
      } else if (isAllOptionIndeterminate && this.val.length === this.options.length-1) {
        selectAllCheckbox.prop('indeterminate', false);

        if (!triggeredByClick) {
          
          selectAllCheckbox.prop('checked', true);
        }
      } else if (isAllOptionChecked && this.val.length > 0) {
        selectAllCheckbox.prop('indeterminate', true);
      }
    }

    _toggleSelectAll(selectAllOptionElement, toggleOn, isIndeterminate, shouldTriggerCheckbox) {
      let _this = this;
      _this.selectAllOptionElement = selectAllOptionElement;

      _this.options.each(function(index, option) {
        if (!$(option).data(DataName.SELECT_ALL)) {
          let checkbox = $(option).find('[type=checkbox]');

          if (toggleOn && !checkbox.is(':checked') && !isIndeterminate) {
            checkbox.prop('checked', true);
            _this.val.push($(option).find('.custom-control-label').text());
          } else if (!toggleOn || isIndeterminate) {
            checkbox.prop('checked', false);
          }
        }
      });

      if (toggleOn && shouldTriggerCheckbox) {
        this.selectAllOptionElement.find('[type=checkbox]').prop('checked', true);
      } else if (!toggleOn && shouldTriggerCheckbox) {
        this.selectAllOptionElement.find('[type=checkbox]').prop('checked', false);
      }

      if (_this.val.length === 0) {
        this.selectAllOptionElement.find('[type=checkbox]').prop('indeterminate', false);
      }

      if (!toggleOn || isIndeterminate) {
        _this.val.splice(0, _this.val.length);
      }

      _this.placeholder.text(_this._getPlaceholderText());
    }

    _isDropdownOpen() {
      return this.element.hasClass(ClassName.SHOW);
    }

    _getPlaceholderText() {
      if (this.val.length > 0) {
        return '(' + this.val.length + ') ' + this.val.join(', ');
      }
      return this.config.defaultPlaceholder;
    }

    getValue() {
      return this.val;
    }

    getIndex() {
      return this.index;
    }
  }

  $.fn.customselect = function(option) {
    return this.each(function() {
      let data = $(this).data('customselect');
      let options = typeof option === 'object' && option;

      // Initialize the customselect.
      if (!data) {
        data = new CustomSelect(this, options);
        $(this).data('customselect', data);
      }

      // Call customselect method.
      if (typeof option === 'string') {
        if (option === 'destroy') {
          $(this).data('customselect', false);
        }
      }
    });
  };

  $.fn.customselect.Constructor = CustomSelect;

  return CustomSelect;

}(jQuery));

export default CustomSelect;
