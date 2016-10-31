# Hugo, grunt, less kickstart template
Startup a hugo project with:
- less,
- grunt,
- uglify
- image resize,
- livereload,
- bootstrap.
- aos
- font-awesome



### 1. install the dependencies
- if you don't have it already, install [hugo](www.gohugo.io), node and npm. if you are on mac do everything with brew.
- install the project de
 ```
 npm install
 ```

### 3. Run the server
- `grunt	Builds` the site for distribution in build/dist.
- `grunt dev`	Builds the site for development in build/dev.
- `grunt edit`	Starts the local server and watches the filesystem for changes. The site can be viewed at http://127.0.0.1:8080/.

### notes:
- the main css file you should edit is placed inside site/themes/zen/static/less/styles.less
- images for the blog post that need to be resized should be placed inside a img foolder at the root of the project, the different image sizes will be generated according to the gruntfile
- svg should be placed inside site/themes/zen/static/svg they will be combined as sprites in a single file in site/themes/zen/static/symbol/svg/sprite.symbol.svg


based on [http://tjm.io/grunt-hugo/](http://tjm.io/grunt-hugo/) tutorial
