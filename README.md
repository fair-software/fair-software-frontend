# fair-software

> Recommendations for research software

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

