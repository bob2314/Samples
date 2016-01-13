# SA Super Cool & Super Simple Demo JS Twitter App

===================

##Originally part of a Code Challenge 
The goal of this challenge is to create a simple Twitter application using a frontend framework.

##App Overview


####Structure
This app ustilizes Angular.js, Node.js, & the Twitter API to creating a basic Twitter app clone and will be deployed on Heroku.

### Features:

* Responsive Grid system.
* Themed using CDN delivered assets to match the Stack Commerce site/branding.
* Heroku deployment from Git

#####Yeoman Generator

```
https://github.com/twitterdev/sample-angular-node.git
```

The base project structure was created from the above repo for the following reasons:

* Rapid development
* To utilize an established, "best practices" project setup
* and to NOT reinvent the wheel.


Installing and Running
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
git clone https://github.com/bob2314/SuperCoolTwitterApp.git
```
Create a config.js file using config.sample.js as a template. Fill in your Twitter App API Keys. You will need to [create a Twitter application](https://apps.twitter.com/).

Install node module dependencies:

```
npm install 
```

Run application:

```
npm start
```

Go to [http://localhost:5010](http://localhost:5010) in your browser.

===================



## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.


## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```

###Testing / todo
1) Add jasmin / karma / mocha to the package.json file as devDependencies
2) Define tests and add the script execution to the "scripts" section of the package.json
3) Run tests as a post install task.


Resources
----
- [Angular Developer Guide](https://docs.angularjs.org/guide)
- [Twitter API User Timeline Documentaion](https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline)
- [Twitter API oEmbed Documentation](https://dev.twitter.com/docs/api/1/get/statuses/oembed)



## Heroku Documentaation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
