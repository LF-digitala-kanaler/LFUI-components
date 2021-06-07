# LFUI

LFUI is a HTML-, CSS- and JS framework built on top of Bootstrap to be used in Länsförsäkringar's different applications and websites. LFUI has restyled many of Bootstrap's native components as well as included new ones specific for Länsförsäkringar, along with other custom features and utilities.


For information how to use LFUI 6.7.0 visit the old [lfui](https://github.com/LF-digitala-kanaler/LFUI) repository.

## Getting started 

To install lfui-components in your project, you will need to run the following command using npm:
```
npm install https://github.com/lf-digitala-kanaler/LFUI-components.git#release/7.0.0
```
If you prefer Yarn, use the following command instead:
```
yarn add https://github.com/lf-digitala-kanaler/LFUI-components.git#release/7.0.0
```


The end of the command above is pointing towards a specific branch, in this case our latest release ```7.0.0-branch```. You can alter this number to point at the branch/release of your choice.

### Usage

In the /dist folder you will find:

* lf.css
* lf.js
* Fonts

These files are built/compiled from the project's source files and assets. They can be used as is. Simply add ```jQuery```, ```lf.js``` and ```lf.css``` to your document.

## in your build

Import LFUI.scss in the very beginning of your main SCSS file:

```@import "lfui-components/src/scss/LFUI.scss";```

This will give you access to the full LFUI suit including its variables and mixins.

### Fonts

LFUI-components includes fonts for self-hosting. While you can requier them directly from node_module it's probaably easier to copy the files to your project 

In this example we are using ```copyfiles``` to do this.  


```
npm install copyfiles --save-dev
```

Once installed you can add a script to your ```package.json``` to copy the files into your project

```
"scripts": {
  "copy:fonts": "copyfiles --flat node_modules/lfui-components/dist/fonts/* fonts/YOUR_PATH"
}
```

Depending on where in your project you place the font files, update the provided variable `$asset-path:` too match your setup. Place it before your ```lfui.scss``` import.

```
$asset-path: './';
@import "lfui-components/src/scss/LFUI.scss";
```

LFUI-comonents provides a way to control the font loading technique using CSS [font-display](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display). This allows you to adjust the load performance of your app:

```
// Change the font loading technique in your app, swap is default
// auto, block, swap, fallback, optional
$font-display: auto;

```

## Migrating from lfui 6.x.x

There hasen't been so many changes to the core components in this version but there is a couple of steps you have to take to get it to work. 

* Remove the old `lfui` package and replace it with `lfui-components` in your `package.json` and install it. 
* Depending on your build setup update lf.js and lf.css with the new once in `lfui-components`
* If you want the updated fonts follow the steps above to copy them over.
* Now it's time for the time consuming part. We have a new icon system and all icons in your project needs to be updated. Head [here](https://github.com/LF-digitala-kanaler/LFUI-icons) and follow the guide 

That should be it! 
