# Challenge Solution Walkthrough

Warning: spoilers ahead for the FirstReactLab challenge!

### Contents
[Creating a Counter State](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#creating-a-counter-state")\
[Counter Value Functions](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#counter-value-functions)\
[Edit Click Handler Function](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#edit-click-handler-function)\
[Creating a Message State](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#creating-a-message-state)\
[Build useEffect](https://github.com/learninglab-dev/ll-first-reactLab/blob/master/challengesolution.md#build-useeffect)\

# Creating a Counter State
This challenge is asking us to keep track of the number of GIFs we're displaying using a counter. To solve this task, we can put our new knowledge of states to use by creating a state for our counter!

Two key things to know for creating this state: for one, states don't have to be boolean—they can be numbers, strings, functions, etc! In this case, we'll want to make our state a number that will increment as GIFs appear on the display. The second thing to know is that in this function, there are several levels of parent & child components: App.js is the parent, and Switch is the child under that, with Image being the child under Switch. To keep track of all of the GIFs in your webpage, you'll want to keep your counter state up in App.js, so that it can know the state of all GIFs/images being displayed.

We're going to want to use the same `useState` syntax as we used for showImg and setShowImg. In the top-level component of App.js, add a line establishing your count state:
```js
import React, { useState } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'


export default function App() {
  const [count, setCount] = useState(0)
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
Note that we added `useState` to the collection of things we're importing from the React library!

Also, note that our counter state is a number initialized at zero (`useState(0)`). This will allow us to easily increment and decrement—a function we'll create in our next step!

# Counter Value Functions
Now that we have a counter state that we're keeping track of, we can implement a function that will increment it as images are changed to GIFs and vice versa.

For this step, a key new piece of information to know is that you can pass anything as a prop to child components—functions included! Our increment & decrement functions will live in App.js, but in order to be called at the right time (during the click handler event), we have to pass it over to Switch.js as a prop.

Let's write the functions first! For our increment function, we want to increase our count value by 1, and for our decrement function we'll want to decrease the count value by 1. To do so, we can use fat arrow function notation & `setCount`:
```js
import React, { useState } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'


export default function App() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () -> {
    setCount(count - 1)
  }
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
This step isn't done yet, though. Now that we have increment & decrement functions, we have to pass them over to Switch.js as a prop and call them during the click handler. Recall from the tutorial that in order to pass a prop, we have to include it in the return statement that sets up our Switch component. That's going to look like this:
```js
const imgToGifs = imgSources.map((urls, i) => {
  return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
})

```
# Edit Click Handler Function

Then, move over to Switch.js so we can call increment & decrement during our onClick function, which is where the switch we want to keep track of is happening. For this challenge, it's best to use the conditional rendering approach to the showImg/setShowImg switch function—although it's clunkier than the src conditional approach, it'll help us see where exactly we want to call our increment and decrement functions. Before we even add the functions, let's remind ourselves what that looks like:
```js
import React, { useState } from 'react'
import Img from './Img'

export default function Switch(props) {
  const { img, gif, alt, increment, decrement } = props
  const [showImg, setShowImg] = useState(true)
  if (showImg) {
    return (
      <Img src={img} alt={alt} onClick={() => {
          setShowImg(false)
          }
        }/>
    )
  } else {
    return (
        <Img src={gif} alt={alt} onClick={() => {
          setShowImg(true)
        }
        }/>
    )
  }
}
```
Note a couple of things here. For one, we've added `increment` and `decrement` to our `props` const. For another, we've put `setShowImg()` in curly braces within the onClick function. This is going to give us space to add the increment & decrement functions! We want to call those functions after we set the state of `showImg` to a GIF (false) or an image (true). We want to increment count when it's being changed to a GIF, because that means we have one more GIF on display; and we want to decrement count when it's being changed to an image, because there's then one less GIF on display. That should look like this:
```js
import React, { useState } from 'react'
import Img from './Img'

export default function Switch(props) {
  const { img, gif, alt, increment, decrement } = props
  const [showImg, setShowImg] = useState(true)
  if (showImg) {
    return (
      <Img src={img} alt={alt} onClick={() => {
          setShowImg(false)
          increment()
          }
        }/>
    )
  } else {
    return (
        <Img src={gif} alt={alt} onClick={() => {
          setShowImg(true)
          decrement()
        }
        }/>
    )
  }
}

```

Now that we've got our counter incrementing, we can go back to App.js to start adding `useEffect` and tackle the secret message portion of this challenge!

# Creating a Message State
The ultimate end goal of this challenge is to have a secret message pop up when we reach a magic number of GIFs on display. In order to make that happen, we want to create a state for the message, where we can set it as whatever string we want once the counter gets to a certain value. That's where `useEffect` will come in—but first, let's add our message state to App.js.

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

  return (
    <Layout>
      {imgToGifs}
      <h2>{message}</h2>
    </Layout>
  )
}
```
In addition to the new const with our message state established as a string, we've also added an `<h2>` tag in our layout where the message will go once the counter has reached the magic number & our `useEffect` function changes the state of the message to whatever string we choose. Let's move on to building our `useEffect` function so that we can see the message state in action!

# Build useEffect
Hopefully you've read the documentation for `useEffect` by now, but as a refresher there are two parameters required by `useEffect`: a function, and an array whose changes `useEffect` is keeping track of. Our function here will be a conditional checking whether count has reached the magic number (in this case, let's do the total number of images, so that the magic number signals when all of them have been changed to GIFs: AKA, `imgSources.length`). Our array will just be count, the state that function is dependent on! Here's what that will look like:
```js
import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Switch from './Switch'
import imgSources from './data'

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

  )
  const imgToGifs = imgSources.map((urls, i) => {
    return <Switch img={urls.img} gif={urls.gif} alt={i} key={i} increment={increment} decrement={decrement} />
  })

  return (
    <Layout>
      {imgToGifs}
      <h2>{message}</h2>
    </Layout>
  )
}
```
Note that we've also included `useEffect` in our list of things to be imported from the React library—without that, your app won't work!

Go to `localhost:3000` and test this code by changing all of the images to GIFs. When you've done that, you should be able to see the secret message! Challenge: completed!
