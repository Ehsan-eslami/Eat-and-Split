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
    </div>
  );
}
