import {useState} from 'react'
import TabItem from './components/TabItem/index'
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
  const [state, setState] = useState(languageGreetingsList[0].id)

  const ChangeTab = id => {
    setState(id)
  }
  const currentLanguage = languageGreetingsList.find(each => each.id === state)
  const {imageUrl, imageAltText} = currentLanguage

  return (
    <div className="main-container">
      <h1 className="main-heading">Multilingual Language</h1>
      <ul className="btn-container">
        {languageGreetingsList.map(each => (
          <TabItem
            key={each.id}
            each={each}
            ChangeTab={ChangeTab}
            isActive={state === each.id}
          />
        ))}
      </ul>

      <div>
        <img src={imageUrl} alt={imageAltText} className="displayImg" />
      </div>
    </div>
  )
}

export default App
