import * as React from "react";
import InfoCard from "./InfoCard";

const infoData = [
  {
    title: "What is ShampooDAO?",
    content: "ShampooDAO is a decentralized subsidiary of HairDAO, brought together to revolutionize the hair care industry. By leveraging the power of a decentralized autonomous organization, ShampooDAO enables enthusiasts, developers, and consumers to collaborate and contribute to the growth and innovation of sustainable, community-driven hair care products and services. Members of ShampooDAO can participate in decision-making, propose new initiatives, and benefit from exclusive community rewards, creating an ecosystem where everyone has a voice and a stake in the future of hair care."
  },
  {
    title: "What is $POO?",
    content: "$POO is the native cryptocurrency of ShampooDAO, designed to support the ecosystem and empower its members. Holding $POO allows users to vote on governance proposals (1 $POO = 1 vote), access exclusive products and services, and participate in special events and rewards programs. As ShampooDAO grows, $POO will play a crucial role in facilitating treasury management, product development, transactions within the community, and rewarding contributions, ensuring that all members benefit from the DAO's success and expansion into new areas of the hair care industry."
  }
];

function InfoSection() {
  return (
    <main className="flex overflow-hidden flex-wrap gap-14 items-start p-24 w-full text-white bg-black max-md:px-5 max-md:py-24 max-md:max-w-full  ">
      {infoData.map((info, index) => (
        <InfoCard
          key={index}
          title={info.title}
          content={info.content}
          className=""
        />
      ))}
    </main>
  );
}

export default InfoSection;







