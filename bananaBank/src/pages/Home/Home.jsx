import "./Home.css";
import Bank from "../../components/Bank/Bank";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header headerText="your funds" />

      <section className="banking-section">
        <Bank />
      </section>
    </div>
  );
};

export default Home;
