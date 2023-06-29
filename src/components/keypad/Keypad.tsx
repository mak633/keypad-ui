import { memo } from "react";
import { buttons } from "./buttons";
import { History, Key } from "../../models/Common";

interface IKeypad {
  onAddHistory: (item: History) => void;
}

export const Keypad = memo(function Keypad({ onAddHistory }: IKeypad) {
  const rows = 3;

  // Can calculate coordinates depending on numbers of row
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const id = Number((event.target as HTMLElement).closest('button')!.getAttribute("data-id")) + 1;
    const y = Math.ceil(id / rows);
    const x = id - (y - 1) * rows;
    const timestamp = Date.now();
    onAddHistory({ x, y, timestamp });
  };

  return (
    <>
      <p>Please enter your numbers</p>
      <div
        className="keypad"
        style={{
          gridTemplateColumns: `repeat(${3}, 1fr)`
        }}
        onClick={handleClick}
      >
        {buttons.map(({ label, prefix }: Key, id) => (
          <button className="keypad__button" key={label} data-id={id}>
            {prefix && <span>{prefix}</span>}
            <span className="keypad__button-label">{label}</span>
          </button>
        ))}
      </div>
    </>
  );
});
