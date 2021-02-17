# Changelog

All notable changes to this project will be documented in this file.

# Unreleased 
## Migrating to LFUI-components from LFUI




### Added


### Changed
  * Intro cond font have been updated with a new version that will match what on our designers use. See migration guide for more info how it affects you. 

  * While not included in LFUI it's still a change to take notice of. D3.js have been removed and replaced with Chart.js 
  for all charts included in LFUI. See migration guide for more info. (#7)

  * New example of Bar chart. (#12)
  * New example of Line chart. (#9)
  * Refactored _button.scss to remove incorrect use of @extand. Overall lfui.css file size went from 680kb to 451kb uncompressed.  (#4)
### Fixed

### Documentation
 * removed node-sass for dart sass
### Deprecated

### Removed

* `.btn-outline-primary` class removed use `.btn-primary` instead (#40)