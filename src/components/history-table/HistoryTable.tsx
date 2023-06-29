import { History } from "../../models/Common";

interface IHistoryTable {
  history: History[];
}

export function HistoryTable({ history }: IHistoryTable) {
  return (
    <>
      <h3>Histrory records</h3>
      <table className="history">
        <thead>
          <tr>
            <th>Coordinates</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          {history.map(({ x, y, timestamp }) => (
            <tr key={timestamp}>
              <td>
                {y}, {x}
              </td>
              <td>{timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
