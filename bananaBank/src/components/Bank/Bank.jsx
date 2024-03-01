import "./Bank.css";
import { useState } from "react";

const Bank = () => {
  const [cash, setCash] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  return (
    <section>
      <div className="konto">
        <h2>Mein Girokonto</h2>
        <div className="saldo">
          <span className="geldKonto">{cash}</span>
        </div>

        <form action="">
          <input
            type="number"
            name="inputGeld"
            id="inputGeld"
            onChange={(event) => setWithdrawAmount(Number(event.target.value))}
            placeholder="Betrag in Euro"
            value={withdrawAmount}
          />
          <div className="flex-buttons">
            <button type="button" onClick={() => setCash(cash + withdrawAmount)}>
              Einzahlen
            </button>
            <button type="button" onClick={() => setCash(cash - withdrawAmount)}>
              Auszahlen
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Bank;
