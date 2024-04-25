import { useState } from "react";
import FriendsList from './components/FriendsList';
import Button from './components/Button'
import FormSplitBill from './components/FormSplitBill' 
import FormAddFriend from './components/FormAddFriend'
import LoadingForm from "./components/LoadingForm";
import LoadingSplit from './components/LoadingSplit'

 

const initialFriends = [];


export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriends, setSelectedFriends] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriends((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriends.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriends(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelection}
          selectedFriends={selectedFriends}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriends} />}
        {(!friends.length && !showAddFriend) ? <LoadingForm /> : null }

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend" }
        </Button>
      </div>
      {selectedFriends ? 
        (
          <FormSplitBill
            selectedFriends={selectedFriends}
            onSplitBill={handleSplitBill}
          />
        )
        : 
        <LoadingSplit />
      }

      {/* svgs in the app */}
      <div className="hidden  md:block   absolute right-0  lg:bottom-0 lg:right-10  ">
        <img src="/Svgs/walking.svg" alt="" />
      </div>

      <div className="hidden  md:block   absolute left-0  lg:bottom-0 lg:left-10  ">
        <img src="/Svgs/walking_in_rain.svg" alt="" />
      </div>
    </div>
  );
}
