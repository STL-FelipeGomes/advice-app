import { useEffect, useState } from 'react'
import { messageContext } from '../../Context/messageContext'
import { Content } from './../Content/Content'

import './style.css'

function App() {
  const [ message, setMessage ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const getMessage = async () => {
      try {
        const request = await fetch('https://api.adviceslip.com/advice')
        const json = await request.json()
        setLoading(true)
        setMessage([json])
      } catch (e) {
        console.log('\x1b[31m<<<---ERROR--->>>\x1b[0m', e)
      }
    }

    getMessage()
  }, [])

  return (
    <div className='content'>
      {loading ? (
        <messageContext.Provider value={message}>
          <Content />
        </messageContext.Provider>
      ) : (
        <div className="not-find">
          <h1>LOADING...</h1>
        </div>
      )}
    </div>
  )
}

export default App
