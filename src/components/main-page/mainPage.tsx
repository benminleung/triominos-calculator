import React, { ReactElement, useState, useEffect } from "react";
import PlayerSelect, { PlayerSelectProps } from "../player-select/playerSelect";
import { CountList, Player } from "../../modals/playerModal";
import NumberPad from "../number-pad/numberPad";
import "./main-page.scss";

interface Props {}

export default function MainPage({}: Props): ReactElement {
  const init: CountList = [];

  const [player1, setPlayer1]: [CountList, any] = useState<CountList>(init);
  const [player2, setPlayer2]: [CountList, any] = useState<CountList>(init);
  const [player3, setPlayer3]: [CountList, any] = useState<CountList>(init);
  const [player4, setPlayer4]: [CountList, any] = useState<CountList>(init);

  const [selectedPlayer, setSelectedPlayer]: [Player, any] = useState<Player>(
    "player1"
  );
  const [resetTrigger, setResetTrigger]: [boolean, any] = useState<boolean>(
    false
  );

  const selectPlayer = (player: Player) => {
    setSelectedPlayer(player);
  };

  const playerSelectProps: PlayerSelectProps = {
    player1,
    player2,
    player3,
    player4,
    selectedPlayer,
    selectPlayer
  };

  const setPlayer = (points: number) => {
    switch (selectedPlayer) {
      case "player1":
        setPlayer1([...player1, points]);
        break;
      case "player2":
        setPlayer2([...player2, points]);
        break;
      case "player3":
        setPlayer3([...player3, points]);
        break;
      case "player4":
        setPlayer4([...player4, points]);
        break;
    }
  };

  const reset = () => {
    setPlayer1(init);
    setPlayer2(init);
    setPlayer3(init);
    setPlayer4(init);
    setResetTrigger(false);
  };

  useEffect(() => {
    console.log("selectedPlayer", selectedPlayer);
  });

  return (
    <div className="main-page">
      <h1>Triominos Calculator v.0.1(beta)</h1>
      <div>
        <PlayerSelect {...playerSelectProps}></PlayerSelect>
        <NumberPad setPlayer={setPlayer}></NumberPad>
        <br />
        <br />
        <br />
        <button onClick={() => setResetTrigger(true)}>Reset</button>
        {resetTrigger && (
          <div>
            <p>Are you sure you want to reset?</p>
            <button onClick={() => reset()}>Yes</button>
            <br />
            <br />
            <br />
            <button onClick={() => setResetTrigger(false)}>No</button>
          </div>
        )}
      </div>

      <div className="footer"><p>Made by Pok Tik Benjamin Leung</p></div>
    </div>
  );
}
