---
path: "/blog/netlify-firebase-env-vars/"
date: "2018-04-26T16:20:11.200Z"
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

Per the tutorial, you want to, in root, create two files `.env.development` and `.env.test` and pop the respective firebase information in each.

### Netlify
There are some handy docs for Netlify [here](https://www.netlify.com/docs/netlify-toml-reference/) and [here](https://www.netlify.com/docs/build-settings/). Also, [this tutorial](https://macarthur.me/posts/building-a-lambda-function-with-netlify/) helped me understand the code a bit better, though its using an AWS Lambda integration. 

1. Go to your Netlify login
2. Build and Deploy
3. Link your repo
4. Advanced
5. NODE_ENV=production
6. Firebase keys
7. Push build / rebuild via GUI (refresh does nothing)