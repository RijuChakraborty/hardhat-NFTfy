const {network, deployments}= require("hardhat")
const {developmentChains}= require("../helper-hardhat-config")
const {verify}= require("../utils/verify")

module.exports= async function({ getNamedAccounts, deployment}){
    const {deploy, log}= deployments
    const {deployer}= await getNamedAccounts()
    const args= []
    const Nft= await deploy("NFT",{
        from: deployer,
        args: args,
        log: true,
        waitConfirmations: 1
    })

    if(!developmentChains.includes(network.name) && process.env.POLYGONSCAN_API_KEY){
        log("Verifying...")
        await verify(Nft.address, args)
    }

    log("-----------------------------------------------------")
}