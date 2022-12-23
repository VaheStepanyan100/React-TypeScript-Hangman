import styles from "./Keyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?: boolean;
};

export function Keyboard({
  activeLetters,
  disabled = false,
  inactiveLetter,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inactiveLetter.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""} ${
              isInActive ? styles.inactive : ""
            }`}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
