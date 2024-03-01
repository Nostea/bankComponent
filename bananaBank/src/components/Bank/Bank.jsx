import "./Bank.css";
import { useState } from "react";

const Bank = () => {
  const [cash, setCash] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");

  return (
    <section className="bank-section">
      <div className="creditCard">
        <div className="creditCard-type">
          <img src="../public/img/Deutsche_Bank_logo.svg" />
          <p>Debit Card xxxx-xxxx</p>
        </div>
        <div className="balance">
          <span>Your Balance</span>
          <span className="currentBalance">{cash}€</span>
        </div>
      </div>

      <form action="">
        <div>
          <input
            type="number"
            name="inputGeld"
            id="inputGeld"
            step="0.01"
            onChange={(event) => setWithdrawAmount(Number(event.target.value))}
            placeholder="Betrag"
            value={withdrawAmount}
          />
          <span>€</span>
        </div>

        <div className="flex-buttons">
          <button type="button" onClick={() => setCash(cash + withdrawAmount)}>
            Deposit
          </button>
          <button type="button" onClick={() => setCash(cash - withdrawAmount)}>
            Withdraw
          </button>
        </div>
      </form>
    </section>
  );
};

export default Bank;
