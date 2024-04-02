import './App.css'
import { ThemeProvider } from './Context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { useState , useEffect} from "react"

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark") 
  }

  useEffect(() => {
    const doc = document.querySelector('html').classList;
    doc.remove("light" , "dark")
    doc.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
