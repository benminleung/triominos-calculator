import React, { ReactElement } from "react";
import "./numberPad.scss";
interface NumberPadProps {
  setPlayer: (points: number) => void;
}

const points = [1, 2, 3, 4, 5];
const otherPoints = [10, 40, 50];

export default function NumberPad(props: NumberPadProps): ReactElement {
  const pad = (list: number[]) =>
    list.map(points => (
      <React.Fragment key={"points" + points}>
        <label className="button plus" onClick={() => props.setPlayer(points)}>
          +{points}
        </label>
        <label className="button" onClick={() => props.setPlayer(points * -1)}>
          -{points}
        </label>
      </React.Fragment>
    ));
  return (
    <div className="number-pad">
      <div className="pad">
        {pad(points)}
      </div>
      <div className="pad">
        {pad(otherPoints)}
      </div>
    </div>
  );
}
