import "./Bank.css";
import { useState } from "react";

const Bank = () => {
  const [cash, setCash] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  console.log(withdrawAmount);

  const depositCash = () => {
    if (withdrawAmount >= 0) {
      setCash(cash + withdrawAmount);
    } else {
      setWithdrawAmount("");
      window.alert("Can't deposit negative value");
    }
  };

  const withdrawCash = () => {
    if (withdrawAmount >= 0) {
      if (withdrawAmount >= cash) {
        setWithdrawAmount("");
        window.alert("Can't withdraw more than is currently in the balance");
      } else {
        setCash(cash - withdrawAmount);
      }
    } else {
      setWithdrawAmount("");
      window.alert("Input can't be lower than 0");
    }
  };

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
            placeholder="Betrag in Euro"
            value={withdrawAmount}
          />
          <span>€</span>
        </div>

        <div className="flex-buttons">
          <button type="button" onClick={depositCash}>
            Deposit
          </button>
          <button type="button" onClick={withdrawCash}>
            Withdraw
          </button>
        </div>
      </form>
    </section>
  );
};

export default Bank;
