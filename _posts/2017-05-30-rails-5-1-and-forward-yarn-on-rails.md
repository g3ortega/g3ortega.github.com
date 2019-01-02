---
title: 'Rails 5.1 and forward - Part 1: Yarn on Rails'
description: 'A collection of valuable and free resources to learn Artificial Intelligence and Machine Learning'
date: 2017-05-30 08:43:59 Z
categories: 
- rails
layout: post
author: Gerardo Ortega
cover: /assets/ruby-on-rails-5.1.png
lang: en
---

Just a week ago was announced the most recent version of Ruby on Rails, one of my favorite web frameworks which I have used in many projects for over three years. There are plenty of amazing features and new changes, one of my favorite is the integration with Yarn, a great package manager tool for javascript, which is fast, secure and reliable. 

I'm preparing a post series to explain the main changes introduced in Rails 5.1, in this post, I'm going to address the new way to deal with Javascript using Yarn, and of course I going to write a little about Yarn in general. So let's get started.

## Rails 5.1, the proof of the maturity of the ecosystem

Rails 5.1 solves many of the "pending issues" of the recent years. About all, issues related to the assets management that since version 4.0 were handled by Sprockets, a gem that allowed us centralize all the process of grouping, use and compile all our assets using practical conventions. 

Although Sprockets do a fantastic job for most of developers, it raised some issues for others, about all when you needed to work with complex third party libraries in javascript, usually with many additional dependencies. For those cases, the maintenance of third party libraries was also a problem to such degree you usually needed to install extra gems that encapsulated all the process of integration and made easy the upgrade to newer versions of the libraries.

On the other hand, many years ago a growing set of tools emerged from the javascript community to solve many of the problems the developers had to face every time they started a new javascript project, giving practical solutions to the question: How to handle packages and their dependencies in a fast and efficient manner? And that's how many tools (like NPM, Bower, Grunt, etc.) came out. And sometimes the process of manage assets dependencies in Rails felt repetitive considering the remarkable advances in the js ecosystem for this area.

It was not a surprise that when Chris McCord released Phoenix Framework two years ago, and he decided to include Brunch as asset build tool, adopting NPM as package manager. But, the Rails community showing their willingness to adopt new ways to do things if needed, decided with the release of Rails 5.1 to include Yarn as package and dependency manager for JS assets and optionally Webpack to handle module bundles and compilation. That's a big step in the right direction towards where the web development is heading.

In this post we will cover how the integration with Yarn works.

## Introducing Yarn

Yarn is a package manager created by Facebook, and announced last year. According to Facebook, they were using NPM but as the size of their codebase and the number of engineers working on their projects grew, they ran into problems with consistency, security and performance. So they needed a tool that was fast and reliable.

And the best of all is that Yarn development is supported by other companies like Google and Tilde.

### Intaling Yarn


#### macOS

- Using Homebrew

{% highlight bash %}
brew install yarn
{% endhighlight %}

- Using MacPorts

{% highlight bash %}
sudo port install yarn
{% endhighlight %}

#### Windows

