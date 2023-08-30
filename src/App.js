import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import CardSection from "./components/CardSection/CardSection";
import styles from "./App.module.css";
function App() {
  return (
    <>
      <div className={styles.contentWrapper}>
        <NavBar />
        <Hero />
      </div>
      <div className={styles.bodyWrapper}>
        <Introduction />
        <CardSection />
      </div>
    </>
  );
}

export default App;
