### simpleWidget: R package to test use of htmlwidgets package

[Rene Richard](http://www.redsofa.ca)

[htmlwidgets](http://www.htmlwidgets.org/) is an R package that 
help you quickly create bindings to JavaScript libraries.

This package was created to help me learn how htmlwidgets works.
Warning... I have a few weeks of R experience at this point :-) 

#### Building

* You need NodeJS and Grunt to build the artifacts
* You also need to install [devtools](https://github.com/hadley/devtools) in your R environment


To make the distributable (will be located in the ./dist directory)
```shell
grunt build
```

To install the distributable 
```shell
grunt install
```


#### Example use

```S
library(testwidget)
testwidget("")
```
