import './App.css'
import BookCreate from './components/Books/Create'
import BookIndex from './components/Books/Index'

export default function App() {
  return (
    <div className="App">
      <div style={{textAlign: 'center'}}>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo vite" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src="/react.svg" className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </div>
      <div className="card">
        <BookCreate />
        <BookIndex />
      </div>
    </div>
  )
}