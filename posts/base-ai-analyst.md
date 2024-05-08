---
title: 'Fine-tune LLM for AI x Blockchain Data App'
date: '2024-01-27'
img: './posts/baseai.png'
preview: 'Leverage OpenAI models to generate queries and visualizations for the Base blockchain using text.'
twitter: 'https://twitter.com/primo_data/status/1694346330678997395'
code: '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Say hello to the &quot;Base AI Analyst&quot;<br><br>1. Query <a href="https://twitter.com/buildonbase?ref_src=twsrc%5Etfw">@BuildOnBase</a> data from <a href="https://twitter.com/flipsidecrypto?ref_src=twsrc%5Etfw">@flipsidecrypto</a>.<br>2. Create charts on query results.<br><br>The core of this is a text to SQL model created by fine tuning <a href="https://twitter.com/OpenAI?ref_src=twsrc%5Etfw">@OpenAI</a> GPT3.5 (feature released yesterday).<br><br>App: <a href="https://t.co/KjJNsEbs2V">https://t.co/KjJNsEbs2V</a><br><br>Let&#39;s dive in🧵 <a href="https://t.co/nyjfae6V64">pic.twitter.com/nyjfae6V64</a></p>&mdash; Primo Data (@primo_data) <a href="https://twitter.com/primo_data/status/1694346330678997395?ref_src=twsrc%5Etfw">August 23, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
---

Leverage OpenAI models to generate queries and visualizations for the Base blockchain using text.

**Key Features**:
* **Query Generation**: Uses OpenAI's GPT-3.5 to write SQL queries for analyzing Base blockchain data, sourced from [Flipside Crypto](https://flipsidecrypto.xyz/). The core technology behind this tool is a fine-tuned OpenAI GPT-3.5 model create using Base queries from @adriaparcerisas, @AliTslm, @jackthepine, @der_piper, and @Biseda_binam on Flipside.
* **Chart Creation**: Transforms query results into insightful charts. The prompts are sent to OpenAI with some prompt engineering to generate code for plotly charts then rendered in the app.

**Notes**:
* **Experimental Nature**: This project tests the feasibility of creating a text-to-SQL model using open-sourced queries. Hence, the queries are not perfect.
* **Rapid Development**: The tool was developed in about 4 hours.
* **Future Prospects**: Ideally, the tool will combine query generation and visualization steps, which is definitely achievable.

See the code on [GitHub](https://github.com/PrimoData/base_ai_analyst).

