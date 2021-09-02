import * as React from "react";
import Card from "./components/card";

import KarmaIcon from "./../images/icon-karma.inline.svg";
import SupervisorIcon from "./../images/icon-supervisor.inline.svg";
import CalculatorIcon from "./../images/icon-calculator.inline.svg";
import TeamBuilderIcon from "./../images/icon-team-builder.inline.svg";

const cards = [
  {
    name: "Karma",
    Image: KarmaIcon,
    description: "Regularly evaluates our talent to ensure quality",
  },
  {
    name: "Team Builder",
    Image: TeamBuilderIcon,
    description:
      "Scans our talent network to create the optimal team for your project",
  },
  {
    name: "Calculator",
    Image: CalculatorIcon,
    description:
      "Uses data from past projects to provide better delivery estimates",
  },
  {
    name: "Supervisor",
    Image: SupervisorIcon,
    description: "Monitors activity to identify project roadblocks",
  },
];

const IndexPage = () => {
  return (
    <div>
      <KarmaIcon />
      {cards.map(card => {
        return <Card key={card.name} {...card} />;
      })}
    </div>
  );
};

export default IndexPage;
