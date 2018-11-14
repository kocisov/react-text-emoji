import React from 'react'

let emojis = {}

export function createEmojisStore(_emojis = {}) {
  if (typeof _emojis !== 'object') {
    throw Error(`createEmojisStore expects Object of Emojis!`)
  }

  if (emojis === _emojis) {
    return false
  }

  emojis = _emojis

  return emojis
}

export function parseMessage(message) {
  let key = -1
  const split = message.split(/\s+/)

  return split.map((item) => {
    key++

    if (emojis[item]) {
      return {
        key,
        type: 'EMOJI',
        value: emojis[item],
      }
    }

    return {
      key,
      type: 'TEXT',
      value: item,
    }
  })
}

export const defaultComponents = {
  container: ({ children, ...props }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
      {...props}
    >
      {children}
    </div>
  ),
  text: ({ value, ...props }) => (
    <span
      style={{
        marginRight: 5,
      }}
      {...props}
    >
      {value}
    </span>
  ),
  emoji: ({ value, ...props }) => (
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
  ),
}

export function Message({
  children,
  containerComponent: ContainerComponent = defaultComponents.container,
  emojiComponent: EmojiComponent = defaultComponents.emoji,
  textComponent: TextComponent = defaultComponents.text,
  ...props
}) {
  const parsed = parseMessage(children)

  const handled = parsed.map(
    (item) =>
      item.type === 'TEXT' ? (
        <TextComponent key={item.key} value={item.value} />
      ) : (
        <EmojiComponent key={item.key} url={item.value} value={item.value} />
      ),
  )

  return <ContainerComponent {...props}>{handled}</ContainerComponent>
}
