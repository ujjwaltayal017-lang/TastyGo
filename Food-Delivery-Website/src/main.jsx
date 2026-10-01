import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'
import { store } from './redux/Store.js'
import { Provider } from 'react-redux'; // ✅ Import Provider

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <UserContext >
      <App />
    </UserContext>
  </Provider>,
)
