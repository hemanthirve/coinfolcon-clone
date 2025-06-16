import React from 'react'
import Card from "./Card"


const PaymentMethods = () => {
    const cardsData = [
    {
        image:"/Visa.png",
        title:"Debit / Credit cards",
        subtitle: "Buy cryptocurrency instantly with MasterCard / Visa"
    },
    {
        image:"/Sepa.png",
        title:"Bank transfer",
        subtitle: "SEPA available for everyone in 33 countries."
    },
    {
        image:"/Crypto.png",
        title:"Cryptocurrency",
        subtitle: "Over 20 currencies you can choose from"
    }
]

  return (
    <div className='Payment-section'>
      <div className='payment-heading'>
        <h1>Available payment methods</h1>
        <p>CoinFalcon lets you use Euro to buy the most popular cryptocurrencies through any of our payment methods.</p>
      </div>

      <div className='Card'>
        {cardsData.map((card, index) => (
           <Card key={index}
           image={card.image}
           title={card.title}
           subtitle={card.subtitle}
            />
        ))}
      </div>
    </div>
  )
}

export default PaymentMethods;
