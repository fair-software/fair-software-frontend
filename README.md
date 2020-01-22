# fair-software.nl

[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)

Source for the website at http://fair-software.nl . This website contains recommendations for research software. Our license is [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/) but if you want to reuse parts or all of the site and find this license too restrictive, please contact us at: fairsoftware@esciencecenter.nl

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Deploy

Create netlify account, hook up to Github repo/master branch

Install netlify cli: `npm install -g netlify-cli`
- `netlify login`
- `netlify link`
- `netlify addons:create fauna`
- `netlify addons:auth fauna`
Create the endorsements collection:
- `npm run bootstrap`

To deploy, either push to the master branch, or use:

- `npm run generate && netlify deploy`
