
# Challenge Solution Walkthrough
​
Warning: spoilers ahead for the FirstReactLab challenge!
​
### Contents
[Creating a Counter State](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#creating-a-counter-state")\
[Counter Value Functions](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#counter-value-functions)\
[Edit Click Handler Function](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#edit-click-handler-function)\
[Creating a Message State](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#creating-a-message-state)\
[Build useEffect](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#build-useeffect)\
​
### Creating a Counter State
This challenge asks us to keep track of the number of GIFs we're displaying using a counter. To solve this task, we can put our new knowledge of state to use by creating a state variable for our counter!
​
Two key things to know for creating this state: for one, state variables don't have to have boolean values—they can be numbers, strings, functions, etc! In this case, we'll want to make our state a number that will increment as GIFs appear on the display. The second thing to know is that we'll use this counter to track the state of multiple components in our app. Remember that `App`, the top-level parent, has multiple children. Each image on our page is created with a copy of our component `Switch`. So `App` has as many children as you have switches, well plus `Layout`. And then `Switch` has it's own children as we continue down the tree. So, it'll be important to think about where we put our counter. It has to be high enough up the tree to "keep track" of all of the GIFs in your webpage.

Before you read below these lines, take a moment to think about where you might put your counter. Which component is high enough up the tree that it can "see" each of the images?

---------------------------------------------
    **Answers Below**

---------------------------------------------

We're going to put our counter in `App`. Why? Because because only `App` has access to each one of our `Switch` components and can share props with them. The instances of `Switch` can't share any information with each other directly.

To implement our counter, we're going to want to use the same `useState` syntax we used for showImg and setShowImg. In the file, `App.js`, add a new state variable:
```diff
+ import React, { useState } from 'react'
  import Layout from './Layout'
  import Switch from './Switch'
  import imgSources from './data'
  ​
  ​
  export default function App() {
+   const [count, setCount] = useState(0)
    const imgToGifs = imgSources.map((urls, i) => {
      return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} />
    })
    return (
      <Layout>
        {imgToGifs}
      </Layout>
    )
  }
```
Note that we added `useState` to the collection of things we're importing from the React library in line 1!
​
Also, note that our counter state is a number initialized at zero (`useState(0)`), which we know is how many gifs are showing when a user first loads our app--none! Next we need functions that allow us to increment and decrement this counter. We'll create these in our next step!
​
### Counter Value Functions
Now that we have a counter state that we're keeping track of, we can implement a function that will increment it as images are changed to GIFs and vice versa.
​
For this step, a key new piece of information to know is that you can pass any type of value as a prop to child components—functions included! Our `increment` and `decrement` functions will live in `App`, but in order to be called at the right time (in the click handler, i.e. when the user clicks), we have to pass our functions down to `Switch` as props.
​
Let's write the functions first! For our increment function, we want to increase our count value by 1, and for our decrement function, we want to decrease the count value by 1. To do so, we can use fat arrow function notation and `setCount`:
```diff
import React, { useState } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'
​
​
export default function App() {
  const [count, setCount] = useState(0)
+ const increment = () => {
+   setCount(count + 1)
+ }
+ const decrement = () -> {
+   setCount(count - 1)
+ }
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} />
  })
  return (
    <Layout>
      {imgToGifs}
    </Layout>
  )
}
```
This step isn't done yet, though. Now that we have `increment` and `decrement`, we need to pass them down to `Switch` as props and call them in the appropriate click handlers. Recall from the Walkthrough that, in order to pass a prop, we need to include it in the return statement that includes our `Switch` component. That's going to look like this:
```diff
const imgToGifs = imgSources.map((urls, i) => {
+ return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
})
​
```
### Edit Click Handler Function
​
Now, move over to `Switch.js`. Here we'll call `increment` and `decrement` as our `onClick` functions, so that we update our counter only when the user clicks on an image. For this challenge, it's helpful to use the conditional rendering approach for the `return`—although it's clunkier than packing the conditional into the definition of `src`, it'll help us see where exactly to call our `increment` and `decrement` functions. Before we even add the functions, let's remind ourselves what that version of `Switch` looks like:
```js
import React, { useState } from 'react'
import Img from './Img'
​
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
Now let's add a couple of minor things we know we'll need. First, let's add `increment` and `decrement` to things we're grabbing from the `props` object. Second, we'll put `setShowImg()` in curly braces within the `onClick` function. We can no longer use the abbreviated syntax when we add `increment` and `decrement` in there as well.
```diff
  import React, { useState } from 'react'
  import Img from './Img'
  ​
  export default function Switch(props) {
+   const { img, gif, alt, increment, decrement } = props
    const [showImg, setShowImg] = useState(true)
    if (showImg) {
      return <Img
                src={img}
                alt={alt}
  +             onClick={() => {
  +               setShowImg(false)
  +             }}
              />
    } else {
      return <Img
                src={gif}
                alt={alt}
+               onClick={() => {
+                 setShowImg(true)
+               }}
              />
    }
  }
```
Now we want to call our new functions after we set `showImg` to a GIF (false) or an image (true). We want to increment `count` when changing to a GIF, because that means we have one more GIF on display; and we want to decrement `count` when changing to an image, because there's then one less GIF on display. That should look like this:
```diff
  import React, { useState } from 'react'
  import Img from './Img'
  ​
  export default function Switch(props) {
+   const { img, gif, alt, increment, decrement } = props
    const [showImg, setShowImg] = useState(true)
    if (showImg) {
      return <Img
                src={img}
                alt={alt}
                onClick={() => {
                  setShowImg(false)
  +               increment()
                }}
              />
    } else {
      return <Img
                src={gif}
                alt={alt}
                onClick={() => {
                  setShowImg(true)
+                 decrement()
                }}
              />
    }
  }
```
We've done a lot here, so now would be a good time to check over in your browser to verify that everything is working. You'll want to add a `console.log()` somewhere, so you can output the value of `count` The easiest place to do this is probably just at the top inside `App`. Once you've got that log, go ahead and test your app. If all went well, and your counter is counting, it's time to tackle the secret message portion of this challenge!
​
### Adding the Message
The ultimate goal of this challenge is to have a "secret" message pop up when we reach a magic number of GIFs on display. One way to make that happen is to make our message a state variable, where we can set it as whatever string we want once the counter gets to a certain value. That's where `useEffect` will come in—but first, let's add our message state to App.js.
​
```js
export default function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }  
  //usEffect function
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
  })
​
  return (
    <Layout>
      {imgToGifs}
      <h2>{message}</h2>
    </Layout>
  )
}
```
In addition to the new const with our message state established as a string, we've also added an `<h2>` tag in our layout where the message will go once the counter has reached the magic number & our `useEffect` function changes the state of the message to whatever string we choose. Let's move on to building our `useEffect` function so that we can see the message state in action!
​
### Build useEffect
Hopefully you've read the documentation for `useEffect` by now, but as a refresher there are two parameters required by `useEffect`: a function, and an array whose changes `useEffect` is keeping track of. Our function here will be a conditional checking whether count has reached the magic number (in this case, let's do the total number of images, so that the magic number signals when all of them have been changed to GIFs: AKA, `imgSources.length`). Our array will just be count, the state that function is dependent on! Here's what that will look like:
```js
import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'
​
export default function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState("")
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }  
  useEffect(() => {
    if (count === imgSources.length) {
      setMessage("hey, you have 3 GIFs!")
    }
    else {
      setMessage("")
    }
  }, [count]
​
  )
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
  })
​
  return (
    <Layout>
      {imgToGifs}
      <h2>{message}</h2>
    </Layout>
  )
}
```
Note that we've also included `useEffect` in our list of things to be imported from the React library—without that, your app won't work!
​
Go to `localhost:3000` and test this code by changing all of the images to GIFs. When you've done that, you should be able to see the secret message! Challenge: completed!
