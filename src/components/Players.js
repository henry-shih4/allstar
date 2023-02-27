import { useState } from "react";

export default function Players() {
  const players = [
    {
      id: 1,
      name: "Lebron James",
      team: "Los Angeles Lakers",
      allStarCount: 19,
      ppg: 30.0,
      apg: 7.0,
      RPG: 8.4,
      img: "images/lebron-final.png",
    },
    {
      id: 2,
      name: "Luka Doncic",
      team: "Dallas Mavericks",
      allStarCount: 4,
      ppg: 33.3,
      apg: 8.1,
      RPG: 8.8,
      img: "images/luka-final.png",
    },
    {
      id: 3,
      name: "Joel Embiid",
      team: "Philidelphia 76ers",
      allStarCount: 6,
      ppg: 33.1,
      apg: 4.1,
      RPG: 10.2,
      img: "images/embiid-final.png",
    },
    {
      id: 4,
      name: "Kyrie Irving",
      team: "Dallas Mavericks",
      allStarCount: 8,
      ppg: 27.2,
      apg: 5.4,
      RPG: 5.1,
      img: "images/kyrie-final.png",
    },
    {
      id: 5,
      name: "Nikola Jokic",
      team: "Denver Nuggets",
      allStarCount: 5,
      ppg: 24.7,
      apg: 10.1,
      RPG: 11.5,
      img: "images/jokic-final.png",
    },
    {
      id: 6,
      name: "Giannis Antetokounmpo",
      team: "Milwuakee Bucks",
      allStarCount: 7,
      ppg: 31.8,
      apg: 5.4,
      RPG: 12.2,
      img: "images/giannis-final.png",
    },
    {
      id: 7,
      name: "Lauri Markkanen",
      team: "Utah Jazz",
      allStarCount: 1,
      ppg: 24.9,
      apg: 1.8,
      RPG: 8.6,
      img: "images/lauri-final.png",
    },
    {
      id: 8,
      name: "Donovan Mitchell",
      team: "Cleveland Cavaliers",
      allStarCount: 4,
      ppg: 27.3,
      apg: 4.9,
      RPG: 4.1,
      img: "images/donovan-final.png",
    },
    {
      id: 9,
      name: "Ja Morant",
      team: "Memphis Grizzlies",
      allStarCount: 2,
      ppg: 27.3,
      apg: 8.3,
      RPG: 6.0,
      img: "images/ja-final.png",
    },
    {
      id: 10,
      name: "Jayson Tatum",
      team: "Boston Celtics",
      allStarCount: 4,
      ppg: 30.6,
      apg: 4.5,
      RPG: 8.6,
      img: "images/jayson-final.png",
    },
  ];

  const [showTeam, setShowTeam] = useState("Lebron");

  return (
    <>
      <div className="font-open-sans tracking-wider flex justify-around items-center flex-col  mb-4 md:gap-y-10">
        <div className="flex space-x-4 mt-4 md:hidden">
          <button
            className={
              showTeam === "Lebron"
                ? "bg-[#FDB927] text-[#552583]  h-[40px] w-[100px] rounded-md font-bold"
                : "bg-white text-black h-[40px] w-[100px] rounded-md font-bold border-black border-solid border-2"
            }
            onClick={() => {
              setShowTeam("Lebron");
            }}
          >
            LeBron
          </button>
          <button
            className={
              showTeam === "Giannis"
                ? "bg-green-800 text-white h-[40px] w-[100px] rounded-md font-bold"
                : "bg-white text-black h-[40px] w-[100px] rounded-md font-bold border-black border-solid border-2"
            }
            onClick={() => {
              setShowTeam("Giannis");
            }}
          >
            Giannis
          </button>
        </div>

        <div
          className={
            showTeam === "Giannis"
              ? "flex-col justify-center items-center hidden md:flex"
              : "flex flex-col justify-center items-center "
          }
        >
          <div>
            <img
              alt="team-lebron-logo"
              src="images/lebron-logo.png"
              className="h-[300px] min-w-[200px] object-contain"
            />
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {players.slice(0, 5).map((player) => {
              return (
                <div className="group perspective m-2 ">
                  <div
                    className="relative h-[400px] w-[260px] flex justify-center items-center  preserve-3d group-hover:my-rotate-y-180 duration-1000  "
                    key={player.id}
                  >
                    <div className="absolute backface-hidden">
                      <img
                        alt={player.name}
                        src={player.img}
                        className="h-[350px]"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <div className="font-bold">{player.name}</div>
                        <div>{player.team}</div>
                      </div>
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full border-solid border-black border-[1px] rounded-lg bg-blue-600 ">
                      <div className="flex justify-center items-center text-center h-full flex-col text-white">
                        <img src="/images/card-logo-transparent.png" />
                        <div className="text-xl font-bold">
                          {player.allStarCount}-time All Star
                        </div>
                        <div>{player.ppg} ppg</div>
                        <div>{player.apg} apg</div>
                        <div>{player.RPG} rpg</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={
            showTeam === "Giannis"
              ? "flex flex-col justify-center items-center"
              : "flex-col justify-center items-center hidden md:flex"
          }
        >
          <div>
            <img
              alt="team-giannis-logo"
              src="images/giannis-logo.png"
              className="h-[300px] min-w-[200px] object-contain"
            />
          </div>
          <div className="flex justify-center items-center flex-wrap">
            {players.slice(5, players.length).map((player) => {
              return (
                <div className="group perspective m-2 ">
                  <div
                    className="relative h-[400px] w-[260px] flex justify-center items-center  preserve-3d group-hover:my-rotate-y-180 duration-1000  "
                    key={player.id}
                  >
                    <div className="absolute backface-hidden">
                      <img
                        alt={player.name}
                        src={player.img}
                        className="h-[350px]"
                      />
                      <div className="flex flex-col justify-center items-center">
                        <div className="font-bold">{player.name}</div>
                        <div>{player.team}</div>
                      </div>
                    </div>
                    <div className="absolute my-rotate-y-180 backface-hidden w-full h-full border-solid border-black border-[1px] rounded-lg bg-[#C9082A]">
                      <div className="flex justify-center items-center text-center h-full flex-col text-white">
                        <img src="/images/card-logo-transparent.png" />
                        <div className="text-xl font-bold">
                          {player.allStarCount}-time All Star
                        </div>
                        <div>{player.ppg} ppg</div>
                        <div>{player.apg} apg</div>
                        <div>{player.RPG} rpg</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
