import React from "react";

const CommunityClubs = () => {
  const sendData = () => {
    const data = {
      email: "dbupanyiam@gmail.com",
      name: "Ebube",
    };

    fetch(
      `https://dsc-welcome-mail.herokuapp.com/?name=${data.name}&email=${data.email}`,
      {
        method: "POST",
      }
    );
    // .then((res) => {
    //   res && console.log("worked");
    // });
  };
  return (
    <div>
      Hello there <button onClick={sendData}>Try</button>
    </div>
  );
};

export default CommunityClubs;
