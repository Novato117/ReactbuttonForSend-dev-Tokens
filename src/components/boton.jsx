import { useState } from "react";
import { ethers } from "ethers";

function Boton() {
    //provedor
    /* const providerRPC = {
         moonbase: {
             name: 'moonbase-alpha',
             rpc: '',
             chainId: 1287, // 0x507 in hex,
         },
     }
     const provider = new ethers.JsonRpcProvider(
         providerRPC.moonbase.rpc,
         {
             chainId: providerRPC.moonbase.chainId,
             name: providerRPC.moonbase.name,
         }
     );
 
     // 2. Create account variables
     const account_from = {
         privateKey: ',
     };
     //direccion de envio
     const addressTo = '';
     let wallet = new ethers.Wallet(account_from.privateKey, provider);
 
     const [adress, setAdress] = useState();
 
     async function BotonConectarWallet() {
         if (typeof window.ethereum != 'undefined') {
             try {
                 console.log('metamask is installet!!')
                 const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                 //get the address for account
                 const account = accounts[0]
                 console.log(`Cuenta conectada ${account}`)
                 setAdress(account);
             } catch (error) {
                 console.log(error)
             }
         }
     }
 
     const send = async () => {
         console.log(`Attempting to send transaction from ${adress} to ${addressTo}`);
 
         // 5. Create tx object
         const tx = {
             to: addressTo,
             value: ethers.parseEther('0.5'),
         };
 
         // 6. Sign and send tx - wait for receipt
         const createReceipt = await wallet.sendTransaction(tx);
         await createReceipt.wait();
         console.log(`Transaction successful with hash: ${createReceipt.hash}`);
     }
 
     return (
         <div>
             <h1>hola--</h1>
             <h1>cuenta conectada {adress}</h1>
             <button onClick={BotonConectarWallet}>conectar wallet</button>
             <p>Realiza pago</p>
             <button onClick={send}>pagar</button>
         </div>
     );
 */
}
export default Boton;

