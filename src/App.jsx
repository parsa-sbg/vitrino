import './App.css'
import Routes from './routes'
import LocationsProvider from './contexts/locationsContext'
import CategoryProvider from './contexts/categoryContext'


function App() {

  return (
    <div className='app dark dark:bg-[#242424] transition-colors duration-300 dark:text-[#ffffff8f] text-gray-500'>
      <LocationsProvider>
        <CategoryProvider>
          <Routes />
        </CategoryProvider>
      </LocationsProvider>
    </div>
  )
}

export default App