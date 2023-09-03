import React from "react";
import arrow from "../../assets/arrow.png";
import ClientsCard from "../ClientsCard/ClientsCard";
import person1 from "../../assets/person1.png";
import person2 from "../../assets/person2.png";
import person3 from "../../assets/person3.png";
import styles from "./Clients.module.css";

const Clients = () => {
  const name1 = `Jane Cooper`;
  const name2 = `Devon Lane`;
  const name3 = `Robert Fox`;
  return (
    <div className={styles.ClientsWrapper}>
      <div className={styles.ClientsHeader}>
        <span className={styles.headerText}>What says our happy Clients</span>
        <img src={arrow} alt="arrow" className={styles.arrow} />
      </div>
      <div className={styles.clientsCard}>
        <ClientsCard person={person1} name={name1} />
        <ClientsCard person={person2} name={name2} />
        <ClientsCard person={person3} name={name3} />
      </div>
    </div>
  );
};

export default Clients;
