/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Window from "./Window";
import axios from "axios";
import { Ichats } from "../../utils/interfaces";

const ChabotContainer = (): JSX.Element => {
  const [show, setShow] = useState<boolean>(false);
  const [chats, setChats] = useState<Ichats[]>([
    {
      role: "bot",
      content: "je suis Metatron  votre ange assistant",
    },
  ]);

  if (chats) {
    console.log(chats);
  }
  const close = () => {
    setShow(false);
  };

  const sendChat = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    const content = form["chat"].value;
    setChats((prev) => [...prev, { role: "user", content: content }]);

    const response = await axios.post(
      "https://trimobe.madagascar.webcup.hodi.host/chatbot_server/chat",
      { chat: content },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      setChats((prev) => [
        ...prev,
        { role: "bot", content: response.data.message },
      ]);
      form["chat"].value = "";
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot__container">
        {show && <Window action={sendChat} chats={chats} close={close} />}
        <div className="bot-avatar" onClick={() => setShow(!show)}>
          <img src="/bot.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChabotContainer;
