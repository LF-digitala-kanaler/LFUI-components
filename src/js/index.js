import jQuery from 'jquery'

/**
 * This need to be done before importig any modules depending on jQuery
 */
window.$ = window.jQuery = jQuery

/* eslint-disable import/first */
import './components/utilities'
import './components/alert'
import './components/buttons'
import './components/card'
import './components/custom-forms'
import './components/custom-file'
import './components/dropdown'
import './components/datepicker'
import './components/focus'
import './components/modal'
import './components/nav'
import './components/tables'
/* eslint-enable import/first */

export { select } from './components/select'
