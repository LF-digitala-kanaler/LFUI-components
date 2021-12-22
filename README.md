# LFUI-components
LFUI-components is a HTML-, CSS- and JS framework built on top of Bootstrap 4 to
be used in Länsförsäkringar's different applications and websites. LFUI has
restyled many of Bootstrap's native components as well as included new ones
specific for Länsförsäkringar, along with other custom features and utilities.

## Getting started
To install lfui-components in your project, you will need to configure your
environment for GitHub Packages.

First you'll need to authenticate with [GitHub Packages][github-packages]. The
easiest way is by logging in with npm. You'll need to [generate a personal
access token][personal-access-token] which you use as your password.

```
npm login --scope=@lf-digitala-kanaler --registry=https://npm.pkg.github.com
```

Add an `.npmrc` file to your project root folder.

```
@lf-digitala-kanaler:registry=https://npm.pkg.github.com
```

Install the package as you normally would.

```
npm install @lf-digitala-kanaler/lfui-components
```

### Usage
In the /dist folder you will find:

* lf.css
* lf.js
* Fonts

These files are built/compiled from the project's source files and assets. They
can be used as is. Simply add `jQuery`, `lf.js` and `lf.css` to your document.

## In your build
Import LFUI.scss in the very beginning of your main SCSS file:

```
@import "@lf-digitala-kanaler/lfui-components/src/scss/LFUI.scss";
```

This will give you access to the full LFUI suit including its variables and
mixins.

### Fonts
LFUI-components includes fonts for self-hosting. While you can import them
directly from `node_modules`, it's probably easier to copy the files to your
project.

In this example we are using `copyfiles` to do this.

```
npm install copyfiles --save-dev
```

Once installed you can add a script to your `package.json` to copy the files
into your project.

```
"scripts": {
  "copy:fonts": "copyfiles --flat node_modules/@lf-digitala-kanaler/lfui-components/dist/lfui/fonts/* fonts/YOUR_PATH"
}
```

Depending on where in your project you place the font files, update the provided
variable `$asset-path` too match your setup. Place it before your `lfui.scss`
import.

```
$asset-path: "./";
@import "@lf-digitala-kanaler/lfui-components/src/scss/LFUI.scss";
```

LFUI-comonents provides a way to control the font loading technique using CSS
[font-display][font-display]. This allows you to adjust the load performance of
your app:

```
// Change the font loading technique in your app, swap is default
// auto, block, swap, fallback, optional
$font-display: auto;
```

## Migrating from lfui 6.x.x
There hasen't been so many changes to the core components in this version but
there is a couple of steps you have to take to get it to work.

* Remove the old `lfui` package and replace it with
`@lf-digitala-kanaler/lfui-components` in your `package.json` and install it.
* Depending on your build setup update lf.js and lf.css with the new one in
`@lf-digitala-kanaler/lfui-components`.
* If you want the updated fonts follow the steps above to copy them over.
* Now it's time for the time consuming part. We have a new icon system and all
icons in your project needs to be updated. Head [here][lfui-icons] and follow
the guide.

# Development
LFUI-components uses [Storybook](https://storybook.js.org/) for UI development
and testing. Documentation for each componet will be done in
[LFDS](https://lf-digitala-kanaler.github.io/)

The project is structured as such:

```
LFUI-components/
├── .storybook/
│    **Configuration for storybook**
├── dist/
│  ├── docs/
│  │   └── **component examples that will be used in LFDS**
│  └── lfui/
│      ├── lfui.css
│      ├── lfui.js
│      └── fonts/
├── public/
│   └── **generated storybook site that will be pubished on Github Pages**
└── src/
    ├── data/
    ├── docs/
    │   ├── Alert/
    │   │   ├── *.html ** html for component  **
    │   │   │── *.js ** custom js for example will not be included in lfui.js  **
    │   │   └── *.stories.js ** Storybook file  **
    │   │   ....
    │   └── index.js ** Export all js/css to dist/docs that's needed for the example to work in LFDS **
    ├── icons/
    │   └── **icons from lfui-icons**
    ├── js/
    │   └── components /
    │       **js for components**
    ├── scss/
    │   └── ** styles for components **
    └── index.js ** Export for lfui.js and lfui.css**
```

### Branches and releases
The latest work is always in the branch `main`. New features and patches are
added through pull requests.

When a new version is ready to be released we creat a new release tag and
publish it to GitHub Packages.

#### Build and start the development server
```
npm install
npm start
```

This will start a development server where you can see any changes you are
making to the components.

When you are done with your development make sure you update
`componentsStatus.json` - changedInVersion for the component you have work on.
This will be visible in LFDS when you decide to update LFDS with a new
LFUI-components version.

```
npm run build
```

### Linting
The project uses [standard][standard] and [stylelint][stylelint] to verify code.

```
npm test
```

### Document your changes
Finally update Shipping list with your changes.

### Deploy storybook site
WHen you create a release  a Github action will build your changes to Github
pages and be available [here][lfui-components-webpage].

### Create a Release
* Update `changedInVersion` in `componentsStatus.json` if you made changes to
that component in this release. This information will be visible in LFDS later.
* Bump the version number `npm version <major|minor|patch>`
* Push the chages to GitHub
* Head to GitHub, find the relase and update the release notes. This information
will be visible in LFDS when we do a new deploy of it. * If there are any
**breaking changes** make sure those are explained.

    **Tag version:** (ex. 7.0.0)
    **Release Title**: LFUI-components + number (ex. LFUI-components 7.0.0)

* Open the LFDS repository and upgrade LFUI-components dependency in
package.json to the release you just created.
* Deploy the new version of LSDF
* If you have added new components, now is the time to document those in LFDS if
it's not done already. Visit [LFDS repository][lsdf-repository] for more
information how to do that

### Share the release
* Add LFUI-componets to Nexus (see internal documentation)

[lsdf-repository]: https://github.com/LF-digitala-kanaler/LFDS
[lfui-components-webpage]: https://lf-digitala-kanaler.github.io/LFUI-components
[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[font-display]: https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
[lfui-icons]: https://github.com/LF-digitala-kanaler/LFUI-icons
[standard]: https://standardjs.com
[stylelint]: https://stylelint.io
