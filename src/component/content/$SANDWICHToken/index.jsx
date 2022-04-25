import React from 'react'
import "./index.scss"
import Item_1 from "./img/Vector(2).png"
import Item_2 from "./img/Vector(3).png"
import Item_3 from "./img/Vector(4).png"
import Item_4 from "./img/Vector(5).png"
import Item_5 from "./img/Vector(6).png"
import Item_6 from "./img/Vector(7).png"

export default function SANDWICHToken() {
  const dataCart = [
      {
        id: 1,
        class: "Participate",
        item: Item_1,
        text: "Participate in seed, private and public rounds of top-tier projects on SandwichSAFU.",
      },
      {
        id: 2,
        class: "Discounts",
        item: Item_2,
        text: "Discounts on all tools and applications.",
      },
      {
        id: 3,
        class: "Key",
        item: Item_3,
        text: "Key governance votes for new updates & functionality.",
      },
      {
        id: 4,
        class: "Access",
        item: Item_4,
        text: "Access to premium tools & applications such as wallet tracking.",
      },
      {
        id: 5,
        class: "Staking",
        item: Item_5,
        text: "Staking & farming through SandwichSwap.",
      },
      {
        id: 6,
        class: "Benefit",
        item: Item_6,
        text: "Benefit from more token utility with each new update and app.",
      },
  ]
  return (
    <div className='SANDWICHToken'>
      <p className='https'>https://www.figma.com/file/fCJKpyX8qGxFc8hKWmVJ8F/Sandwich-Landing-%2B-SandwichSAFU-(Copy)</p>
      <h1>$SANDWICH Token</h1>
      {
        dataCart.map((index) => {
          return(
            <div className={index.class} key={index.id}>
              <div className='cardMap'>
                <div className='item'>
                  <img src={index.item} alt={index.item} />
                </div>
                <p className='text'>{index.text}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
