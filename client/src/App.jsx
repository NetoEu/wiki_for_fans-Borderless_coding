import axios from 'axios';
import './App.css'

const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data)
  })
}

function App() {
  return (
    <>
      <div>
        <button onClick={apiCall}>
          Make API Call
        </button>
      </div>
    </>
  )
}

export default App;
