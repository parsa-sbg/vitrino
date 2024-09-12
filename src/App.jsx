import './App.css'
import Routes from './routes'
import LocationsProvider from './contexts/locationsContext'
import CategoryProvider from './contexts/categoryContext'
import AuthContextProvider from './contexts/authContext'
import PostsProvider from './contexts/postsContext'


function App() {

  return (
    <div className='app dark dark:bg-[#242424] transition-colors duration-300 dark:text-[#ffffff8f] text-gray-500'>
      <LocationsProvider>
        <AuthContextProvider>
          <CategoryProvider>
            <PostsProvider>
              <Routes />
            </PostsProvider>
          </CategoryProvider>
        </AuthContextProvider>
      </LocationsProvider>
    </div>
  )
}

export default App