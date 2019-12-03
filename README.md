# LL reactLab Day 1

This repo contains the starter code for our first reactLab tutorial. We'll be building a widget that toggles between showing a still and a gif when you click on it. Then we'll use composition to create a grid of them without creating any new components.

### Contents
The `/src` directory of this repo contains four versions of the app:

1. `/starter` contains the files we'll write our code in. I've given you a basic flexbox layout and a file structure to get you started.
2. `/example` contains the final code for what we'll make.
3. `/mock-fetch-example` is a slightly more advanced example that shows how we would fetch data, in this case the urls of our images and gifs, from an external api rather than using a static data file.
4. `/single-component` is a simplified version of the project that, as the name suggests, puts all the logic in a single component. This, if I'm being honest, is how I would have done it on my first day using React, so it might be useful to work through that file and see what each line is doing. Note that this version currently only produces one img-to-gif widget. As a bonus challenge, how would you change this component to add more than one widget on a page, where each one toggles independently. NB: This is not a recommended way to do things in React; rather, this challenge might give you some insight into why we used 5 components to make one widget in our tutorial.

### Using the repo
`cd` into the directory where you cloned the repo then:
(*NB:* Start instructions vary by branch so make sure you are reading the `.md` of the branch you are on.)
`npm run starter` to launch a development server for the starter app
`npm run example` for the example
`npm run fetch` for the mock fetch version
`npm run single` for the single component version

If you edit the code webpack will automatically refresh the page with your changes. Just make sure you edit in the folder for the version of the app you are running.
