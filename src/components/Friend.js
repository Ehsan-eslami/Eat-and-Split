import React from 'react'
import Button from './Button'

export default 

function Friend({ friend, onSelection, selectedFriends }) {
  const isSelected = selectedFriends?.id === friend?.id;

  return (
    <>
      <div className=' relative'>
        <li className={isSelected ? "selected" : ""}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owes you {Math.abs(friend.balance)}$
            </p>
          )}
          {friend.balance === 0 && <p>You and {friend.name} are even</p>}

          <Button onClick={() => onSelection(friend)}>
            {isSelected ? "Close" : "Select"}
          </Button>
        </li>
        <div className=' absolute top-[-140px] right-0'>
          <img src="/Svgs/fun-moments.svg" alt="" />
        </div>
      </div>
    </>
  );
}
