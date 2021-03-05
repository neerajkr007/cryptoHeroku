
function showModal(d)
{
    // 0 = type , 
    if(d[0])
    {
        document.getElementById("modal-title").innerHTML = "Our opinion on "+d[2]+" : "
        document.getElementById("modal-body").innerHTML = '<p>'+d[1]+'</p>'
    }
    else
    {
        document.getElementById("modal-title").innerHTML = "Features of "+d[2]+" : "
        document.getElementById("modal-body").innerHTML = ""
        for(let i = 0; i < d[1].length; i++)
        {
            document.getElementById("modal-body").innerHTML += '<div class="d-flex inline-flex"><i class="far fa-hand-point-right" style="vertical-align: middle;"></i><p class="ml-2">'+d[1][i]+'</p><br></div>'
        }
    }
    $('#modal').modal("toggle")
}

let coins = [
    "Bitcoin",
    "Ethereum",
    "Litecoin",
    "Cardano",
    "XRP",
    "Dogecoin"
]

let opinion = [
    "The price of the bitcoin record highs for a second day after Elon Musk’s car company Tesla had bought about $1.5 bn of the crypto currency.Recently an arm of Morgan Stanley has announced that it is considering to invest in crypto currency. Morgan Stanley is ready to invest $150 Billion in bitcoin. This news seems to be a bright future of crypto currencies specially the major one Bit coins. Future of crypto currency has also been predicted by JP Morgan Co- President Daniel Pinto. He said, he's 'sure' demand for bitcoin will pick up to the extent that the Wall Street giant will have to be involved.These two news are a positive sign for the crypto currency. There are so many other currency are circulating in the market but one has to be very careful about the Rules of government of that particular country who has denied the acceptance of trading and mining  a particular crypto currency.",
    "A  decentralize , open source blockchain crypto currency initially circulating in the market since 2015, Ethereum was launched and became the world's second most common option for crypto since it implemented the idea of a smart contract on top of blockchain technology.It is the second-largest crypto currency in terms of market capitalization after bit coin.It is funded by a very strong group and large corporations, and if you don't know then you should probably search Ethereum Enterprise Alliance.The year 2020 may have been the worst year for us, but it was a crypto-currency golden year. The year saw ETH offer 4.5x returns, Bitcoin testing and breaking its ATH. 2020 was the year that Bitcoin went mainstream with retail investors dipping their hands into crypto gold.",
    "Due to its relatively cheap rate, Litecoin is currently my favorite tool, and thus, please take my opinion on it, coming from someone who really believes in it.Some Key Points about Litecoin Litecoin has been around since 2011.Litecoin shares the deflationary nature of Bitcoin, and in a few years from now its supply will taper off. Litecoin, however, has a cap of 84million coins, 4 times higher than Bitcoin.Litecoin's block generation time is around 2 minutes to Bit coin’s 10 minutes. Therefore, it will undoubtedly be 4 times quicker than Bitcoin itself to speed up transactions on Litecoin. Because of this reason the list of merchants that accept Litcoin is growing rapidly.Over the next few years, Long Forecast, a group that uses mathematical and statistical measures to estimate the long-term success of investments, has a reasonably positive outlook for Litecoin.",
    "In today world, Cardano is among the top 10 listed crypto currency. Cardano is name of block chain technology and “ADA” is the digital asset of that blockchain.The long term growth potential of Cardano is sponsored by several partners. The latest technical studies, industry dynamics and analyst opinions indicate that for its investors, Cardano is a good investment option.",
    "Recently Jed sell sold a 95 million XRP Assets worth $56 million during the first week and on 14 th he sold 38 million XRP worth $22 million .This result in decline of price of ripple from the past 14 days .But the demand of ripple is growing as ripple is being incorporated into the banking system .As per my point of view Ripple is one of the biggest rivals of bitcoin. The XRP is a special digital currency of its kind. It acts as an instrument without a central exchange for the immediate conversion of any currency into another. The idea of Ripple is to make instant transactions in the entire financial sector.",
    "Dogecoin was launched in the year 2013 by two developer Jackson Palmar and Billy Markus to make crypto currency more fun and amazing.It is well regarded as a community coin and has raised good funds for charities such as charities in the past Dogecoin community.The Dogecoin Group raised USD 50,000 to send the Jamaican team to the Winter Olympics."
]

let features = [
    [
        "Greater Liquidity Relative to Other Cryptocurrencies",
        "Increasingly Wide Acceptance as a Payment Method",
        "International Transactions Easier Than Regular Currencies",
        "Generally Lower Transaction Fees",
        "Anonymity and Privacy Relative to Traditional Currencies"
    ],
    [
        "Well-known founder and an expanding developer community",
        "Ethereum is decentralised",
        "Ethereum is more than a cryptocurrency",
        "Ethereum is attracting more businesses",
        "Ether is not capped"
    ],
    [
        "Litecoin is an open-source network",
        "Litecoin is decentralised",
        "Litecoin is fast & scalable",
        "Low transactions fees",
        "Litecoin has been improving regularly since it was launched"
    ],
    [
        "Open-Source Code",
        "A Credible Team",
        "Energy efficient consensus protocol",
        "Double Layered Character"
    ],
    [
        "It's Affordable",
        "It solves problems and creates opportunities",
        "Market Cap of Ripple",
        "Ripple isn't just another cryptocurrency"
    ],
    [
        "Faster confirmation times",
        "Lower transaction fees",
        "Lower value which helps in tipping and gaming currency",
        "Friendly community"
    ]
]

function loaded2()
{
    for(let i = 0; i < 6; i++)
    {
        document.getElementById("opinion"+i).onclick = ()=>{
            showModal([true, opinion[i], coins[i]])
        }
        document.getElementById("features"+i).onclick = ()=>{
            showModal([false, features[i], coins[i]])
        }
    }
}
