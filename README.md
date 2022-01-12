# React내에서 Metamask 연결하기

## 구현 조건
연결하기 버튼을 통해 Metamask 연동 및 연결해제 되어야함

</br>

## 개발환경 설정
- @web3-react/core": "^6.1.9"
- @web3-react/injected-connector": "^6.0.7"
- @ethersproject/providers
- "web3": "^1.6.1”

</br>

**설치 명령어**
```
pm install --save @web3-react/core": "^6.1.9"
npm install --save @web3-react/injected-connector": "^6.0.7"
npm install --save @ethersproject/providers
npm install --save web3
```

</br>

## Provide 설정하기
ethersproject에서 제공해주는 Library를 사용하기 위해 component를 Provider로 감싸준다.
```js
// index.js

import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';


// getLibrary 함수를 props로 전달해준다.
function getLibrary(provider){
  const library=new Web3Provider(provider);
  library.pollingInterval=12000; //
  return library;
}

ReactDOM.render(
   <React.StrictMode>
    {/* Component 내에서 사용할 수 있도록 Provider 감싸기 */}
        <Web3ReactProvider getLibrary={getLibrary}>
            <App />
        </Web3ReactProvider>
  </React.StrictMode>,
document.getElementById('root')
```

</br>

작업 환경이 구축되었다면 구현을 위해 아래와 같이 코드를 작성해준다.
```
import './cover.css'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'

//contract MyNFT is ERC721,Ownable{

function App() {
  // 지원되는 네트워크 주입
  const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42], //hardhat ropstan : 4,3
  })
  // const { active, account, library, connector, activate, deactivate } =
  const { active, account, activate, deactivate } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }
  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>MetaMask 연결하기</h1>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={connect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Connect to MetaMask
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {active ? (
          <span>
            Connected with <b>{account}</b>
          </span>
        ) : (
          <span>Not connected</span>
        )}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button
          onClick={disconnect}
          className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800"
        >
          Disconnect
        </button>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  )
}

export default App
```