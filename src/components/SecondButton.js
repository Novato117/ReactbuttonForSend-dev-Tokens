import { useState } from "react";
import { ethers } from "ethers";
function SecondButton() {
    const [account, setAccount] = useState()
    async function BotonConectarWallet() {
        // const provider = ethers.getDefaultProvider('https://rpc.api.moonbase.moonbeam.network');

        if (window.ethereum) {
            try {
                // await window.ethereum.enable()---> forma obsoleta 
                await window.ethereum.request({ method: "eth_requestAccounts", }).then(result => {
                    console.log(`Conectado con la deireccion ${result[0]}`)
                    setAccount(result[0]);


                })

                const red = await window.ethereum.request({ method: 'net_version' });
                console.log(`Red conectada ${red}`);

            } catch (error) {
                console.log(error)
            }
        }
    }
    let tempProvider = new ethers.providers.Web3Provider(window.ethereum);

    let Singer = tempProvider.getSigner();
    const addressTo = '';
    const send = async () => {
        console.log(`Attempting to send transaction from ${account} to ${addressTo}`);

        // 5. Create tx object
        const tx = {
            to: addressTo,
            value: ethers.utils.parseEther('0.5'),
        };

        // 6. Sign and send tx - wait for receipt
        const createReceipt = await Singer.sendTransaction(tx);
        await createReceipt.wait();
        console.log(`Transaction successful with hash: ${createReceipt.hash}`);
    }

    /**
     * transferir token erc20
     */
    //const provider = ethers.getDefaultProvider('https://rpc.api.moonbase.moonbeam.network');
    const tokenAddress = '0x37822de108AFFdd5cDCFDaAa2E32756Da284DB85';//tokrn MERC
    const tokenABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_address", "type": "address" }], "name": "canMint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "lastMintTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "mintToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "_newInterval", "type": "uint256" }], "name": "setInterval", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }]
    let contract = new ethers.Contract(tokenAddress, tokenABI, tempProvider);
    console.log('abi');
    console.log(tokenABI)
    console.log(tokenABI[5].name)

    
    async function balance() {
        console.log('llamamos a la funcion balance');
        console.log(contract.balanceOf)
        const mybalance = await contract.balanceOf(account);
        console.log(`lo que contiene mybalance ${mybalance}`)
        console.log(`balance convertido ${ethers.utils.formatEther(mybalance)}`)

        //console.log(`balance convertido usando parse units ${ethers.utils.parseUnits(mybalance,decimals)}`)
    }
    /**
     * send a transaction 
     */
    const enviarA = '';
    let tempcontract = new ethers.Contract(tokenAddress, tokenABI, Singer);
    const cantidaD = '1';

    async function sendToken() {
        console.log('we call send function');
        const decimals = await contract.decimals();
        console.log(`valor dedecimals ${decimals}`)
        await tempcontract.transfer(enviarA, ethers.utils.parseEther(cantidaD, decimals)).then(function (tx) {
            console.log(tx)
        })

        /*await creaRecibo.wait();
         console.log(`Transaccion exitosa con hash : ${creaRecibo.hash}`)*/
    }

    return (
        <div>
            <button onClick={BotonConectarWallet}>Conectar</button>
            <p>la cuenta conectada {account}</p>
            <p>pagar</p>
            <button onClick={send}>Pagar</button>
            <p>balane</p>
            <button onClick={balance}>balance</button>
            <p>realizar pago en token</p>
            <button onClick={sendToken}>send TOKEN</button>
        </div>

    )
}

export default SecondButton;
