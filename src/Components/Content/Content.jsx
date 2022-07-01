import { useContext } from 'react'
import { messageContext } from '../../Context/messageContext'

import './style.css'

import patternDividerDesktop from '../../images/pattern-divider-desktop.svg'
import patternDividerMobile from '../../images/pattern-divider-mobile.svg'
import iconDice from '../../images/icon-dice.svg'

export const Content = () => {
  const message = useContext(messageContext)

  return (
    <div className='container'>
      {message.map((item) => (
        <div key={item.slip.id}>
          <header>
            <p>ADVICE</p>
            <span>#{item.slip.id}</span>
          </header>
          <main>
            <h1>"{item.slip.advice}"</h1>
          </main>
        </div>
      ))}
      <div className='images'>
        <div>
          <img
            className='patter-divider'
            src={window.innerWidth > 1156 ? patternDividerDesktop : patternDividerMobile}
            alt='Pattern divider'
          />
        </div>
          <img onClick={() => document.location.reload()}className='icon-dice' src={iconDice} alt='Icon dice' />
      </div>
    </div>
  )
}
