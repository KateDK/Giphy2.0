import React from 'react'
import {randomeQuote} from '../quotes'

/**
 * COMPONENT
 */
export const NoSearchRes = () => {
  const {quote, link, author} = randomeQuote()
  return (
    <div>
      <h3>"{quote}"</h3>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <p>-{author}</p>
      </a>
    </div>
  )
}

export default NoSearchRes
