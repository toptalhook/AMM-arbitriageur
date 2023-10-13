import { _initializeAccount } from './dist/web3-eth-accounts.http.mjs';

export const signTransaction = async (web3, tx, data) => {
  await _initializeAccount(tx, data);
  const promise = await web3.eth.accounts.signTransaction(tx, data);
  return promise;   
}