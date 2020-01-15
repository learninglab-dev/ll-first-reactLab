# Walkthrough

Welcome to the async version of reactLab #1!

This walkthrough is intended to give you most of the content, both step by step instructions and conceptual knowledge, of our first live React tutorial. If you want to skip all the conceptual stuff and just build the app, all the actual todos are marked with this :collision: emoji.

### Contents
[What You'll Make](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#what-youll-make)\
[How to Navigate](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#how-to-navigate)\
[Index.js: The Entry Point](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#the-entry-point)\
[JSX... What?](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#jsx-what)\
[First Component](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#first-component)\
[Composition](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#composition)\
[Props](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#props)\
[Thinking in React](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#thinking-in-react)\
[useState()](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#usestate)\
[Finish the Switch](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#finish-the-switch)\
[Map over Data](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#map-over-data)\
[A Challenge](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/walkthrough.md#a-challenge)

To start, clone this repo (On an LL machine open Terminal; then enter the commands `cd development` and `git clone https://github.com/learninglab-dev/ll-first-reactLab.git`) and open the code in your favorite editor. (Again, on an LL machine, `cd ll-first-reactLab` and `atom .`)

### What You'll Make
Before we take a look at the code, let's first take a look at what we'll make. Over in Terminal, enter `npm i` to install dependencies and then when that finishes `npm start`. You should see a message that says "Starting the development server..." and React should automatically open `localhost:3000` in your browser. (Btw, if you've never started a React app in development mode, now you know how!)

If you check out the app, you'll see a grid of images. As of this writing, they feature four-legged friends, but hopefully by the time the semester starts, you'll see some familiar faces. Clicking on the images will toggle them to gifs and back again.

Why is this a cool first React project? Well, for one thing, who doesn't want a people landing page with headshots and gifs?? More seriously, as a tool React is most useful for pages that change frequently in response to user interactions or new data. React components are also modular and resusable, so you can write code once, but use your page element many times. We'll get into both of those benefits more as reactLab gets going, but as you can see, the image-gif grid checks both boxes: what the user sees changes as they interact with the page; and we have a component, the image-gif button, that we're reusing multiple times.

### How to Navigate
Okay, let's get into the code! If you jump over to Atom (or your other text editor), you'll see the app's structure. At the top level, there are two folders: `public` and `src`. Your `node_modules` and `package.json` are there too, but we're not going to edit those.

Start by opening up the `public` folder. The essential file in here is `index.html`. If you open it up, you'll see that it's pretty, well, uninteresting. The html file is essentially a stem. This is because React is going to generate our html for us. When you build a React app, you write javascript that describes the DOM, that is, what the page should look like, for every possible state of your app. React uses a tool called Webpack to package all your scripts together and send them to the browser in a bundle. When a user interacts with your app, React runs your code and renders the appropriate html. The client never needs fetch html from your server after the initial download.

Back to our file structure: Now open `src`. All the code we'll write needs to be in this folder. Otherwise, Webpack won't see it to package it into our app. This app looks a little funny because I've made two copies of it for you. In the folder `01_example` is the completed code; the code you're currently running. In the folder, `02_starter` is a template; this is where you'll write your code.

### Index.js: The Entry Point
Every react app has an entry point. It's typically in a file called `Index.js`, though you can name this file whatever you like. This file is the place where we connect React to the output API of our app. In this case, since we're making an app for the web, this is where React connects to the browser's DOM.

To see how, open up `index.js`. Because it's so short, let's walk through it line by line:

```js
import React from 'react'
import ReactDOM from 'react-dom'
```
Here we're simply importing React itself. That first line needs to be at the top of every javascript file you write that's a react component, so you'll write it over and over. It's the core React library. ReactDOM, on the other hand, we import only once here in `index.js`. This library basically tells React to output html and not native elements or something else. We're creating an app to be viewed in a browser.

```js
import App from './01_example/App'
```
Next, we're importing our own code. (By the way, `import` is pretty much the es6 version of `require`. I'll leave it to you to google the differences if you want.) In react, components are organized in a tree. There are parent components and children. Here, as in most react apps you'll build, `App` is the top of our tree. It's the top-level parent.

```js
ReactDOM.render(<App />, document.getElementById('root'))
```
Finally, we call the `ReactDOM.render()` function. This function tells react to go to work. React will start from the component we feed it, in this case App, and render that component and all of its children into html. It will "insert" this generated html into the DOM element we've identified, which is `root`. If you remember from our quick look at `index.html`, root is just a solo `<div>` inside `<body>`, so the html React generates will become the body of our page.

:collision: We're finally ready to write some code. To get started, look back at the top of `Index.js`. You'll see some `import` statements. One is commented out. Uncomment it and then comment out the statement that says `import App from './01_example/App'`. This switches from running the example app to the starter pack. If you check back in your browser, you should now see a blank page. (If you've stopped your server in the meanwhile, head back over to Terminal and hit `npm start` again to get the blank page.)

### JSX... What?
One thing you'll notice when working with a react app is that it automatically updates what you see in the browser every time you save your code. So let's do it! Open the folder `02_starter` and then the file `App.js`.

As we said, `App` is our the top-level component. We'll get to what's going on in this file in a bit, but first, let's make a change so we can see a change in the browser. Update the `return` statement so it looks like this. You can put any text you like; "hello world!" is just tradition:

```js
return (
  <Layout>
    <h2>hello world!</h2>
  </Layout>
)
```
If you check over in your browser, you should see your message. Okay, so that wasn't very exciting, but you did just write your first (assuming this is your first react tutorial) bit of JSX. That's cool! But, wait... it looked a whole lot like html. Exactly. JSX is an extension of javascript that allows you to make use of your existing html knowledge. The majority of the time, html is your friend in react. If you want to insert a new div, go ahead and pop in a `<div>` tag.

There are some differences, however. For example, all attributes you put inside an opening tag are camelCased, e.g. `onClick` in JSX rather than `onclick` in html. In general, I'd recommend that you try the html you know; if the code doesn't work as expected, that's a good moment to google jsx-html differences.

Just to be clear, JSX is NOT html. We could have used [just javascript](https://reactjs.org/docs/react-without-jsx.html) and instead written:
```js
React.createElement('h2', null, 'hello world!')
```
This is, afterall, what our JSX gets compiled to before react generates the actual html for our app.

### First Component
Okay, we're finally ready to write our first component. Let's jump over to the file `Img.js`. As we said awhile back, every file that contains a react component begins by importing react, so add this first line to your file:
```js
import React from 'react'
```
Now we need to create our component. But what's a component? It's just a function, a function that returns JSX (or a child component(s) which somewhere down the tree return JSX) rather than some other type of value. That is, a component is a function that returns an element of our DOM, or technically a description of it.

So we'll start by writing a function:
```js
export default function Img() {

}
```
Two quick things to note here: (1) The function declaration is preceded by the `export` keyword. This is the es6 version of `module.exports`. (2) The function/component name is capitalized. This is important. React will only treat a function as a react component if the name is capitalized in the declaration.

Next we said that components are functions that return JSX. So, let's do that Add a return statement to `Img()` as follows:
```js
export default function Img() {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src='[YOUR IMAGE URL]' alt='my img' width='300px' />
    </div>
  )
}
```
Be sure to add in a real image url or you won't see anything. Save and hop over to your browser. But wait! Nothing's changed...

### Composition
That's because we haven't used our image component anywhere. Remember, in `Index.js` we're rendering `App`, but if you look back at the code in `App.js`, it's clear that `App` doesn't know anything about `Img`.

A central react principle is the idea of composition. That is, we build more complex UI by combining together individual components rather than sharing code between them. So, we're going to call `Img` within `App`. Start by importing it in `App.js` like so:
```js
import React from 'react'
import Layout from './Layout'
import Img from './Img'
import imgSources from './data'

```
Next we'll render it by adding it to our JSX. The complete `App.js` file should now look like this:
```js
import React from 'react'
import Layout from './Layout'
import Img from './Img'
import imgSources from './data'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  return (
    <Layout>
      <Img />
    </Layout>
  )
}
```
Now, if you flip over to your browser, you should see your image. Great!

Just to get a better sense of how composition works, let's drop a few more copies of `Img` into `App`:
```js
return (
  <Layout>
    <Img />
    <Img />
    <Img />
  </Layout>
)
```
Now you should see a row of images in the browser. By using a modular component and composition, we were able to render multiple elements on our page without rewriting any code. Nice. Note that we're also using composition with `<Layout />` here too. It's a component I've written for you that lays your images out in a grid. It's code is over in `Layout.js` if you want to look at it. But, of course, composition isn't much good if we can only show multiple copies of the same image. We need to be able to customize each instance of our component. Enter `props`.

### Props
`props`, short for properties, are the data we pass to a component when we render it. So, if we wanted our images to be different sizes, for example, we could pass a `width` prop, like so:
```js
return (
  <Layout>
    <Img width='300px'/>
    <Img width='200px'/>
    <Img width='500px'/>
  </Layout>
)
```
Some things to note here: First, I've given my prop a name, 'width'. This is how we'll access the value over in `Img`. Every prop needs a name. Second, I've added the `width` prop to every instance of `Img`. Otherwise, we'll get undefined, which can lead to problems. In this case, an image without a width won't appear.

Okay, so we've passed `width` to `Img`. How do we access it? First, we have to add `props` as argument to `Img()`, like so:
```js
export default function Img(props) {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src=[YOUR IMAGE URL] alt='my img' width='300px' />
    </div>
  )
}
```
Then we can replace the hardcoded value of width with `props.width`:
```js
export default function Img(props) {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src=[YOUR IMAGE URL] alt='my img' width={props.width} />
    </div>
  )
}
```
As a quick note, notice that we've put `props.width` in curly braces `{}`. Any javascript expression inside JSX needs to be in curly braces. But then, where did `props.width` come from?

Basically, React takes the names and values of all the props we pass to a component and combines them into a single object as key-value pairs. So, the props object we passed to `Img` actually looks like this:
```js
props = {
  width: '300px'
}
```
If we had passed more props, say,`<Img width='300px' border='5px solid blue' random='unicorn'/>`, we'd get a props object like so:
```js
props = {
  width: '300px',
  border: '5px solid blue',
  random: 'unicorn'
}
```
If we don't want to call `props.[propName]` everytime, we can use object destructuring to make things neater:
```js
export default function Img(props) {
  const { width, border, random } = props
  return (
    <div style={{maxHeight: '500px'}}>
        <img src=[YOUR IMAGE URL] alt='my img' width={width} />
    </div>
  )
}
```
Or simply:
```js
export default function Img({ width, border, random }) {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src=[YOUR IMAGE URL] alt='my img' width={width} />
    </div>
  )
}
```
We've been playing with a width prop for simplicity, but the prop we actually want to vary between our images is the source url. Let's go back and finish up our grid of images. First we'll modify `App` like so:
```js
import React from 'react'
import Layout from './Layout'
import Img from './Img'
import imgSources from './data'


//the top-level component for our app. I've added some basic styling and a flexbox layout for you so your gifs make a nice grid :)
export default function App() {
  return (
    <Layout>
      <Img src=[YOUR IMAGE URL]/>
      <Img src=[YOUR OTHER IMAGE URL]/>
      <Img src=[YOUR OTHER IMAGE URL]/>
    </Layout>
  )
}
```
Then we'll pass `src` to `Img`:
```js
export default function Img({ src }) {
  return (
    <div style={{maxHeight: '500px'}}>
        <img src={src} alt='my img' width='300px' />
    </div>
  )
}
```
And now, finally, if you look over in your browser, you should see a grid of your images.

### Thinking in React
Before we go any further with writing code, it'll be useful to take a few minutes to think about what it is we're building and to structure it in terms of React components. Because we're building a React app, we need to make sure our code handles every view in our app.

So, thinking back to the example, we've got a grid of images. Then, when the user clicks on an image, that one turns into a gif. Same with the next one, etc. And when the user clicks on a gif, it swaps back into an image. This suggests that we need four things:
1. The grid
2. A component for showing images
3. A component for showing gifs
4. A switch that keeps track of which one should be shown for each slot in the grid

We already have (1). That's `<Layout />`. We also just wrote (2). Happily for us, it turns out that (3) is really the same as (2), since html treats static images and gifs as the same type of thing. We just pass <Img /> a gif url rather than image one as its `src` prop. So that leaves (4). We need to build our switch, and we need one more React tool to do it: State.

### useState()
State is just what it sounds like. It's how we track what our user should be seeing at any given moment. In the case of our app, each of the slots in our grid has two states: image showing and gif showing. The collection of all of these binary states together is the state of our app, what the user sees. To simplify things in this first tutorial, our app is such that no component needs to know the total app state. As long as each toggle "knows" what state it's in, then all the toggles will render correctly.

So how does state work? We need a variable to contain our state. If you think about what you know about how variable scopes work, you might come to the conclusion that we can't define this variable inside our components. Afterall, our components are just functions; each time a function runs the variables declared within its scope are reset. So we need something more global, something that will persist across component renders.

To create that variable, we'll use what's called a `hook`. Hooks in general are just functions that allow us to grab values from other code modules. We're "hooking" into those other modules. The hook we'll use is helpfully named `useState()`. It returns an array that contains two things: (1) our state variable, the state value and (2) a function for updating that value.

As a schematic, we're going to have something like this in our switch component. Note this won't run as is. We'll get to the final code in the next section:
```js
function Switch(props) {
  const [state, setState] = useState('image')

  if (state === 'image') {
     //set src to image url, perhaps props.image
  } else {
    //set src to gif url, perhaps props.gif
  }

  return (
    <Img src={src} onClick={setState} />
    )
}
```
We call `useState()` and it returns that array of two things. We're again using destructuring to get our values out. `state` gets the first value in the array, the state value itself. `setState` gets the second value, the update function. You'll often see state variables and their update functions named as pairs with the variable name and then set preceeding the variable name, e.g. `myStateVariable` and `setMyStateVariable`, but you can name these as you like. The value we pass to `useState`, in this case `image`, is the initial state. If you pass nothing, the state is initially undefined.

When our component runs we check the value of `state` and set `src` to the corresponding url. We'll also pass `setState` to image as a prop because we're going to need to call that function to change the state when someone clicks on the image. But that's getting a bit ahead. For now, let's open `Switch.js` and complete the code for our switch component.

### Finish the Switch
As usual, we're going to start our component by importing React:
```js
import React from 'react'
```
We also need import `useState`. It's in the core React library too:
```js
import React, { useState } from 'react'
```
Now we'll start to write our switch component and add in `useState`:
```js
export default function Switch(props){
  const { img, gif }
  const [showImg, setShowImg] = useState(true)
}
```
Here we're making our state variable a boolean. Since we need a variable with two possible values, a true-false value will be the simplest. We'll say if `showImg` is true, we'll show the image, and if it's false we'll show the gif.

The next step is to check the value of `showImg` and return the appropriate JSX. Here are two ways you might finish up `Switch`. First, you might do what's called conditional rendering and wrap your return statement in an `if-else`:
```js
export default function Switch(props) {
  const { img, gif, alt } = props
  const [showImg, setShowImg] = useState(true)
  if (showImg) {
    return <Img src={img} alt={alt} onClick={() => setShowImg(false)}/>
  } else {
    return <Img src={gif} alt={alt} onClick={() => setShowImg(true)}/>
  }
}
```
Here we check the value of `showImg` and then return `<Img/>` pre-filled with the right props and new value (true or false) for our state when the user clicks.

But we could also just make the value of src conditional like so:
```js
export default function Switch(props) {
  const { img, gif, alt } = props
  const [showImg, setShowImg] = useState(true)
  const src = showImg ? img : gif
  return <Img src={src} alt={alt} onClick={() => setShowImg(!showImg)}/>
}
```
It's a little tighter, and since we're using the boolean, it's easy to setup the `onClick` for both cases. If your new state has more options or if you're returning different components based on state, you'll want to use conditional rendering.

We're now ready to put our `Switch` to work. Jump back over to `App.js`, and we'll replace `<Img/>` with `<Switch/>` like so:
```js
import React from 'react'
import Layout from './Layout'
import Switch from './Switch'

export default function App() {
  return (
    <Layout>
      <Switch img=[YOUR IMAGE URL] gif=[YOUR GIF URL] alt=[ALT TEXT] />
    </Layout>
  )
}
```
Don't forget to swap out the imports at the top of the file.

Save and check over in your browser. Once again, nothing changed. Or if something did we went backward from the grid of images to a single image. That's because we're not actually triggering that `onClick` function anywhere. So let's go back into `Img.js` and make our image a button:
```js
import React from 'react'
import Button from './Button'

export default function Img({ src, onClick, alt }) {
  return (
    <div style={{maxHeight: '500px'}}>
      <Button onClick={onClick}>
        <img src={src} alt={alt} width='300px' />
      </Button>
    </div>
  )
}
```
`<Button>` is another prefab component like `<Layout>` where I've just given you some basic styling to make things look clean. It's code is over in `Button.js` if you want to take a look.

Now, if you save and hop over to your browser, you should have an image that toggles between the image and a gif when you click on it. Woo!

### Map Over Data
Finally, to complete our grid. We'll learn/review an array method that you'll use a lot in React-- `array.map()`. Map takes an array as input and returns a new array. This method is great for when you want to run some function on every element of an array. This method gets used in React *a lot* because very often we have an array of data and we want to return an array of corresponding jsx for viewing all of that data. A typical example is if you have a kanban-type board of todos. You might have a component `<TaskCard/>` and a data set that consists of several todos. You map over your data set and return a `<TaskCard/>` element with appropriate props for each todo in your list.

Notice that we have a similar structure here. We want to take some data, in our case an array of image-gif url pairs, and map over it to return a `<Switch/>` for each pair. So over in `App.js`, let's add the following:

First, we'll import our data from the file rather than hardcoding it:
```js
import imgSources from './data'
```
Then, we'll update `App` to map over our data:
```js
export default function App() {
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={img} gif={gif} alt={i} key={i} />
  })
  return (
    <Layout>
      {imgToGifs}
    </Layout>
  )
}
```
Just in case `.map()` isn't familiar, let's say just a bit more about what's going on here. First, map works by taking in a callback function and returning an array. So inside the parenthesis of every `.map()` we need a function with a return statement. Whatever we `return` will be the element of the new array corresponding to the item in the original array. Here we're returning an array of jsx, of Switch components. Then, since we've constructed an array of jsx, we can simply drop it into App's `return`. As usual, any js inside jsx goes in curly braces.

And that's it! If you head over to your browser, you should see your grid!

### A Challenge
Now that you've completed the tutorial, try to create a secret message that pops up when the user has a particular number of gifs showing. To do this, you'll need a state variable to track how many gifs are showing and one more hook called `useEffect()`. Effects are just functions that trigger under certain conditions. Those conditions are defined by the function's dependencies. You can read more about useEffect [here](https://reactjs.org/docs/hooks-effect.html).

So as a hint, you'll want to write a function that adds to or subtracts from your counter variable and then checks its value for the magic number. You'll want to then wrap this function in a `useEffect()` hook, so that you trigger it each time the user toggles an image. Good luck!
