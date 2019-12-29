import React, { ReactElement } from "react";
import { CountList, Player } from "../../modals/playerModal";
import "./playerSelect.scss";

export interface PlayerSelectProps {
  player1: CountList;
  player2: CountList;
  player3: CountList;
  player4: CountList;
  selectedPlayer: Player;
  selectPlayer: any;
}

export default function PlayerSelect(props: PlayerSelectProps): ReactElement {
  const countListSum: (x: number[]) => number = listOfNumbers =>
    listOfNumbers.reduce((a, b) => a + b, 0);
  // const countListSum: number = (listOfNumbers: number[]) => {return 0})

  return (
    <div className="player-select">
      Select A Player
      <div className="players">
        {[
          { num: "1", name: "player1", method: props.player1 },
          { num: "2", name: "player2", method: props.player2 },
          { num: "3", name: "player3", method: props.player3 },
          { num: "4", name: "player4", method: props.player4 }
        ].map(player => {
          return (
            <div
              key={player.name}
              className={`player-box ${props.selectedPlayer === player.name &&
                "selected"}`}
              onClick={() => props.selectPlayer(player.name)}
            >
              Player {player.num}
              <p>{countListSum(player.method)}</p>
            </div>
          );
        })}
        {/* <div
        className={`player ${props.selectedPlayer === "player1"}`}
        onClick={() => props.selectPlayer("player1")}
      >
        Player 1<p>{countListSum(props.player1)}</p>
      </div>
      <div
        className={`player ${props.selectedPlayer === "player2"}`}
        onClick={() => props.selectPlayer("player2")}
      >
        Player 2<p>{countListSum(props.player2)}</p>
      </div>
      <div
        className={`player ${props.selectedPlayer === "player3"}`}
        onClick={() => props.selectPlayer("player3")}
      >
        Player 3<p>{countListSum(props.player3)}</p>
      </div>
      <div
        className={`player ${props.selectedPlayer === "player4"}`}
        onClick={() => props.selectPlayer("player4")}
      >
        Player 4<p>{countListSum(props.player4)}</p>
      </div> */}
      </div>
    </div>
  );
}
