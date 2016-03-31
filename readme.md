# Ably Heroku Sample App

You can use this sample app to easily validate that Ably addon was properly provisioned. Steps:

```shell

git clone git@github.com:rafaeljegundo/ably-heroku-sample-app.git
heroku create app-name
heroku config:set NODE_ENV=production --app app-name
heroku addons:create ably:bootstrap --app app-name
git push heroku master
```

And Ably should be working through the addon :)
