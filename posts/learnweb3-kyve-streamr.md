---
title: 'Winner of LearnWeb3 Hackathon: "Crypto Queries"'
date: '2024-01-29'
img: 'https://lw3-hackathon-submissions.s3.us-east-2.amazonaws.com/decentralized-intelligence-season-1-submission-crypto-queries-6b3acc99-5b91-4053-a11c-9024d31b0917'
preview: 'Next.js app with SQL & AI query edtior to pull blockchain data using KYVE and Streamr.'
twitter: 'https://twitter.com/LearnWeb3DAO/status/1715385193475789281'
code: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Project: Crypto Queries<br><br>Winners of: KYVE Bounty, Streamr Bounty, SPACE ID Bounty<br><br>Hackers: <a href="https://twitter.com/primo_data?ref_src=twsrc%5Etfw">@primo_data</a><a href="https://t.co/YNF8aIqJet">https://t.co/YNF8aIqJet</a> <a href="https://t.co/bjjewDnyhm">pic.twitter.com/bjjewDnyhm</a></p>&mdash; LearnWeb3 (@LearnWeb3DAO) <a href="https://twitter.com/LearnWeb3DAO/status/1715385193475789281?ref_src=twsrc%5Etfw">October 20, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
---

The overarching aim of this project was to create an open and user-centric approach to blockchain data consumption, empowering users to take ownership of their data and explore innovative methods of querying data through AI.

"Crypto Queries" allows users to harness the power of blockchain data from KYVE and Streamr through SQL and AI queries, with the ability to preserve their favorite queries as NFTs on Arbitrum (`components/MintNFT.tsx`). Moreover, they can execute queries created by other users (`components/NFTGallery.tsx`), and establish their identity using `.arb` domain names from Space ID (`components/SIDBadge.tsx`).

**Tech Stack**

- [KYVE Network](https://kyve.network/) - Trustless blockchain data source.
- [Airbyte](https://airbyte.io/) - Use to ELT data from KYVE to BigQuery.
- [Google BigQuery](https://cloud.google.com/bigquery) - Data warehouse storing KYVE data.
- [Streamr](https://streamr.network/) - Real-time blockchain data sourced from KYVE.
- [Space ID](https://spaceid.xyz/) - `.arb` domain names for user identification.
- [thirdweb](https://thirdweb.com/) - Use to mint query NFTs.
- [Arbitrum One](https://arbitrum.io/) - Blockchain for NFTs stored on.
- [OpenAI](https://openai.com/) - Use to respond to AI x Streamr queries.
- [Next.js](https://nextjs.org/) - Frontend framework for dApp.
- [Vercel](https://vercel.com/) - Hosting for dApp.

[See the demo here](https://www.youtube.com/watch?v=LXIRhIoTa3I&t=18s).

See the code on [GitHub](https://github.com/PrimoData/crypto-queries).
