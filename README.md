# <img src="https://github.com/LF-digitala-kanaler/favicon/blob/master/icon.svg" width="24"> Länsförsäkringar Components

Accessible and feature rich front-end framework for Länsförsäkringar web development.

[Design system →][lfds] &nbsp;&nbsp;&nbsp;&nbsp; [Storybook website →][lfui-components-webpage]

# Table of contents

- [Getting started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing](#contributing)
- [Making a release](#making-a-release)

# Getting started

To install Components in your project, you will need to configure your environment for [GitHub Packages][github-packages].

First, authenticate npm with GitHub Packages. To do that, generate a [personal access token][personal-access-token] which you use as your password. Make sure to give the token access rights to both `repo` and `read:packages` scopes.

```
npm login --scope=@lf-digitala-kanaler --registry=https://npm.pkg.github.com
```

Add a `.npmrc` file in your project root folder.

```
@lf-digitala-kanaler:registry=https://npm.pkg.github.com
```

Install the package as you normally would.

```
npm install @lf-digitala-kanaler/lfui-components
```

# Usage

You have two alternatives for getting started with the framework; either by importing the source files into a [SCSS][scss] build, or by adding the precompiled files to your HTML document.

## Source alternative

Importing the source code gives you access to the full SCSS suit including our variables and mixins – increasing your flexibility when extending the framework with your own styles and layouts.

Import `LFUI.scss` at the very beginning of your main SCSS file:

```css
@import "@lf-digitala-kanaler/lfui-components/src/scss/LFUI.scss";
```

The JavaScript bundle can be imported as a whole.

```js
import '@lf-digitala-kanaler/lfui-components'
```

Some components are also exported, both as part of the bundle as well as individual modules.

```js
// Extract from bundle
import { select } from '@lf-digitala-kanaler/lfui-components'

// Import only the specific component
import select from '@lf-digitala-kanaler/lfui-components/select'
```

## Compiled alternative

In the `/dist` folder provided, you will find: `lfui.css`, `lfui.js` and a `fonts` directory. These files can be used as-is. Simply add jQuery along with `lfui.js` and `lfui.css` to your HTML document.

## Fonts

Web fonts are included as an external dependency, so the font urls will need to
be rebased and the source files copied to the build directory. A tool such as
`postcss-url` or the Webpack `file-loader` can help you with that.

See the [fonts documentation][fonts] on loading and preloading techniques for optimal performance and accessibility.

## Icons

Icons are not part of this package. Please see the [Länsförsäkringar Icons][lfui-icons] for documentation on how to install and use.

## Favicon

See the designated [Länsförsäkringar Favicon][favicon] repo for all the assets and documentation you might need.

# Documentation

Each component is documented, with examples, on the [LFDS](lfds) website. This is our go-to for documentation.

Along with that, because our code is based on Bootstrap, the documentation from Bootstrap version [four][bs4] and [five][bs5] does provide a good overview of how components are structured, along with listing all the available [utility classes](https://getbootstrap.com/docs/5.0/utilities/api/).

# Bugs and feature requests

If you with to report a bug or submit a feature request, feel free to [open an issue](https://github.com/LF-digitala-kanaler/LFUI-components/issues/). The more information that you provide, the better.

# Contributing

We rely on [Storybook](https://storybook.js.org/) for serving and testing during development.

After cloning this repo, install the dependencies and start the server.

```
npm install
npm start
```

Along with starting Storybook, `npm start` will also rebuild and refresh the page as you work, allowing for quick changes and previews.

## Project structure

```
.
├── .storybook                # Storybook config
├── dist
│  ├── docs                   # Component examples used in LFDS
│  └── lfui                   # Compiled files
│      ├── lfui.css
│      ├── lfui.js
│      └── fonts              # The font files
├── public                    # Generated Storybook site for Github Pages
└── src
    ├── data
    ├── docs
    │   ├── Alert
    │   │   ├── *.html        # HTML example
    │   │   │── *.js          # JS used only for the example markup
    │   │   └── *.stories.js  # Storybook config
    │   │   ...
    │   └── index.js          # Exporting JS/CSS that's needed for examples in LFDS
    ├── js
    │   └── components        # JS for components
    ├── scss                  # CSS for components
    └── index.js              # Export for lfui.js and lfui.css
```

## Working with branches and pull requests

The latest and stable version is always in the `main` branch. New features and patches are then added through dedicated branches and pull requests.

When working on a new feature, begin by creating a new branch from `main`. After finishing your work, squash merge `main` into your branch and then create a pull request.

Please document the changes that you make in the pull request, along with potential changes to existing classes or variables that should be added to a migration guide later on.

## Linting
The project uses [standard][standard] and [stylelint][stylelint]. There are no automated tests beyond that.

```
npm test
```

# Making a release

* Update (`componentStatus.json`)[src/data/componentsStatus.json] with changes that have been made to the respective components in this release. This information will be visible on [LFDS][lfds] later on.
* Bump the version number `npm version <major|minor|patch>`
* Push the changes to GitHub
* Create a new release from the [tag list](https://github.com/LF-digitala-kanaler/LFUI-components/tags) on Github and add your release notes. Note that this will also be visible to the public. Take extra care to document any breaking changes.
  - Tag version example: v5.0.0
  - Release Title example: Components 5.0.0
* Creating a new release will automatically publish a new package version to GitHub Packages.
* Update the version of Components that LFDS depends on by updating `package.json` in the [LFDS repo](lsdf-repository).
* If any components have been added or changed, now is the time to document that in LFDS. See the [LFDS repository][lsdf-repository] readme.
* Deploy the new version of LSDF.

## Deploying the Storybook website
When creating a release, a Github Action will automatically deploy the changes to our [Storybook Github page][lfui-components-webpage].

## Github actions secrets
Since the package depends on private GitHub packages, a private access token is set up to authenticate the GitHub actions. The `PACKAGE_TOKEN` secret needs to
be updated when expired.

[bs4]: https://getbootstrap.com/docs/4.0/getting-started/introduction/
[bs5]: https://getbootstrap.com/docs/5.0/getting-started/introduction/
[favicon]: https://github.com/LF-digitala-kanaler/favicon
[fonts]: https://github.com/LF-digitala-kanaler/fonts
[github-packages]: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages
[lfds]: https://lf-digitala-kanaler.github.io/
[lfui-components-webpage]: https://lf-digitala-kanaler.github.io/LFUI-components
[lfui-icons]: https://github.com/LF-digitala-kanaler/LFUI-icons
[lsdf-repository]: https://github.com/LF-digitala-kanaler/LFDS
[personal-access-token]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
[scss]: https://sass-lang.com
[standard]: https://standardjs.com
[stylelint]: https://stylelint.io
