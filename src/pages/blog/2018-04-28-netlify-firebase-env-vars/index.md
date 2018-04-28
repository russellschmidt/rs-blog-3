---
path: "/blog/netlify-firebase-env-vars/"
date: "2018-04-28T16:20:11.200Z"
title: "Netlify and Firebase"
type: "blog"
---

# Netlify &amp;
# Firebase &amp;
# Environmental Variables &amp;
# Secrets &amp;
# dotenv

I am still chugging through this tutorial but making it my own once again by not using Heroku but my new best friend Netlify for hosting. Unfortunately for me, I was having a hell of a time getting my Firebase credentials to work, and the Netlify documentation didn't have a dead-simple list like my addled-brain requires.

So you want to use Firebase? Cool. That requires six variables to connect, which Firebase gives you when you create your database. 

1. API Key
2. Auth Domain
3. Database URL
4. Project ID
5. Storage Bucket
6. Messaging Sender ID

Per the tutorial, you want to, in `root`, create two files `.env.development` and `.env.test` and pop the respective firebase information in each.

### Production Time

So proceeding from the point where we assume that you have keys in a `/firebase/firebase.js` file, we need to do a few things. 

First, add a couple of libraries to make life good-er.

`$ yarn add dotenv cross-env --dev` 
[dotenv docs](https://www.npmjs.com/package/dotenv) dotenv allows the loading of .env files. We are going to put database credentials in these files and definitely 100% not going to commit them to a repo.
[cross-env docs](https://www.npmjs.com/package/cross-env) allows you to set `NODE_ENV=test` and whatnot across operating systems. Otherwise, you need to do an OS check and put in conditionals for this which is super lame. Thank you, open source friends.

Next, update your `firebase` file (this is a breaking change for now).

```javascript

import * as firebase from 'firebase'

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
}
firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }

```

### Creating dot-env files

Create `.env.development` and `.env.test` (if you partake) files in the project root and copy over the appropriate credentials for each.

```
FIREBASE_API_KEY=ABCdefGHIjklMNOprqSTUvwxYZAbcd
FIREBASE_AUTH_DOMAIN=yourapp.firebaseapp.com
FIREBASE_DATABASE_URL=https://yourapp.firebaseio.com
FIREBASE_PROJECT_ID=yourapp
FIREBASE_STORAGE_BUCKET=yourapp.appspot.com
FIREBASE_MESSAGING_SENDER_ID=12345678901
```

### Configure Webpack

There are three main changes we need to make to webpack. First, we need to add `webpack.DefinePlugin` which we use to suck up those environmental variables from either of our two `.env` files or the key-value pairs we set with our host. Second, we need to configure this plugin and set it to each value. Last, we need to tell our program where to get these variables based on the environment.

##### webpack.DefinePlugin
At the top, use `const webpack = require('webpack')` and we are done. [Docs here](https://webpack.js.org/plugins/define-plugin/) explain that this built in bad boy lets you "create global constants which can be configured at compile time". The trick that "if the value is a string it will be used as a code fragment" i.e. if you dont enclose a string in double quotes it gets turned into a variable name... so we need to use `JSON.stringify(x)` where x a variable or `JSON.stringify("y")` if we want to pass "y" as a string. 

Anyway, this is what your webpack should look like:

```javascript
module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')

  return {
...
    plugins: [
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
...
  }
}
```

##### Environment conditional in webpack
"Hey, I'm a stupid computer program, where are my secret keys?" 
"I got you boo just look at this conditional"
* -me and my 'puter

Last but not least before we leave webpack behind, we need to create a conditional that sets up the proper source for the environmental variables. This goes below the requires and above the module.exports bit.

```javascript
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'})
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: '.env.development'})
}
```

First we assign a default 'development' status to NODE_ENV if we aren't in production or test mode. 

Then we just conditionally configure test and development to use those .env files.

WEHRE IS PRODUCTION? Friend, production will just come by natural-like from the host. If you are using heroku, [you can enter these through the CLI](https://devcenter.heroku.com/articles/config-vars) which is supercool. We dive into Netlify my host du jure below.

#### Changing your tests to use a test database

If you are running tests, you are in luck, we need to do more work. 

In a `./tests/setupTests.js` type file...

```javascript

import DotEnv from 'dotenv'

DotEnv.config({ path: '.env.test' })

```

and then in `package.json` we need to add...

```json

 "scripts": {
  "test": "cross-env NODE_ENV=test jest --config=jest.config.json",
 }

```

### Netlify
There are some handy docs for Netlify [here](https://www.netlify.com/docs/netlify-toml-reference/) and [here](https://www.netlify.com/docs/build-settings/). Also, [this tutorial](https://macarthur.me/posts/building-a-lambda-function-with-netlify/) helped me understand the code a bit better, though they are explaining an AWS Lambda integration. 

You can pass environmental variables to Netlify either through the GUI or via a `netlify.toml` file. I think for security's sake you want to avoid the `netlify.toml` file since you don't want to commit it to a repo and have it become public. If there is a way to submit the `netlify.toml` file directly to Netlify, then it might be an option.

#### Netlify Environment Variables through the Website's GUI
The docs as of this writing were informative but took me a bit to get what I wanted because I think they changed the interface a bit. I thought setting environmental variables would be front and center for most.

1. Login to <netlify.com>
2. Select your project
3. Click 'Site Settings'
4. 'Build and Deploy'
5. 'Continuous Deployment'
6. 'Link site to Git' (one time)
7. 'Advanced'
8. 'Build environment variables' - 'Edit variables'
9. Netlify defaults their NODE_ENV to 'development' (!) - first create a key-value pair of `NODE_ENV` and `production`
10. Enter the 6 Firebase keys and values (just the strings without quotation marks please)
11. Save your environment variables
12. Push your build to Netlify however you do that
13. If you are getting a Firebase-related error on production (such as regarding being unable to find the Firebase URL - see the Console via your favorite browser's website inspector/developer tools), in the Netlify GUI at the top, go to `Deploys` and from the most recent deploy, click `Publish delploy` to restart the build with the environmental variables.
14. Crack open a cold one

<figure>
<img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/blogPosts/fundrinking.gif" alt="drunk ass lady trying to shotgun a beer and collapsing while vomiting">
<figcaption>Alcohol: not always great.</figcaption>
</figure>