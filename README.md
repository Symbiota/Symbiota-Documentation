# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator. A live version of this repository is being served at [https://symbiota.github.io/Symbiota-Documentation/](https://symbiota.github.io/Symbiota-Documentation/).

### Editing Without Locally Installing

The repository's folder structure looks something like this:

```
.
├── blog
│   └── 2021-08-26-welcome
├── build
│   ├── assets
|   |── ...
│   └── pt
├── docs
|    ├── User Guide
|    │   └── Accessibility.md
|    └── about.md
|├── i18n
|    │   ├── docusaurus-plugin-content-blog
|    │   ├── docusaurus-plugin-content-docs
|    ├── es
|    │   │   ├── current
|    │   │   │   └── User Guide
|    │   │   ├── version-1.1.0
|    │   │   └── version-1.2.0
|    │   ├── docusaurus-plugin-content-pages
|    │   └── docusaurus-theme-classic
|    ├── fr
|    │   ├── docusaurus-plugin-content-docs
|    │   │   └── current
|    │   │       └── User Guide
|    │   └── docusaurus-plugin-content-pages
|    └── pt
|        ├── docusaurus-plugin-content-docs
|        │   └── current
|        │       └── User Guide
|        └── docusaurus-plugin-content-pages
├── node_modules
│   ├── @algolia
|   |── ...
│   ├── yaml
│   ├── yocto-queue
│   └── zwitch
├── src
│   ├── components
│   ├── css
│   └── pages
├── static
│   └── img
├── versioned_docs
│   ├── version-1.1.0
│   └── version-1.2.0
└── versioned_sidebars
```


The documentation files are markdown-formatted and are thus compatible with [earlier Symbiota documentation repositories](https://github.com/BioKIC/symbiota-docs). New documentation pages can be generated simply by adding new markdown-formatted files to one of several different folders within the above structure (see below for more detail).

Several different versions of the documentation exist in parallel within this same repository and are tracked separately; one for each language and each version. 

Specifically, the working version of the documentation (not seen by the end user upon publication) exists in the `docs/` directory. Folders within this `docs/` directory represent nested structures within the documentation that will be respected and rendered in the Docs side menu (seen after clicking on the Docs link in the navbar).

Different versions of the documentation live in the `versioned_docs/version-x.y.z/` folders. Their directory structure should largely resemble that found in `docs/` excepting those ocassions where the documentation is meant to diverge. When a new version of the documentation is generated (which can be done with an npm command; see 'Cutting a new version' section below), a copy of the `docs/` folder is generated in the `versioned_docs/` directory with the new version name. See [here](https://docusaurus.io/docs/versioning) for more details.

Versions of the documentation in different languages live in the `i18n/` folder. Within each language folder in that directory, different versions of the documentation can be found in the `.../docusaurus-plugin-content-docs/version-x.y.z/` folders. These are all also markdown files. If any files exist in the default language documentation (English in our case) that are missing translations, they will be present in the default language.

Note that if you are adding new documentation and want it to be present in all versions and all languages, copies of that same markdown-formatted file will need to be placed in every language + version folder that is desired. Otherwise, the default language matching that version will be present instead.

### Installation

Clone this repository locally on your machine.

Install either yarn or npm. [This tutorial](https://www.geeksforgeeks.org/how-to-download-and-install-node-js-and-npm/) might be helpful. If using npm, you will also need to [install Node.js](https://nodejs.org/en) on your local machine (see above tutorial).


Once yarn or npm have been installed, run:

```
$ yarn
```

```
$ npm install
```

### Local Development

```
$ yarn start
```

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.


### Automated build and deployment

In [https://github.com/Symbiota/Symbiota-Documentation](https://github.com/Symbiota/Symbiota-Documentation), the repository is configured to re-build and deploy to the gh-pages branch upon every push to the `main` branch. Therefore, the "Build" and "Deploy" sections below are no longer necessary to deploy to [https://symbiota.github.io/Symbiota-Documentation/](https://symbiota.github.io/Symbiota-Documentation/).

### Build

```
$ yarn build
```

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Cutting a new version

New versions of the documentation can be generated automatically using the npm command `npm run docusaurus docs:version x.y.z`. See [here](https://docusaurus.io/docs/versioning) for more information.

You will need to add a link to the new version of documentation manually to `docusaurus.config.ts` by adding a new item element to the items array for dropdown menu with `label: 'Versions'`. The `Latest` label will also need to be updated. Versioned language files are automatically copied from their respective `/i18n/lang/docusaurus-plugin-content-docs/current/` directories.

### Adding a new language

New languages can be added to the repository using the following commands:

Add the new language to the locales array in `docusaurus.config.js`.

Run `npm run write-translations -- --locale fr` ... or whichever locale code you're adding. This will extract phrases from the React pages (there should be relatively few of these in our use case) into a json file to be translated.

Copy your untranslated markdown files to the following folders:

```
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current
cp -r docs/** i18n/fr/docusaurus-plugin-content-docs/current

mkdir -p i18n/fr/docusaurus-plugin-content-blog
cp -r blog/** i18n/fr/docusaurus-plugin-content-blog

mkdir -p i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.md i18n/fr/docusaurus-plugin-content-pages
cp -r src/pages/**.mdx i18n/fr/docusaurus-plugin-content-pages
```

When a new version is cut, whatever documentation is present in a particular language's `current/` directory will be copied into the new version name's directory for each language.

See more details [here](https://docusaurus.io/docs/i18n/tutorial).
