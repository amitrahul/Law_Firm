import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Introduction from "./components/Introduction/Introduction";
import CardSection from "./components/CardSection/CardSection";
import Practices from "./components/Practices/Practices";
import Clients from "./components/Clients/Clients";
import Team from "./components/Team/Team";
import Faq from "./components/FAQ/Faq";
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
        <Practices />
        <Clients />
        <Team />
        <Faq />
      </div>
    </>
  );
}

export default App;
