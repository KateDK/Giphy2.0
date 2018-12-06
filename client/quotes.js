const arrayOfQuotes = [
  {
    quote:
      'Most discoveries even today are a combination of serendipity and of searching.',
    author: 'Siddhartha Mukherjee',
    link: 'https://en.wikipedia.org/wiki/Siddhartha_Mukherjee'
  },
  {
    quote: `It has been said that man is a rational animal. All my life I have been searching for evidence which could support this.`,
    author: 'Bertrand Russell',
    link: 'https://en.wikipedia.org/wiki/Bertrand_Russell'
  },
  {
    quote:
      'No idea is so outlandish that it should not be considered with a searching but at the same time a steady eye.',
    author: 'Winston Churchill',
    link: 'https://en.wikipedia.org/wiki/Winston_Churchill'
  },
  {
    quote: `My whole life I've been a seeker, searching for something.`,
    author: 'Mike White',
    link: 'https://en.wikipedia.org/wiki/Mike_White_(filmmaker)'
  },
  {
    quote: `There's a victory in letting go of your expectations.`,
    author: 'Mike White',
    link: 'https://en.wikipedia.org/wiki/Mike_White_(filmmaker)'
  },
  {
    quote: `I'm not searching for ways to tell the District of Columbia what to do.`,
    author: 'Trey Gowdy',
    link: 'https://en.wikipedia.org/wiki/Trey_Gowdy'
  },
  {
    quote: 'The fascination for me is searching the unknown for a mystery.',
    author: 'Clive Cussler',
    link: 'https://en.wikipedia.org/wiki/Clive_Cussler'
  },
  {
    quote: 'People hate searching.',
    author: 'Sam Altman',
    link: 'https://en.wikipedia.org/wiki/Sam_Altman'
  },
  {
    quote:
      'Always remember that you are absolutely unique. Just like everyone else.',
    author: 'Margaret Mead',
    link: 'https://en.wikipedia.org/wiki/Margaret_Mead'
  },
  {
    quote:
      'To succeed in life, you need three things: a wishbone, a backbone and a funny bone.',
    author: 'Reba McEntire',
    link: 'https://en.wikipedia.org/wiki/Reba_McEntire'
  },
  {
    quote:
      'Take chances, make mistakes. That’s how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.',
    author: 'Mary Tyler Moore',
    link: 'https://en.wikipedia.org/wiki/Mary_Tyler_Moore'
  },
  {
    quote: 'The cure for boredom is curiosity. There is no cure for curiosity.',
    author: 'Dorothy Parker',
    link: 'https://en.wikipedia.org/wiki/Dorothy_Parker'
  }
]

export const randomeQuote = () =>
  arrayOfQuotes[Math.floor(Math.random() * arrayOfQuotes.length)]
