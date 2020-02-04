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

exports['README.md'] = directories => dedent`
  <!-- NOTICE: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN. SEE \`src/templates.js\` -->

  ## Building the icons

  There are several Sketch files available in the \`icon/src\` directory, which serve as master files - one for each icon size. When we add new icons, we export them to the \`icon/src/svg\` directory that corresponds to the chosen icon size. Make sure to only use filled outlines with color #ff0000 to make sure that the icons use the current color. Also make sure you pixel-align the icons correctly.

  ## Using the icons

  The raw exported files are located in the \`icon/src/svg\` directory but they are not intended to be used as is. Instead we generate a sprite map and append it to the DOM on page load. If you include \`lf.js\` you'll get that for free.

  We can then have an icon show up anywhere on the page with the svg \`<use>\` technique described briefly in this [article](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

  \`\`\`html
  <svg role="presentation" class="icon" width="20" height="20"><use xlink:href="#icon-wallet-20"></use></svg>
  \`\`\`

  Our \`.icon\` class helps with alignment. Note that most icons inherits the \`color\` CSS property from the parent element in the DOM (using [currentColor](https://developer.mozilla.org/en/docs/Web/CSS/color_value#currentColor_keyword)).

  ## On dropbox
  Sketch files of the icons and other svg resources can be found [here](https://www.dropbox.com/sh/hy8dtpc6b15rzx7/AAAP3rMStNll-9uK6XbA6u0Ka?dl=0).

  ### Icons together with other components

  An icon rarely shows up alone. Together with any text component, be it a link, heading, or paragrah, an icon should have **distance of 10px between itself and the text**. To achieve this, you can use the \`.icon-left\` if the icon is to be placed to the left of the text, or \`.icon-right\` for the opposite.

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
