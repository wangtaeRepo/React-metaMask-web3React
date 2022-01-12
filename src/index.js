import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Web3Provider } from '@ethersproject/providers'
import { Web3ReactProvider } from '@web3-react/core'

import reportWebVitals from './reportWebVitals'
function getLibrary(provider) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000 //
  return library
}
ReactDOM.render(
  <React.StrictMode>
    {/* Component 내에서 사용할 수 있도록 Provider 감싸기 */}
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
