import { useState } from 'react'
import Button from './components/Button'
import OutputMessage from './components/OutputMessage'
import TextInput from './components/TextInput'

function App() {
  const [text, setText] = useState("")
  const [submittedText, setSubmittedText] = useState("")

  return (
    <div>
      <div>Basic React App</div>
      <TextInput text={text} setText={setText}/>
      <Button onClick={() => setSubmittedText(text)}/>
      <OutputMessage text={submittedText}/>
    </div>
  )
}

export default App
