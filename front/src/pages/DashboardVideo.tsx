import DashboardHeader from "../components/headers/DashboardHeader";
import Dashboardlayout from "../components/layouts/Dashboardlayout";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useEffect, useRef, useState } from "react";

const DashboardVideo = (): JSX.Element => {
  const liveRoomRef = useRef<HTMLDivElement>(null);
  const [room, setRoom] = useState<string>("");

  if (room) {
    console.log(room);
  }

  const liveRoom = async (element: HTMLDivElement | null, room: string) => {
    if (element) {
      const appID = parseInt(import.meta.env.VITE_APP_ID);
      const serverSecret = import.meta.env.VITE_SERVER_SECRET;
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        room,
        Date.now().toString(),
        "johan"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        scenario: {
          mode: ZegoUIKitPrebuilt.VideoConference,
        },
      });
    }
  };

  useEffect(() => {
    liveRoom(liveRoomRef.current, room);
  }, [room]); // Call liveRoom whenever room changes

  return (
    <section className="dashboard__video">
      <Dashboardlayout>
        <div className="video-content">
          <DashboardHeader />
          {room && <div className="live-room" ref={liveRoomRef}></div>}
          {!room && (
            <div className="room-container">
              <div className="room-list">
                <h3>Room</h3>

                <div className="list">
                  <div
                    className="room"
                    onClick={() => setRoom("relation amoureuse")}
                  >
                    <div className="user">
                      <img src="/avatar.webp" alt="" />
                      <p>Relation amoureuse</p>
                    </div>
                    <div className="date">
                      <p>19:54</p>
                    </div>
                  </div>
                  <div className="room" onClick={() => setRoom("Travail")}>
                    <div className="user">
                      <img src="/avatar1.webp" alt="" />
                      <p>Travail</p>
                    </div>
                    <div className="date">
                      <p>20:00</p>
                    </div>
                  </div>
                  <div className="room" onClick={() => setRoom("Depression")}>
                    <div className="user">
                      <img src="/avatar2.webp" alt="" />
                      <p>Depression</p>
                    </div>
                    <div className="date">
                      <p>20:50</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="select-room">
                <div className="content">
                  <img src="/room.webp" alt="" />
                  <p>Sélectionner un Room pour continuer</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Dashboardlayout>
    </section>
  );
};

export default DashboardVideo;
