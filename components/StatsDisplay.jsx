import * as React from "react";
import StatCard from "./StatCard";

function StatsDisplay() {
  const stats = [
    {
      title: "Next Halvening",
      value: "298 : 21 : 56 : 46"
    },
    {
      title: "$POO per bottle",
      value: "1,000,000"
    },
    {
      title: "Price per $POO",
      value: "$0.00001668",
      showLiveTag: true
    }
  ];

  return (
    <div className="flex flex-wrap gap-4 items-start w-12" role="region" aria-label="Statistics Display">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          showLiveTag={stat.showLiveTag}
        />
      ))}
    </div>
  );
}

export default StatsDisplay;