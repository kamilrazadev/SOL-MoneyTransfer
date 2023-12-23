import React from "react";
import styles from "../MissionValues.module.css";
import AchivingOurMission from "./SubSections/AchivingOurMission";
import RoadMap from "./SubSections/RoadMap";

const MissionRoadMap = () => {
  return (
    <main className={styles.mission_road_map_main}>
      <div>
        <AchivingOurMission />
      </div>
      <div>
        <RoadMap />
      </div>
    </main>
  );
};

export default MissionRoadMap;
