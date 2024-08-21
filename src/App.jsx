import './App.css'
import Routes from './routes'
import LocationsProvider from './contexts/locationsContext'

function App() {

  return (
    <div className='app  dark:bg-[#242424] transition-colors duration-300 dark:text-[#ffffff8f] text-gray-500'>
      <LocationsProvider>
        <Routes />
      </LocationsProvider>
    </div>
  )
}

export default App