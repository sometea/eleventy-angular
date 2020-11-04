# AngularEleventyBlog

This is an experiment in combining the [11ty static site generator](https://11ty.dev) with a prerendered [angular](https://angular.io)
application to create some kind of blog. The same result could have been achieved using [Scully](https://scully.io), but scully
seems to do some additional behind the scenes magic which I wanted to avoid.

For the purpose of this blog, this is somewhat overengineered. The reason things are done in this way is that I wanted to
experiment in putting together my own angular-based static site generator (using 11ty additionally) to see how things work.

## Components

11ty takes care of assembling the markdown files under templates/content and creating json files out of them. These are subsequently
consumed by the angular application to render the actual blog. To prerender a static version of the site that can be deployed,
angular universal and the built-in prerender option is used.

## Note

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.
