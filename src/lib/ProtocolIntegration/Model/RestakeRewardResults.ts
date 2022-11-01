export interface IRestakeOptions{ 
    validatorContractAddress?:string; //They can send validator Id rather than address
}
export interface IRestakeRewardsRetValues{
    Data:string;
    To:string;
    Value:number;
}