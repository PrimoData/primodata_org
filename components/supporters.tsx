export function Supporters() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center text-center">
            <div className="grid grid-cols-1 items-center">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-black text-center">
                Supporters
              </h1>{' '}
              <div className=" text-center mt-5">
                Shoutout to our supporters and their genernous support of our
                free, public goods.
              </div>
            </div>
            <div className="w-full max-w-full md:px-16 mx-auto my-5">
              {/* Gold Sponsors */}
              <div
                className="border-4 rounded-lg shadow-lg mt-8 mb-16 p-4"
                style={{ borderColor: 'gold' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
                  <div className="items-center col-span-full -mt-7">
                    <span
                      className="font-bold text-xl text-black bg-black rounded-lg py-5 px-7"
                      style={{ background: 'gold' }}
                    >
                      Gold Tier
                    </span>
                  </div>
                  {/* Spice AI */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://spice.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://static.otta.com/uploads/images/company-logos/10654-a9nJm0gIEvhNLNiis7nLSJGLV9Dg9tgsud2e7TemdvU.png"
                        alt="Spice AI"
                        style={{
                          maxHeight: '60px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Goldsky */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://goldsky.com/?utm_source=blockchaindatalandscape&utm_medium=referral&utm_campaign=primo"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="/goldsky.jpg"
                        alt="Goldsky"
                        style={{
                          maxHeight: '60px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Bitquery */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://bitquery.io/?utm_source=primodata&utm_medium=website"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Bitquery"
                        style={{
                          maxHeight: '60px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Chainbase */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://chainbase.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://chainbase.com/assets/logo.png"
                        alt="Chainbase"
                        style={{
                          maxHeight: '45px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Coinpaprika */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://coinpaprika.com/api/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://logos-download.com/wp-content/uploads/2023/02/Coinpaprika_Logo.png"
                        alt="Coinpaprika"
                        style={{
                          maxHeight: '60px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Dapp Looker */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://dapplooker.com/home"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="/DappLooker.png"
                        alt="Dapp Looker"
                        style={{
                          maxHeight: '60px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Indexing Co */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://www.indexing.co/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://storage.googleapis.com/indexingco_cdn/The%20Indexing%20Company.svg"
                        alt="Indexing Co"
                        style={{
                          maxHeight: '35px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Envio */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://envio.dev/?utm_source=primo-data-listing&utm_medium=sponsor&utm_campaign=q1"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://docs.envio.dev/img/envio-logo.png"
                        alt="Envio"
                        style={{
                          maxHeight: '45px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Blockjoy */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://www.blockjoy.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="./blockjoy.jpg"
                        alt="Blockjoy"
                        style={{
                          maxHeight: '70px',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Silver Sponsors */}
              <div
                className="border-2 rounded-lg shadow-lg md:mx-32 lg:mx-64 my-8 p-4"
                style={{ borderColor: 'silver' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                  <div className="items-center col-span-full -mt-7">
                    <span
                      className="text-lg font-bold bg-black rounded-lg py-3 px-5"
                      style={{ background: 'silver' }}
                    >
                      Silver Tier
                    </span>
                  </div>
                  {/* Playgrounds */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://playgrounds.network/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%20123%2024%22%3E%3Cg%20id%3D%22ss1622337946_1%22%3E%3Cpath%20d%3D%22M%2010.743%2010.609%20C%2010.743%2013.826%208.426%2015.935%205.603%2015.935%20C%204.059%2015.935%202.603%2015.283%201.919%2014.087%20L%201.919%2020.261%20C%201.919%2020.453%201.761%2020.609%201.566%2020.609%20L%200.353%2020.609%20C%200.158%2020.609%200%2020.453%200%2020.261%20L%200%205.87%20C%200%205.677%200.158%205.522%200.353%205.522%20C%201.218%205.522%201.919%206.213%201.919%207.065%20L%201.919%207.109%20C%202.603%205.957%204.103%205.261%205.581%205.261%20C%208.404%205.261%2010.743%207.413%2010.743%2010.609%20Z%20M%208.801%2010.63%20C%208.801%208.609%207.301%207.043%205.404%207.043%20C%203.574%207.043%201.919%208.457%201.919%2010.63%20C%201.919%2012.826%203.728%2014.152%205.404%2014.152%20C%207.301%2014.152%208.801%2012.674%208.801%2010.63%20Z%20M%2013.412%2015.326%20L%2013.412%200.348%20C%2013.412%200.156%2013.57%200%2013.765%200%20L%2014.978%200%20C%2015.173%200%2015.331%200.156%2015.331%200.348%20L%2015.331%2015.326%20C%2015.331%2015.518%2015.173%2015.674%2014.978%2015.674%20L%2013.765%2015.674%20C%2013.57%2015.674%2013.412%2015.518%2013.412%2015.326%20Z%20M%2028.345%205.522%20C%2028.54%205.522%2028.698%205.677%2028.698%205.87%20L%2028.698%2015.326%20C%2028.698%2015.518%2028.54%2015.674%2028.345%2015.674%20C%2027.48%2015.674%2026.779%2014.983%2026.779%2014.13%20L%2026.779%2013.87%20C%2026.096%2015.087%2024.662%2015.935%2023.007%2015.935%20C%2020.316%2015.935%2017.956%2013.696%2017.956%2010.587%20C%2017.956%207.587%2020.184%205.261%2023.096%205.261%20C%2024.64%205.261%2026.096%205.913%2026.779%207.109%20L%2026.779%207.065%20C%2026.779%206.213%2027.48%205.522%2028.345%205.522%20Z%20M%2026.779%2010.587%20C%2026.779%208.5%2024.993%207.043%2023.272%207.043%20C%2021.397%207.043%2019.897%208.674%2019.897%2010.587%20C%2019.897%2012.522%2021.397%2014.152%2023.294%2014.152%20C%2025.125%2014.152%2026.779%2012.652%2026.779%2010.587%20Z%20M%2040.624%205.522%20L%2040.632%205.522%20C%2040.75%205.522%2040.861%205.58%2040.926%205.677%20C%2040.991%205.774%2041.003%205.896%2040.958%206.003%20L%2034.853%2020.395%20C%2034.798%2020.524%2034.67%2020.609%2034.527%2020.609%20L%2033.259%2020.609%20C%2033.142%2020.609%2033.032%2020.551%2032.967%2020.455%20C%2032.901%2020.359%2032.888%2020.238%2032.932%2020.13%20L%2034.897%2015.37%20L%2030.952%206.003%20C%2030.907%205.895%2030.919%205.773%2030.985%205.676%20C%2031.051%205.579%2031.161%205.521%2031.279%205.522%20C%2032.214%205.522%2033.056%206.078%2033.41%206.93%20L%2035.933%2013%20L%2038.498%206.92%20C%2038.855%206.073%2039.694%205.522%2040.624%205.522%20Z%20M%2062.845%205.907%20L%2062.654%207.008%20C%2062.637%207.109%2062.575%207.197%2062.485%207.249%20C%2062.396%207.301%2062.288%207.311%2062.19%207.277%20C%2061.833%207.155%2061.458%207.091%2061.08%207.087%20C%2059.029%207.087%2058.212%209.283%2058.212%2011.957%20L%2058.212%2015.326%20C%2058.212%2015.518%2058.054%2015.674%2057.859%2015.674%20L%2056.624%2015.674%20C%2056.429%2015.674%2056.271%2015.518%2056.271%2015.326%20L%2056.271%205.87%20C%2056.271%205.677%2056.429%205.522%2056.624%205.522%20C%2057.501%205.522%2058.212%206.223%2058.212%207.087%20L%2058.212%207.826%20C%2058.742%206.043%2059.734%205.261%2061.102%205.261%20C%2061.669%205.261%2062.249%205.38%2062.624%205.524%20C%2062.78%205.584%2062.873%205.744%2062.845%205.907%20Z%20M%2063.75%2010.587%20C%2063.75%207.37%2066.199%205.261%2069.132%205.261%20C%2072.066%205.261%2074.537%207.37%2074.537%2010.587%20C%2074.537%2013.804%2072.066%2015.935%2069.132%2015.935%20C%2066.199%2015.935%2063.75%2013.804%2063.75%2010.587%20Z%20M%2072.618%2010.587%20C%2072.618%208.5%2071.029%207.043%2069.132%207.043%20C%2067.257%207.043%2065.691%208.5%2065.691%2010.587%20C%2065.691%2012.696%2067.257%2014.152%2069.132%2014.152%20C%2071.029%2014.152%2072.618%2012.696%2072.618%2010.587%20Z%20M%2086.206%205.522%20C%2086.401%205.522%2086.559%205.677%2086.559%205.87%20L%2086.559%2015.326%20C%2086.559%2015.518%2086.401%2015.674%2086.206%2015.674%20L%2084.993%2015.674%20C%2084.798%2015.674%2084.64%2015.518%2084.64%2015.326%20L%2084.64%2014.087%20C%2084.022%2015.37%2082.368%2015.935%2081.221%2015.935%20C%2078.64%2015.935%2077.051%2014.239%2077.074%2011.391%20L%2077.074%205.87%20C%2077.074%205.677%2077.232%205.522%2077.426%205.522%20C%2078.291%205.522%2078.993%206.213%2078.993%207.065%20L%2078.993%2011.348%20C%2078.993%2013.065%2080.029%2014.152%2081.463%2014.152%20C%2082.897%2014.152%2084.618%2013.304%2084.64%2011.109%20L%2084.64%207.065%20C%2084.64%206.213%2085.341%205.522%2086.206%205.522%20Z%20M%2099.374%209.804%20L%2099.374%2015.326%20C%2099.374%2015.518%2099.216%2015.674%2099.021%2015.674%20L%2097.809%2015.674%20C%2097.614%2015.674%2097.456%2015.518%2097.456%2015.326%20L%2097.456%209.913%20C%2097.456%208.217%2096.397%207.13%2094.963%207.13%20C%2093.529%207.13%2091.809%207.978%2091.809%2010.174%20L%2091.809%2015.326%20C%2091.809%2015.518%2091.651%2015.674%2091.456%2015.674%20L%2090.243%2015.674%20C%2090.048%2015.674%2089.89%2015.518%2089.89%2015.326%20L%2089.89%205.87%20C%2089.89%205.677%2090.048%205.522%2090.243%205.522%20L%2091.456%205.522%20C%2091.651%205.522%2091.809%205.677%2091.809%205.87%20L%2091.809%207.065%20C%2092.426%205.826%2094.103%205.261%2095.228%205.261%20C%2097.786%205.261%2099.397%206.957%2099.374%209.804%20Z%20M%20112.279%200%20C%20112.474%200%20112.632%200.156%20112.632%200.348%20L%20112.632%2015.326%20C%20112.632%2015.518%20112.474%2015.674%20112.279%2015.674%20L%20111.066%2015.674%20C%20110.871%2015.674%20110.713%2015.518%20110.713%2015.326%20L%20110.713%2014.087%20C%20110.029%2015.239%20108.529%2015.935%20107.051%2015.935%20C%20104.228%2015.935%20101.89%2013.783%20101.89%2010.587%20C%20101.89%207.37%20104.206%205.261%20107.029%205.261%20C%20108.574%205.261%20110.029%205.913%20110.713%207.109%20L%20110.713%201.543%20C%20110.713%200.691%20111.414%200%20112.279%200%20Z%20M%20110.713%2010.565%20C%20110.713%208.37%20108.904%207.043%20107.206%207.043%20C%20105.331%207.043%20103.831%208.522%20103.831%2010.565%20C%20103.831%2012.587%20105.331%2014.152%20107.206%2014.152%20C%20109.059%2014.152%20110.712%2012.739%20110.712%2010.565%20Z%20M%20115.557%2012.696%20L%20116.643%2012.696%20C%20116.808%2012.696%20116.951%2012.809%20116.987%2012.968%20C%20117.146%2013.71%20117.882%2014.283%20119.006%2014.283%20C%20120.307%2014.283%20121.08%2013.652%20121.08%2012.826%20C%20121.08%2012.065%20120.484%2011.674%20119.668%2011.5%20L%20118.256%2011.174%20C%20116.535%2010.717%20115.543%209.891%20115.543%208.261%20C%20115.543%206.587%20116.999%205.261%20119.072%205.261%20C%20120.699%205.261%20122.384%206.057%20122.602%207.826%20C%20122.614%207.925%20122.583%208.025%20122.516%208.1%20C%20122.449%208.175%20122.353%208.217%20122.251%208.217%20L%20121.075%208.217%20C%20120.914%208.217%20120.774%208.11%20120.734%207.957%20C%20120.562%207.32%20119.839%206.913%20119.118%206.913%20C%20118.125%206.913%20117.463%207.543%20117.463%208.326%20C%20117.463%209.022%20118.125%209.391%20118.787%209.543%20L%20120.309%209.913%20C%20122.449%2010.435%20123%2011.696%20123%2012.848%20C%20123%2014.739%20121.147%2015.935%20119.007%2015.935%20C%20117.278%2015.935%20115.511%2014.931%20115.21%2013.101%20C%20115.193%2013.001%20115.222%2012.897%20115.288%2012.819%20C%20115.355%2012.741%20115.454%2012.696%20115.557%2012.696%20Z%20M%2051%2014.087%20L%2051%2015.982%20L%2047.791%2017.808%20C%2046.99%2018.264%2046.715%2019.274%2047.178%2020.064%20L%2047.182%2020.069%20C%2047.28%2020.234%2047.495%2020.29%2047.663%2020.195%20L%2052.084%2017.677%20C%2052.576%2017.396%2052.89%2016.889%2052.919%2016.33%20L%2052.919%2016.325%20C%2052.921%2016.271%2052.921%2016.218%2052.919%2016.164%20L%2052.919%205.87%20C%2052.919%205.677%2052.761%205.522%2052.566%205.522%20C%2051.701%205.522%2051%206.213%2051%207.065%20L%2051%207.109%20C%2050.316%205.935%2048.86%205.261%2047.316%205.261%20C%2044.492%205.261%2042.176%207.37%2042.176%2010.587%20C%2042.176%2013.783%2044.514%2015.935%2047.338%2015.935%20C%2048.816%2015.935%2050.316%2015.239%2051%2014.087%20Z%20M%2044.118%2010.565%20C%2044.118%208.522%2045.618%207.043%2047.493%207.043%20C%2049.191%207.043%2051%208.37%2051%2010.565%20C%2051%2012.739%2049.346%2014.152%2047.493%2014.152%20C%2045.618%2014.152%2044.118%2012.587%2044.118%2010.565%20Z%20M%2052.625%2022.293%20C%2052.283%2021.954%2051.746%2021.9%2051.341%2022.165%20C%2050.937%2022.429%2050.779%2022.939%2050.963%2023.381%20C%2051.148%2023.823%2051.624%2024.075%2052.1%2023.983%20C%2052.576%2023.891%2052.92%2023.48%2052.921%2023.002%20C%2052.921%2022.737%2052.815%2022.482%2052.625%2022.293%20Z%20M%2052.697%2018.602%20L%2052.692%2018.598%20C%2052.595%2018.433%2052.38%2018.376%2052.211%2018.472%20L%2047.791%2020.985%20C%2046.989%2021.441%2046.715%2022.451%2047.178%2023.241%20L%2047.182%2023.246%20C%2047.28%2023.411%2047.495%2023.467%2047.663%2023.372%20L%2052.084%2020.854%20C%2052.882%2020.398%2053.157%2019.391%2052.697%2018.602%20Z%22%20fill%3D%22rgb(84%2C221%2C248)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                        alt="Playgrounds Network"
                        style={{
                          height: '35px',
                        }}
                      />
                    </a>
                  </div>
                  {/* Derec */}
                  <div className="flex flex-col items-center justify-center">
                    <a
                      href="https://www.derec.io/"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 mb-3 md:mt-0"
                    >
                      <img
                        src="https://uploads-ssl.webflow.com/6412ad1b1bd52360e6ee430f/64139f94b7e10911e894172b_derec..svg"
                        alt="derec"
                        style={{
                          height: '30px',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* Bronze Sponsors */}
              <div
                className="border rounded-lg shadow-lg md:mx-48 lg:mx-80 my-16 p-4"
                style={{ borderColor: '#cd7f32' }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
                  <div className="items-center col-span-full -mt-7">
                    <span
                      className="text-md font-medium text-white bg-black rounded-lg py-2 px-4"
                      style={{ background: '#cd7f32' }}
                    >
                      Bronze Tier
                    </span>
                  </div>
                  {/* Syve */}
                  <div className="flex flex-col md:col-span-1 items-center justify-center">
                    <a
                      href="https://www.syve.ai/"
                      target="_blank"
                      rel="noreferrer"
                      className="my-0"
                    >
                      <img
                        src="./syve.png_medium"
                        alt="Syve"
                        style={{
                          height: '60px',
                        }}
                      />
                    </a>
                  </div>

                  {/* Chaindensity */}
                  <div className="flex flex-col md:col-span-1 items-center justify-center">
                    <a
                      href="https://chaindensity.xyz/?utm_source=primo-data-listing&utm_medium=sponsor&utm_campaign=q1"
                      target="_blank"
                      rel="noreferrer"
                      className="my-0"
                    >
                      <img
                        src="./chaindensity.png"
                        alt="ChainDensity"
                        style={{
                          height: '60px',
                        }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-full max-w-full md:px-16 mx-auto my-5">
              <div className="p-4 text-center">
                <h2 className="font-bold text-3xl text-black">
                  Become a Supporter
                </h2>
                <p className="mt-4 mb-8">
                  Support our mission of providing Blockchain Data product
                  research to the public for free.
                </p>
                <a
                  href="/support"
                  rel="noreferrer"
                  className="px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg hover:shadow-xl"
                  style={{ background: 'gold' }}
                >
                  Support Us
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