The easiest way is to use the installer, you can find it [here](https://yarnpkg.com/latest.msi).

You can also use Chocolatey

{% highlight bash %}
choco install yarn
{% endhighlight %}

And Scoop as well

{% highlight bash %}
scoop install yarn
{% endhighlight %}

#### Ubuntu

First you need to configure the repository

{% highlight bash %}
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
{% endhighlight %}

And finally simply:

{% highlight bash %}
sudo apt-get update && sudo apt-get install yarn
{% endhighlight %}

To check all went well, just check the version of yarn installed:

{% highlight bash %}
yarn --version
{% endhighlight %}

### Using yarn

Now, and previous to introduce Yarn applied to the RoR context, we are going to start using Yarn independently.

So, let's start a new project using Yarn:

{% highlight bash %}
mkdir yarn_test
cd yarn_test

yarn init
{% endhighlight %}

Yarn goig to ask you for basic information about the project, like the name of the project, version, description, author, repo url, and so on.

When the initialization have finished you will see a new file named package.json, which contains the data you provided before.

And now we are going to proceed to add new dependencies. You have different ways to add a dependency: just using its name, or specifying its version or tag. In this case I'm just going to add a react.js package without specify the version, to get the latest.

{% highlight bash %}
yarn add react
{% endhighlight %}

And that's it. If you check the package.js file you will find the latest version of reactjs.

Optionally you can different categories of dependencies, and upgrade them or remove them. To install all dependencies of a project you just need to execute

```
yarn
```
or

```
yarn install
```

You can check all the tree of depencies in a new file that is created after you install the first package, called yarn.lock

And, since I do not want to leave this example incomplete, let's create a react hello world app, the easy way.

First of all lets install the package create-react-app, but globally to use it from the terminal.

{% highlight bash %}
yarn global add create-react-app
{% endhighlight %}

And now, we can check create-react-app is working asking for his version:

{% highlight bash %}
create-react-app --version
{% endhighlight %}

If everything is Ok, let's proceed to create our first react.js application:

{% highlight bash %}
create-react-app hello-world
{% endhighlight %}

Then, you are going to see an output similar to the following:

{% highlight bash %}
Success! Created hello_world at /Users/gerardo/opensource/yarntest/hello_world
Inside that directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn run build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd hello_world
  yarn start

Happy hacking!
{% endhighlight %}

Amazing! So, let's try our recently created app:

{% highlight bash %}
cd hello_world
yarn start 

/////
Compiled successfully!

The app is running at:

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use yarn run build.

{% endhighlight %}

So, if you go to http://localhost:3000/ you will see your app up and running.

Now, let's take a look of the files generated:

{% highlight bash %}
ls -l

-rw-r--r--    1 gerardo  staff   80668 May 31 10:10 README.md
drwxr-xr-x  774 gerardo  staff   26316 May 31 10:18 node_modules
-rw-r--r--    1 gerardo  staff     374 May 31 10:10 package.json
drwxr-xr-x    4 gerardo  staff     136 May 31 10:10 public
drwxr-xr-x    8 gerardo  staff     272 May 31 10:10 src
-rw-r--r--    1 gerardo  staff  188529 May 31 10:10 yarn.lock

cat package.json

{
  "name": "hello_world",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^15.5.4",
    "react-dom": "^15.5.4"
  },
  "devDependencies": {
    "react-scripts": "0.9.x"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}

{% endhighlight %}

If you have tried previously other package and dependency managers, you will appreciate how clean and easy was to get to this point. I will not go deeper into reactjs, maybe in a future post I'm going to address that using Yarn, but that was a taste of Yarn. I'm really glad they decided to integrate it into the Rails workflow, you can see the details in this [pull request](https://github.com/rails/rails/pull/26836).

### Yarn on Rails

Now let's try to use Yarn inside a new Rails 5.1 application.

{% highlight bash %}
rails new yarn_test

cd yarn_test
{% endhighlight %}

In addition to the normal files you see when a new rails project is generated, you will find a package.json file, and if you take a look to the assets initializer file, you will find  the following line:

{% highlight ruby %}

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

{% endhighlight %}

So, Rails automatically includes the directory node_modules to the assets pipeline, you just need to reference the new package you want to add, for example, let's say we want to use the moment.js library. We need first of all install the library using Yarn:

{% highlight bash %}
yarn install moment
{% endhighlight %}

We can see that package.json was updated

{% highlight json %}
{
  "name": "yarn_test",
  "private": true,
  "dependencies": {
    "moment": "^2.18.1"
  }
}
{% endhighlight %}

And finally we need to include the new package to application.js:

{% highlight javascript %}
//= require moment/moment
{% endhighlight %}

That's all for this first part, in the second part of this series I going to address Webpack and how to use it to compile and manage javascript bundles.