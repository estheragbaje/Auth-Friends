import React, { useEffect, useState } from "react";
import axiosWithAuth from "../axios/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5001/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>FriendsList!</h1>
      <AddFriendForm onSubmit={friends => setFriends(friends)} />
      {friends.map(item => (
        <>
          <h5>{item.name}</h5>
          <h6>{item.age}</h6>
          <p>{item.email}</p>
        </>
      ))}
    </div>
  );
};

export default FriendsList;
