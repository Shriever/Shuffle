import * as React from "react";
import Card from "./components/card";

import KarmaIcon from "./../images/icon-karma.svg";
import SupervisorIcon from "./../images/icon-supervisor.svg";
// const { KarmaIcon } = require("./../images/icon-karma.svg");
// const SupervisorIcon = require("./../images/icon-supervisor.svg");

const cards = [
  {
    name: "Karma",
    image: KarmaIcon,
    description: "Regularly evaluates our talent to ensure quality",
  },
  {
    name: "Team Builder",
    image: KarmaIcon,
    description:
      "Scans our talent network to create the optimal team for your project",
  },
  {
    name: "Calculator",
    image: SupervisorIcon,
    description:
      "Uses data from past projects to provide better delivery estimates",
  },
  {
    name: "Supervisor",
    image: SupervisorIcon,
    description: "Monitors activity to identify project roadblocks",
  },
];

const IndexPage = () => {
  return (
    <div>
      {cards.map(card => {
        return <Card key={card.name} {...card} />;
      })}
    </div>
  );
};

export default IndexPage;
