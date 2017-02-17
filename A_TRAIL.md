# Jared Trail

*NOTE: This document is a work in progress*
*NOTE: skills thats are striked through ~~like this~~ are too advanced and belong in a future skill grouping*

------

The guide is meant to:

- serve as an example path through the vast landscape of web development skills
- provide a sense of skill dependency
- serve as a reminder of what to focus on learning while working on goals

-----

## Preface

This guide is broken up into ordered skill groups. Each skill groups builds upon the last. Ideally you should obtain each skill in a given group before moving on to the next skill group but don't worry about mastering each skill. Get a basic level of competency and then move on. You'll have plenty of opportunities to practice these skills in the challenges ahead.

The skill groupings are ordered but the skills listed within each group are not ordered. Review the skills in the group, and then use one or more of the goals to practice. As you're working remember that your focus is to acquire these skills. So as you work consider checking off these skills as you feel you've obtained them.

At the end of each project:
 - review the skills you're working on and check off the ones you feel you've acquired
 - ask your peers to help you assess how well you've obtained these skills
 - take note of the resources that helped you obtain these skills so you can help improve this guide

## Skill Groups

0. [Basic Programming Environment](#basic-programming-environment)
0. [Basic Programming in JavaScript and Node](#basic-programming-in-javascript-and-node)
0. [Basic HTML and CSS](#basic-html-and-css)
0. [Basic JavaScript in the Browser](#Basic-javascript-in-the-browser)
0. [Basic Web App Architecture](#basic-web-app-architecture)
0. [Basic Relational Data Storage](#basic-relational-data-storage)
0. [Intermediate Web App Architecture](#intermediate-web-app-architecture)


### Basic Programming Environment

This sections covers the basics of what you'll need to know to begin programming on a UNIX system.

This section assumes you are working in a [BASH shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)).

#### Skills:

*UNIX / Shell*

- [ ] can explain what the `.bashrc` and `.bash_profile` files do
- [ ] can explain what a path is
- [ ] can articulate the difference between an absolute and relative path
- [ ] can articulate the difference between an `/`, `./` , `../`
- [ ] can articulate the difference between `control-c` and  `control-z`
- [ ] can explain what the $PATH environment variable is for
- [ ] can add and remove paths from their $PATH
- [ ] can install a package via homebrew
- [ ] can explain what a UNIX `process` is
- [ ] can search for a running process and kill it
- [ ] can explain what `environment variables` are
- [ ] can check the value of an environment variable
- [ ] can set a new environment variable for all new shells
- [ ] can colorize their $PS1
- [ ] can tab complete git commands
- [ ] can explain control-c and control-d terminal key commands
- [ ] can explain and use the following shell commands
  - [ ] ls
  - [ ] cd
  - [ ] touch
  - [ ] rm
  - [ ] mkdir
  - [ ] rmdir
  - [ ] chmod
  - [ ] pwd
  - [ ] ps
  - [ ] kill
  - [ ] echo
- ~~[ ] can write a basic bash script~~
- ~~[ ] can start and stop processes via `brew services`~~
- ~~[ ] can explain the file permission printed by 'ls -la'~~
- ~~[ ] can change the permissions of a file~~


*Terminal*

- [ ] can turn on infinite scroll back buffer on iTerm 2
- [ ] can go back and forward one word with a key stroke
- [ ] can disable the "copy on text select" feature
- ~~[ ] can split screen~~

*Git*

- [ ] can create a new git repository
- [ ] can push a new git repository up to Github
- [ ] can clone an existing git repository
- [ ] can push and pull to and from a remote git repository
- [ ] can commit using `git add --patch`
- ~~[ ] can undo the previous commit using `git reset`~~
- [ ] can tell git to ignore files with `.gitignore`
- [ ] can create a Github pull request
- ~~[ ] can rebase a branch~~
- ~~[ ] can cherry-pick a commit~~
- ~~[ ] can use `git rebase --interactive`~~


*Editor*

- [ ] can open files in your preferred editor using a shell command
- [ ] can duplicate the current line with one key command
- [ ] can enable "save of blur" or "autosave"

*Homebrew*

- [ ] can install `git` via homebrew
- [ ] can install `node` via homebrew
- [ ] can install `sublime-text` via `brew cask`
- [ ] can install `atom` via `brew cask`

*Utilities*

- [ ] can paste from a clipboard history buffer (like jumpcut)


#### Resources

*UNIX / Shell*

- http://jvns.ca/blog/2016/10/04/exec-will-eat-your-brain/
- https://ss64.com/osx/syntax-bashkeyboard.html
- https://www.digitalocean.com/community/tutorials/an-introduction-to-linux-basics
- http://linuxcommand.org/lc3_learning_the_shell.php
- https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal
- The [Linux: Back to Basics](https://www.youtube.com/playlist?annotation_id=annotation_311646059&feature=iv&list=PLII6oL6B7q78PKy6_R6JTkkYjVXZBZcVq&src_vid=2FiQSLdnBqA) video series
- https://www.udacity.com/course/linux-command-line-basics--ud595


*Terminal*

- https://www.iterm2.com/
- `brew cask install iterm2`
- [iTerm2 Features](https://www.youtube.com/watch?v=KJEN-GFSkrU)
- [iTerm2 Tricks](https://www.youtube.com/watch?v=SoTDXeyz3AE)


*Git*

- `brew install git`
- https://try.github.io/levels/1/challenges/1
- https://git-scm.com/docs/gittutorial
- https://www.udacity.com/course/how-to-use-git-and-github--ud775
- https://github.com/jlord/git-it
- https://github.com/jlord/git-it-electron

*Editor*

- Sublime Text 2 suffs here
- Atom stuffs here

*Homebrew*

- https://brew.sh/

*Utilities*

- `brew cask install humpcut`



#### Goals

- [TBD: A workstation setup guide]
- [TBD: Some git basics tutorials]





### Basic Programming in JavaScript and Node

#### Skills

*Node:*

- [ ] can install node via homebrew
- [ ] can create and execute a JavaScript file using node
- [ ] can exports an object from one file and import it from another file
- [ ] can create a new node package using `npm init`
- [ ] can install and save dependencies to a node package
- [ ] can add `./node_modules/.bin` to your `$PATH`
- [ ] can write to STDOUT using `console.log`
- [ ] can access environment variables
- [ ] can access command line arguments `process.argv`
- [ ] can run a script with environment variables specified in the terminal command
- [ ] can read and write the contents of a file
- [ ] can append to a file

*Programming*

- [ ] can explain what an operator is and can list several common ones
- [ ] can explain the concept of operator precedence and can show how to be explicit about it
- [ ] can use the following objects:
  - [ ] Array
  - [ ] Hash / Map
  - [ ] Function
- [ ] can explain what "flow control" means
- [ ] can use the following tools to control the flow of a program:
  - [ ] if / else
  - [ ] return
  - [ ] while / for
- [ ] can articulate the difference between explicit and implicit returns
- [ ] can explain how a function can be passed into another function and can list at least 2 examples of when you might do that
- [ ] can explain what each of these enumerable methods do
  - [ ] each
  - [ ] map
  - [ ] filter
  - [ ] find
- [ ] can explain a callback and give 1 example of when we would need one
- [ ] can read an error backtrace and identify the line of their code that led to that error

*JavaScript:*

- [ ] can explain how closure scope inheritance in JavaScript works
- [ ] can use `console.log` to debug errors in a program
- [ ] can implement a `Set` Object using a JavaScript Constructor
- [ ] can explain the `this` keyword
- [ ] can articulate the difference between `==` and `===` in JavaScript
- [ ] can articulate the difference between `function open(){}` vs `open = function(){}`
- [ ] can articulate the relationship between a function and its `.prototype` object
- [ ] can write simple tests using `assert`
- [ ] can explain the JavaScript event loop
- ~~[ ] can use `setTimeout` to delay code~~
- ~~[ ] can create a new `Promise`~~
- ~~[ ] can create a Linked List~~

#### Resources:

*Node:*

- https://github.com/workshopper/learnyounode


*Programming*:

- [example: read chapter N of book "…"]

*JavaScript:*

- https://github.com/workshopper/javascripting
- https://github.com/jesstelford/scope-chains-closures


#### Goals

- IDEA: goal to learn testing:
  - learn about code objects and enumerable functions
  - then write a simple `assert` function yourself
  - then use it to write tests for those native objects


### Basic HTML and CSS

In this skill group were focused on generating static HTML & CSS. No JavaScript. No animations. No interactions.
If you get these skills down you should have an extremely firm foundation when learn how to make more complex, responsive and interactive components.

#### Skills

- [ ] can explain how HTML is a tree
- [ ] can explain the box model
- [ ] can explain the difference between inline, block and inline-block
- [ ] can explain when to use an id vs. a class name
- [ ] can properly use these node types
  - [ ] html
  - [ ] head
  - [ ] body
  - [ ] script
  - [ ] link
  - [ ] title
  - [ ] div
  - [ ] span
  - [ ] a
  - [ ] button
  - [ ] p
  - [ ] ul
  - [ ] li
  - [ ] table
  - [ ] tbody
  - [ ] tr
  - [ ] th
  - [ ] td
- [ ] can read, understand and author these kinds of CSS selectors
  - [ ] `.signup-form`
  - [ ] `.signup-form .first-name-field`
  - [ ] `table.stripped-table`
  - [ ] `a.button:hover`
  - [ ] `.IconButton > button`
  - [ ] `table > tr:nth-child(odd)`
- [ ] is familiar with and can use these pseudo selectors
  - [ ] :hover
  - [ ] :focus
  - [ ] :active
  - [ ] :visited
  - [ ] :disabled
  - [ ] :checked
  - [ ] :nth-child
- [ ] is familiar with and can use these CSS properties
  - [ ] border
  - [ ] margin
  - [ ] padding
  - [ ] height
  - [ ] width
  - [ ] background
  - [ ] display
  - [ ] color
  - [ ] font-size
  - [ ] font-weight
  - [ ] flex-direction
  - [ ] flex-wrap
  - [ ] justify-content
  - [ ] align-items
  - [ ] align-content
  - [ ] flex-grow
- [ ] is familiar with the concept of reset stylesheet and why to use one
- [ ] can include assets like stylesheets, javascripts and images
- [ ] can track asset loading requests in the network tab of Chrome Developer Tools
- [ ] can select an element in the DOM tree in Chrome Developer Tools
- [ ] can give an example of when it's appropriate to apply styles to a node like `button { … }` as opposed to using a unique classname `.button { … }`
- [ ] should be able to implement a simple modal
- [ ] should be able to implement a fixed navbar
- [ ] should be able to implement a "sticky footer"
- [ ] should be able to implement a button that depresses when clicked
- [ ] should be able to implement a dropdown menu
- [ ] should be able to use a web font
- [ ] should be able to use an Icon font
- [ ] should be able to implement a two column layout

#### Resources

- http://devdocs.io/css
- http://devdocs.io/html
- http://caniuse.com
- http://html5please.com/
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- https://www.w3schools.com/html/html_layout.asp

#### Goals

-  something like [36](https://github.com/GuildCrafts/web-development-js/issues/36) but without the JS
-  build clones of these web sites / web pages
- [ a goal should contain making serveral of the most common site layouts ]
- [ a goal should contain making a modal ]
-  https://github.com/GuildCrafts/web-development-js/issues/145


### Basic JavaScript in the Browser

#### Skills

- [ ] can explain how and why to use the DOM Ready event
- [ ] can query for all the DOM Nodes matching a given css selector
- [ ] can explain event bubbling
- [ ] can explain event delegation
- [ ] can replace the text content of a DOM node
- [ ] can replace the HTML content of a DOM node
- [ ] can create a DOM Node and inject it into the DOM at a given position
- [ ] can bind event handlers to a DOM node
  - [ ] click
  - [ ] hover
  - [ ] focus
  - [ ] blur
  - [ ] keyDown / keyUp
- [ ] can prevent the default behavior of a DOM event
- [ ] can create a link to a specific scroll position on the page using an anchor tag
- [ ] can use `debugger` to pause their code in the Chrome Developer Tools Debugger
- [ ] can iterate over a collection of DOM nodes
- ~~[ ] can dynamically inject a script tag into the DOM~~
- ~~[ ] can trigger an action when clicking outside of element~~
- ~~[ ] can make an AJAX / XHR call~~


#### Goals

- [we should have a bunch of good goals here]
- [ a goal should include implementing horizontal tabs ]
  - https://www.w3schools.com/howto/howto_js_tabs.asp
- [ a goal should include a left sidebar slide out ]
- [ a goal should include re-implementing simple input-output exercises that were done in "Basic Programming" again using forms ]
- goal idea:
  - series of simple interfaces to build with escalating complexity
    - 1) two fields that add and show a total
    - 2)


### Basic Web App Architecture

#### Skills

- [ ] can explain the requests & response life cycle
- [ ] can articulate the difference between a standard HTTP request and an AJAX / XHR request
- [ ] can articulate the difference between "front end" and "back end"
- [ ] can draw a diagram showing how data/messages flow from the browser, to the server and back again with detail about the contents sent within those messages
- [ ] can list the most commonly used HTTP verbs
- [ ] can list the most commonly used HTTP headers
- [ ] can articulate the difference between a `get` and a `post` request
- [ ] can explain what a port is
- [ ] can roughly explain how a web browser talks to a web server
- [ ] can explain how Authentication via HTTP Cookies works
- [ ] can setup an express app with signup, login and logout functionality
- [ ] can render `HTML` from a `pug` template in response to a request
- [ ] can render `JSON` in response to a request
- ~~[ ] webpack~~
- ~~[ ] sockets~~

*Resources*

- [How to npm](https://github.com/workshopper/how-to-npm)


### Basic Relational Data Storage

#### Skills

- [ ] can install postgres via homebrew
- [ ] can start and stop postgres via `brew services`
- [ ] can create a delete psotgres databases
- [ ] can use the `psql` REPL to connect to postgres at a specific database
- [ ] can `describe` a database and a table in the `psql` console

- [ ] can create a table with multiple columns of different types
- [ ] can design a schema with two tables that have a 1-1 relationship
- [ ] can design a schema with two tables that have a 1-N relationship
- [ ] can design a schema with two tables that have an N-N relationship
- [ ] can write select queries that use the following features:
  - [ ] *
  - [ ] FROM
  - [ ] WHERE
- [ ] can write a 1-1 relationship query
- [ ] can write a 1-N relationship query
- [ ] can write a N-N relationship query
- [ ] can explain "normalization" and "demoralization"
- [ ] can design a schema for a given data set and list of questions that need answering


#### Goals

- [ ] TBD


### Intermediate Programming in JavaScript

Here we dive deeper into the asynchronous nature of JavaScript

- [ ] Promises

*Resources:*

- https://github.com/stevekane/promise-it-wont-hurt
- https://github.com/bulkan/async-you


### Intermediate Web App Architecture

#### Skills

using a database
using the RESTful routing pattern

- [ ] can
- [ ] can implement the routes for a RESETful resource
- [ ] can implement the routes for a nested RESETful resource






## Contribution

Leave your trace! Please leave this trail better than when you found it. Please consider contributing:

- links to resources that helped you
- additional skills you learned along your way


----------

## Resource finder:

- https://www.udacity.com/
- http://codecademy.com
- https://www.khanacademy.org/
- https://www.freecodecamp.com/
- https://frontendmasters.com/

------


## Homeless Skills


**Node**

- ~~[ ] you can install the `serve` npm package globally~~
- ~~[ ] can create a new node package using `npm init`~~
- ~~[ ] can define what `npm start` does by modifying `package.json`~~
- ~~[ ] can define what `npm start` does by modifying `package.json`~~
- ~~[ ] can install node packages as a dependency~~
- ~~[ ] can install node packages as a development dependency~~
