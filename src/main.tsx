import ReactDOM from 'react-dom/client'
import './index.css'
import { CountryComponent } from './components/countryComponent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <main className='w-full flex flex-col items-center px-5 py-4 gap-5 text-white bg-dark-blue-content rounded-sm'>
    <CountryComponent />
  </main>
)
