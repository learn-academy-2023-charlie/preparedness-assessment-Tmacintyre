import React, {useState} from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  const [name, setName] = useState("")
  const [modalOpen, setModalOpen] = useState(false)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleButtonClick = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleReset = () => {
    setName("")
  }
  
  return (
    <div className="entire-content">
      <h1 class="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input id="name" value={name} onChange={handleNameChange}/>
        </div>
        <div class="button-container">
        <Button onClick={handleButtonClick}>Click Me</Button>
        <Button onClick={handleReset}>Reset</Button>
        </div>
        {modalOpen && <ModalComponent name={name} closeModal={handleModalClose} />}
      </div>
    </div>
  )
}

export default App
