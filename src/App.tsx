import { useState } from 'react'
import Button from './components/Button'
import OutputMessage from './components/OutputMessage'
import TextInput from './components/TextInput'
import './index.css'

function App() {
  const [text, setText] = useState("")
  const [submittedText, setSubmittedText] = useState("")

  return (
    <div className="flex flex-col items-center gap-6 m-10 p-10 text-white border">
      <div className="mb-6 text-4xl font-bold">Basic React App</div>
      <TextInput text={text} setText={setText}/>
      <Button onClick={() => setSubmittedText(text)}/>
      <OutputMessage text={submittedText}/>
    </div>
  )
}

export default App
