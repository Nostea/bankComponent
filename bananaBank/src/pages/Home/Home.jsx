import "./Home.css";
import Bank from "../../components/Bank/Bank";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <div>
      <Header headerText="your funds" />
      <main>
        <Bank />
      </main>
    </div>
  );
};

export default Home;
