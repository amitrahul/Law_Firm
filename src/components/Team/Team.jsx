import React from "react";
import TeamPil from "../TeamPill/TeamPil";
import teamPerson1 from "../../assets/teamPerson1.png";
import sanfole from "../../assets/sanfole.png";
import nik from "../../assets/nik.png";
import haldone from "../../assets/haldone.png";
import colleen from "../../assets/colleen.png";
import cesforila from "../../assets/cesforila.png";
import styles from "./Team.module.css";

const Team = () => {
  const arr = [
    {
      name: "Danial Def",
      case: "301 Cases",
      image: teamPerson1,
    },
    {
      name: "Sanfole",
      case: "850 Cases",
      image: sanfole,
    },
    {
      name: "Cesforila",
      case: "470 Cases",
      image: cesforila,
    },
    {
      name: "Colleen",
      case: "180 Cases",
      image: colleen,
    },
    {
      name: "Haldone",
      case: "212 Cases",
      image: haldone,
    },
    {
      name: "Nik Jeo",
      case: "350 Cases",
      image: nik,
    },
  ];
  return (
    <div className={styles.teamWrapper}>
      <div className={styles.teamHeader}>Our Team</div>
      <div className={styles.teamPills}>
        {arr.map((team, i) => (
          <TeamPil
            person={team.image}
            name={team.name}
            cases={team.case}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
