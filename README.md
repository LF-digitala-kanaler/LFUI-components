# LFUI-components

LFUI-components is a HTML-, CSS- and JS framework built on top of Bootstrap 4 to be used in Länsförsäkringar's different applications and websites. LFUI has restyled many of Bootstrap's native components as well as included new ones specific for Länsförsäkringar, along with other custom features and utilities.


For information how to use LFUI 6.7.0 visit the old [lfui](https://github.com/LF-digitala-kanaler/LFUI) repository.

## Getting started 

To install lfui-components in your project, you will need to run the following command using npm:
```
npm install https://github.com/lf-digitala-kanaler/LFUI-components.git#release/{LATEST_RELEASE}
```
If you prefer Yarn, use the following command instead:
```
yarn add https://github.com/lf-digitala-kanaler/LFUI-components.git#release/{LATEST_RELEASE}
```

The end of the command above is pointing towards a specific branch, in this case our latest release ```7.0.2-branch```. You can alter this number to point at the branch/release of your choice.

### Usage

In the /dist folder you will find:

* lf.css
* lf.js
* Fonts

These files are built/compiled from the project's source files and assets. They can be used as is. Simply add ```jQuery```, ```lf.js``` and ```lf.css``` to your document.

## In your build

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
  "copy:fonts": "copyfiles --flat node_modules/lfui-components/dist/lfui/fonts/* fonts/YOUR_PATH"
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

## Development 

LFUI-components uses [Storybook](https://storybook.js.org/) for UI development and testing. Documentation for each componet will be done in [LFDS](https://lf-digitala-kanaler.github.io/) 

The project is structured as such:

```
LFUI-components/
├── .storybook/
│    **Configuration for storybook**
├── dist/
    ├── docs/
    │   └── **component examples that will be used in LFDS**
    ├── lfui/
    │   ├── lfui.css
    │   ├── lfui.js
    │   └── fonts/
    │ 
    └── public/
        └── **generated storybook site that will be pubished on Github Pages**
    └── src/
        ├── data/
        ├── docs/
        │   ├── Alert/
        │       ├── *.html ** html for component  **
        │       │── *.js ** custom js for example will not be included in lfui.js  **
        │       └── *.stories.js ** Storybook file  **
        │       .... 
        │   ├── index.js ** Export all js/css to dist/docs that's needed for the example to work in LFDS ** 
        │   ├── icons/
        │   │   └── **icons from lfui-icons**
        │   ├── js/
        │   │   └── components / 
        │   │       **js for components**
        │   ├── scss/
        │   │   └── ** styles for components **
        │   ├── src/
        │   │   └── **styleguide styling, jquery, and assets**
        │   └── index.js ** Export for lfui.js and lfui.css**

```

### Install

To install, clone this repo and run 

```jsx
yarn install
```

### Work in a branch
 
 When contributing to LFUI-Components, your work should always be done in a branch off the current release development branch.


To create a new branch:

```jsx
 git checkout -b {your-branch-name}
 ```
 
 #### Build and start the development server
```jsx

# Install the project's dependencies

yarn install

# To get your development server running and to start coding

yarn start
```

This will start a development server where you can see any changes you are making to the components

When you are done with your development make sure you update `componentsStatus.json` - changedInVersion for the component you have work on. 
This will be visible in LFDS when you decide to update LFDS with a new LFUI-components version. 

```jsx

yarn build

```

### Create a pull request

When you are finished with your work it's time to make a pull request. To do so commit your code to your working branch and push it. 

```jsx
 git add .
 git commit -m "YOUR COMMIT MESSAGE HERE"
 git push origin { YOUR_BRANCH_NAME }

 ```
### Document your changes 

Finally Update Shipping list with your changes.  
 
### Deploy storybook site

When your pull request is merged a Github action will build your changes to Github pages and be available [here](https://lf-digitala-kanaler.github.io/LFUI-components/7.1.0/)

Automatic release with Github Action is only active for the current release branch, you can change this in main.yml if you need to add another branch. 

When the pull request is accepted and merged a Github action will automatically create a new release and update the version number. 

### Create a Release 
* Update shipping list with all noteworthy PRs
* If there is any **breaking changes** make sure those are explained
* Update `changedInVersion` in `componentsStatus.json` if you made changes to that component in this release. This information will be visible in LFDS later.
* Update version number in package.json
* Run `yarn build` commit and push your code
* Head to Github and create a new draft release with

    **Tag version:** (ex. 7.0.0)  
    **Release Title**: LFUI-components + number (ex. LFUI-components 7.0.0)

* Create release notes and paste your shipping list here. This information will be visible in LFDS when we do a new deploy of it.
* Create a new production branch and make it your **default branch** Settings -> Branches -> Default Branch
* Lock the previous branch Settings -> Branches -> Protected Branches
* Create a new shipping list 
* Open the LFDS repository and upgrade LFUI-components dependency in package.json to the release you just created
* Run `yarn build` and `yarn deploy` to deploy LFDS wiith the new LFUI-components version
* If you have added new components now it's time to document those in LFDS if it's not done already. Visit [LFDS repository](https://github.com/LF-digitala-kanaler/LFDS) for more information how to do that

### Share the release 

* Add LFUI-componets to Nexus (see internal documentation) 

