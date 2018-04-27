---
path: "/blog/firebase/"
date: "2018-04-26T16:20:11.200Z"
title: "Firebase"
type: "blog"
---

Learning to use Firebase with React has been super fun, and is a great primer on promises and callbacks if you have not already been initiated into their mysterious ways. I see the value in goofy exercises that cover fun things like addition and subtraction - we all need to run before we can walk - but jumping into using Firebase AND applying promises right away makes so much sense. 

```javascript
const config = {
  apiKey: "abc123",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "12345"
}
firebase.initializeApp(config)

const db = firebase.database()
```

In this `.js` file, you have a full connection to Firebase if you had nonsense credentials as I entered here. **do not commit this to git** that is bad.

Go to your Firebase database, and in Rules, set read and write to true. Now you have an insecure database you can play with and that is wide open to the world.

In that same `.js` file, you can now write and read using promises.

Here, set up a database, I dare you.

```javascript
database.ref().set({
  team: 'dodgers',
  pitchers: {
    starting: {
      ace: 'clayton kershaw',
      verygood: 'alex wood',
      radForFiveInnings: 'kenta maeda',
      alwaysInjured: 'hyun-jin ryu'
    },
    reliever: {
      ace: 'kenley jansen',
      lovesCocaine: 'pedro baez',
      solid: 'rod stripling',
      solidAlso: 'adam liberatore'
      injured: 'julio arias'
    }
  }
}).then(() => {
  console.log('data is saved!')
}).catch((e) => {
  console.log('Error with save!', e)
})

```

We can in this sorta trivial example use promises to give us status updates in our app.

The big method names we need for CRUD database operations are...

`db.ref().set()`
`db.ref().update()`
`db.ref().remove()`
`db.ref().once()`
`db.ref().on()`
`db.ref().off()`
`db.ref().push()`

With SET and UPDATE, we can CREATE and UPDATE. REMOVE (or passing SET with null values) can delete. ONCE and ON allow for READ operations either as a one time or a push on change subscription. OFF allows you to turn off subscriptions. And PUSH is a special CREATE for arrays, since Firebase does not support arrays. PUSH creates a object with a key of a unique ID in lieu of an index number.

