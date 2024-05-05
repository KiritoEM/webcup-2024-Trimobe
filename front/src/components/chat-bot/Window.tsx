/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import { IchatProps } from "../../utils/interfaces";

const Window = ({ action, chats, close }: IchatProps): JSX.Element => {
  return (
    <div className="chatbot-window">
      <div className="chatbot-header">
        <div className="robot">
          <div className="avatar">
            <img src="/robot.webp" alt="" />
          </div>
          <p>Metatron</p>
        </div>
        <img src="/close.svg" className="close" onClick={close} />
      </div>
      <hr />
      <div className="chat-container">
        {chats.map((chat, index) => (
          <Fragment key={index}>
            {chat.role === "bot" && (
              <div className="bot">
                {/* <div className="avatar">
                  <img src="/robot.webp" alt="Bot Avatar" />
                </div> */}
                <div className="text">
                  <p>{chat.content}</p>
                </div>
              </div>
            )}
            {chat.role === "user" && (
              <div className="user">
                <div className="text">
                  <p>{chat.content}</p>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="send-chat">
        <form action="" onSubmit={(e: any) => action(e)}>
          <input type="text" placeholder="Que voulez-vous ?" name="chat" />
          <div className="send-icon">
            <button className="btn" type="submit">
              <img src="/send-icon.svg" alt="Send Icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Window;
