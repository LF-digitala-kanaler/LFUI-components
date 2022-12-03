# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> Länsförsäkringar Fonts

**The Länsförsäkringar web font files and best practices we rely on.**

## Loading fonts
Please check the latest community guidelines before implementing the font files.
As of 2022, our method for limiting Flash of invisible text (FOIT) and Flash of
Unstyled Text (FOUT) relies on combining preloading and the
[`font-display: swap`][font-swap] CSS property.

Preloading

```html
<head>
  <!-- ... -->
  <link rel="preload" href="/lf-rubrik.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/intro-cond-bold.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/intro-cond-regular.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

Font display

```css
@font-face {
  font-family: 'LF Rubrik';
  src: url('/lf-rubrik.woff2') format('woff2');
  font-display: swap;
  /* ... */
}
```

## CSS
This package includes a complete CSS implementation of the font stacks ready to 
be imported.

The file declares the two custom properties
`--lf-font-family-sans-serif` and `--lf-font-family-serif` which can be used to
apply the appropriate font family.

```css
@import "@lf-digitala-kanaler/fonts";

body {
  font-family: var(--lf-font-family-sans-serif);
}

h1 {
  font-family: var(--lf-font-family-serif);
}
```

The font files are referenced relative to the CSS and can be loaded using a tool
like [postcss-url](https://github.com/postcss/postcss-url). If such a tool is
not available in your environment, you will have to copy the source files and
do the CSS implementation manually.

See the full [CSS implemetation](./index.css).

## Fallbacks

**LF Rubrik** (serif) falls back to **Georgia**. **Intro Cond** (sans serif)
falls back to **Arial**.

See the [complete font stacks](./index.css#L6-L9) in the implemetation example.

[font-swap]: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
