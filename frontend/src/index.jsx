console.log('Index.jsx Entry');
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.jsx'

try {
  console.log('Attempting to mount React app');
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  console.log('React app render called');
} catch (error) {
  console.error('Failed to mount React app:', error);
}
