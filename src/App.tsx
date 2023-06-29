import { useCallback, useEffect, useState } from "react";
import { Keypad } from "./components/keypad/Keypad";
import { HistoryTable } from "./components/history-table/HistoryTable";
import { History } from "./models/Common";
import "./styles.css";

export default function App() {
  const localHistory = JSON.parse(localStorage.getItem("keyPadHistory")!) || [];
  const [history, setHistory] = useState<History[]>(localHistory);

  const handleHistory = useCallback(
    (h: History) => setHistory((prev) => [...prev, h]),
    []
  );

  useEffect(() => {
    localStorage.setItem("keyPadHistory", JSON.stringify(history));
  }, [history]);

  return (
    <div>
      <h1>Keypad UI</h1>
      {<Keypad onAddHistory={handleHistory} />}
      {!!history.length && <HistoryTable history={history} />}
      <button className="btn" onClick={() => setHistory([])}>
        Clear history
      </button>
    </div>
  );
}
