//SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

pragma solidity ^0.8.0;

contract NFT is ERC721URIStorage {

    uint256 public tokenCounter;
    
    constructor() public ERC721("NEWNFT","NFT"){}

    function mintNft(string memory tokenURI) public  returns (uint256) {
        _safeMint(msg.sender, tokenCounter);
        _setTokenURI(tokenCounter, tokenURI);
        
        tokenCounter++;
        return tokenCounter;
    }

}
