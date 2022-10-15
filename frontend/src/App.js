import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/notes')
         .then(response => {
          console.log(response.data)
          setNotes(response.data)
        })
  }, [])

  return (
    <div>
      <p>Hello world</p>
      {notes ? notes.map(note => <p>{note}</p>) : ""}
    </div>
  )
}

export default App
