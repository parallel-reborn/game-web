import detectEthereumProvider from '@metamask/detect-provider'
import {Address} from "./types"
import {ethers, } from "ethers"
import {Web3Provider} from "@ethersproject/providers/src.ts/web3-provider"

declare let window: any

export default class Web3SDK {

    static async isMetamaskInstalled(): Promise<boolean> {
        const provider = await detectEthereumProvider()
        return !!provider
    }

    static async loadMetamask(): Promise<boolean> {
        const provider = await this.getProvider()

        console.log('Metamask successfully detected!')
        const accounts = await this.getAccounts()
        window.ethereum.defaultAccount = await this.getSignerAddress()
        provider.on('accountsChanged', (accounts: string[]) => {
            window.ethereum.defaultAccount = accounts[0]
        })
        return accounts.length > 0
    }

    static async sign(text: string): Promise<string> {
        const provider = await this.getProvider()
        const signer = provider.getSigner()
        return await signer.signMessage(text)
    }

    static async getProvider(): Promise<Web3Provider> {
        const provider = await detectEthereumProvider()
        if (provider) {
            // @ts-ignore
            return new ethers.providers.Web3Provider(provider)
        } else {
            throw 'Metamask is not installed!'
        }
    }

    static async getSignerAddress(): Promise<String> {
        const provider = await this.getProvider()
        const signer = provider.getSigner()
        return await signer.getAddress()
    }

    static async getAccounts(): Promise<Address[]> {
        const provider = await this.getProvider()
        return await provider.send("eth_requestAccounts", [])
    }

    static getDefaultAccount(): Address | null {
        try {
            return window.ethereum.defaultAccount
        } catch (e) {
            return null
        }
    }

    static address(value: Address): Address {
        return value.toLowerCase()
    }

    static isDefaultAccount(address: Address): boolean {
        return this.getDefaultAccount() === address
    }

    static nullAddress() {
        return '0x0000000000000000000000000000000000000000'
    }

    static nullBytes() {
        return '0x0000000000000000000000000000000000000000000000000000000000000000'
    }
}