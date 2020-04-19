const dedent = require('dedent');

const styles = 'position: absolute; bottom: 0; width: 1px; height: 1px; overflow: hidden';

exports['index.js'] = icons => dedent`
  /**
   * NOTICE: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN. SEE \`src/templates.js\`.
   */

  const svgString = '<div style="${ styles }" hidden aria-hidden="true">${ icons }</div>';

  (function ($) {
    $(() => $('body').append(svgString));
  }(jQuery));
`;

exports['Regular.md'] = directories => dedent`
  

  ${ directories.map(directory => `<div data-example>
    
    <h3>${ directory.header }</h3>
    <div class="mt-1 row text-blue">
      ${ directory.icons
          .map(iconId => `<div class="col-4 mb-2">
          <svg role="presentation" class="icon" width="${directory.width}" height="${directory.height}"><use xlink:href="#icon-${iconId}"></use></svg>
          <span class="text-sm ml-05">${iconId}</span>
      </div>`).join('\n          ')
      }
      </div>
    </div>`).join('\n     ')
  }
`;

exports['Special.md'] = directories => dedent`
 

  ${ directories.map(directory => `<div data-example>
    
    <h3>${ directory.header }</h3>
    <div class="mt-1 row text-blue">
      ${ directory.icons
          .map(iconId => `<div class="col-4 mb-2">
          <svg role="presentation" class="icon" width="${directory.width}" height="${directory.height}"><use xlink:href="#icon-${iconId}"></use></svg>
          <span class="text-sm ml-05">${iconId}</span>
      </div>`).join('\n          ')
      }
      </div>
    </div>`).join('\n     ')
  }
`;