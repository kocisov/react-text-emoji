# React Text Emoji

> Call emojis/emoticons (as image) with text in React

## Installation

```bash
# npm
$ npm install react-text-emoji

# yarn
$ yarn add react-text-emoji
```

## Usage

```js
import React from 'react'
import { render } from 'react-dom'
import { Message, createEmojisStore } from 'react-text-emoji'
// file loader
import lolEmoji from './lol.png'

createEmojisStore({
  ':smile:': '//smile-emoticon-url',
  'lol': lolEmoji,
  ...
})

render(
  <Message>Hello :smile:</Message>,
  document.getElementById('root')
)
```

## Customize

> Rendering components are customizable

```js
;<Message
  containerComponent={Container}
  emojiComponent={Emoji}
  textComponent={Text}
/>

const Container = ({ children, ...props }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
    {...props}
  >
    {children}
  </div>
)

const Text = ({ value, ...props }) => (
  <span
    style={{
      marginRight: 5,
    }}
    {...props}
  >
    {value}
  </span>
)

const Emoji = ({ value, ...props }) => (
  <img
    style={{
      width: 30,
      height: 30,
      marginRight: 5,
    }}
    src={value}
    alt=""
    {...props}
  />
)
```
