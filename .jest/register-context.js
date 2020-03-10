import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

import $ from 'jquery';
global.$ = global.jQuery = $;