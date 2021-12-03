import React, { useEffect, useState } from "react";

export const App: React.FC = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/message")
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        setMessage(jsonData);
      });
  }, []);

  return (
    <>
      <div>Hello Github Actions!</div>
      <div>{message}</div>
    </>
  );
};
