# Dockview example

I found this [dockview](https://github.com/mathuo/dockview) project on GitHub and am interested in it. Currently, the docs for that project are quite broken. Most of the examples on codepen are 404'd. And all but one or two examples in the repository are for React or Vue. The renderer looks good. Code looks solid. But usage is cumbersome. This repository is an example in pure JS for how to use it.

I am using requirejs here. This could be converted all to esm and using imports. However, I found some issues with getting vscode typings to work for the esm variant *and* I have a vested interest in this example specifically using commonJS. As long as you understand javascript dependency management it should be easy to convert these JS examples to ESM or another project.

## Usage

- Clone the repository
- Install the depencencies `npm i`
- Start a static server (python3 -m http.server 8080) or similar

Go to the browser and view the example.
