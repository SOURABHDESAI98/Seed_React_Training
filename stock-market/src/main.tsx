import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store';
import { BrowserRouter } from 'react-router-dom'
import { StockProvider } from './Context.tsx/stockContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StockProvider>
          <App />
        </StockProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
