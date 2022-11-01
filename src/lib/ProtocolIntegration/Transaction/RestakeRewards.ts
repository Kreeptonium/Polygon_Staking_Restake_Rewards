import Web3 from 'web3';
import dotenv from 'dotenv';
import {config} from "../../../settings";
import { IRestakeOptions, IRestakeRewardsRetValues } from '../Model/RestakeRewardResults';
dotenv.config();
//let encoded_tx;



export const restakeRewards = async (params:IRestakeOptions): Promise<IRestakeRewardsRetValues> => {
{

    const web3 = new Web3(new Web3.providers.HttpProvider(config.MumbaiTestnet.providerURL));
    const buyDelegateABI = require('../abi/validatorShareContract.json');
    let encoded_tx;
   
    // Get contract instance
    const validatorShareContract = new web3.eth.Contract(buyDelegateABI, params.validatorContractAddress);

    try {
        //Capturing the receipt for "Encoded ABI"
        
        encoded_tx = await validatorShareContract.methods.restake().encodeABI();
        
        let retVal:IRestakeRewardsRetValues  = {

            To:Web3.utils.toChecksumAddress(params.validatorContractAddress!),
            Value: 0, 
            Data:encoded_tx,

        }

        return retVal;
    }
    catch (error) {
        throw (error);
    }
}
};
restakeRewards({validatorContractAddress:'0x29f5406e20219f7e46806837e820cf7c2fa6d3ee'})
.then((result)=>(console.log(result.To)))