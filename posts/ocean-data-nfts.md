---
title: 'Create OCEAN Data NFTs in Python'
date: '2024-01-17'
img: 'https://img.youtube.com/vi/ob2k8EPn-_Y/0.jpg'
preview: 'Leverage SQL, Python, and GitHub Codespace to create OCEAN Data NFTs with Dune & Flipside data.'
twitter: ''
code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/ob2k8EPn-_Y?si=GjesBrK8iA6mQGF_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
---

Quickly create [OCEAN](https://oceanprotocol.com/) Data NFTs by querying blockchain data from different providers ([Dune](https://dune.com/) & [Flipside](https://flipsidecrypto.xyz/)).

**Setup**

1. Fork [this repo](https://github.com/PrimoData/ocean_data_nfts).
2. Create a GitHub Codespaces workspace, which will automatically setup a Python environment with the following:
   - Python 3.8.
   - `pip install -r requirements.txt`
3. Copy the `.env.example` file, rename to `.env`, and add your keys:
   - `DUNE_API_KEY`
   - `FLIPSIDE_API_KEY`
   - `WEB3_INFURA_PROJECT_ID` (Note: Must have an Infrura account w/ RPC endpoints.)
   - `PRIVATE_KEY` (For a wallet)
4. Run `Create_OCEAN_Data_NFT.ipynb`

**Steps:**

- Get Data
- Store Data
- Create Data NFT

See code on [GitHub](https://github.com/PrimoData/ocean_data_nfts).
