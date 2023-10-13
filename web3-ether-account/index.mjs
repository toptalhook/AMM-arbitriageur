import Web3 from 'web3';
import { _initializeAccount } from './dist/web3-eth-accounts.http.mjs';
const web3url = "https://purple-skilled-field.quiknode.pro/0b35cf74724e627646691e21d00a7f3aa1279bfd/"
const web3 = new Web3(new Web3.providers.HttpProvider(web3url));


export const signTransaction = async (tx, data) => {
  await _initializeAccount(tx, data);
  const promise = await web3.eth.accounts.signTransaction(tx, data);
  return promise;   
}