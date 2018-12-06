import React from 'react'
import {randomeQuote} from '../quotes'

/**
 * COMPONENT
 */
export const NoSearchRes = () => {
  const quote = randomeQuote()
  return (
    <div>
      <h3>"{quote.quote}"</h3>
      <a href={quote.link} target="_blank" rel="noreferrer noopener">
        <p>-{quote.author}</p>
      </a>
    </div>
  )
}

export default NoSearchRes
