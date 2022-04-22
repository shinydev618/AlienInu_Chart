import DashboardStat from "../DashboardStat";
import Graph from "../DashboardStat/Graph";
import LatestTweeks from "../LatestTweek";
import RankList from "../RankList";

const SectionOne = () => {
  return (
    <div className="lg:grid lg:grid-cols-7 gap-5">
      <div className="lg:col-span-2 relative">
        <RankList />
      </div>
      <div className="lg:col-span-5 mt-5 lg:mt-0">
        <DashboardStat />
        <Graph />
        <LatestTweeks />
      </div>
    </div>
  );
};

export default SectionOne;
