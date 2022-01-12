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
