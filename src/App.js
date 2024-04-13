import {useState} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [state, setState] = useState(languageGreetingsList[0])
  const [activeTab1, setActiveTab1] = useState(false)
  const [activeTab2, setActiveTab2] = useState(false)
  const [activeTab3, setActiveTab3] = useState(false)

  const onClickEnglish = () => {
    setState(languageGreetingsList[0])
    setActiveTab1(true)
    setActiveTab2(false)
    setActiveTab3(false)
  }

  const onClickTamil = () => {
    setState(languageGreetingsList[1])
    setActiveTab2(true)
    setActiveTab1(false)
    setActiveTab3(false)
  }

  const onClickTelugu = () => {
    setState(languageGreetingsList[2])
    setActiveTab3(true)
    setActiveTab2(false)
    setActiveTab1(false)
  }

  return (
    <div className="main-container">
      <h1 className="main-heading">Multilingual Language</h1>
      <div className="btn-container">
        <button
          className={`btn ${activeTab1 ? 'active-btn' : ''}`}
          type="button"
          onClick={onClickEnglish}
        >
          {languageGreetingsList[0].buttonText}
        </button>
        <button
          className={`btn ${activeTab2 ? 'active-btn' : ''}`}
          type="button"
          onClick={onClickTamil}
        >
          {languageGreetingsList[1].buttonText}
        </button>
        <button
          className={`btn ${activeTab3 ? 'active-btn' : ''}`}
          type="button"
          onClick={onClickTelugu}
        >
          {languageGreetingsList[2].buttonText}
        </button>
      </div>
      <div>
        <img
          src={state.imageUrl}
          alt={state.imageAltText}
          className="displayImg"
        />
      </div>
    </div>
  )
}

export default App
