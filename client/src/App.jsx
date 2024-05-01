import Header from './components/Header'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <div >
      <Header />
      <div className='px-8'>
        <AppRoutes />
      </div>
    </div>
  )
}

export default App
