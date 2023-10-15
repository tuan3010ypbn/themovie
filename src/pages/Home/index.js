import Banner from "~/component/Banner";
import JoinToday from "~/component/JoinToday";
import LeaderBoard from "~/component/LeaderBoard";
import Populars from "~/component/Populars";
import Trailers from "~/component/Trailers";
import Trending from "~/component/Trending";

function Home() {
  console.log("Home");
  return (
    <div>
      <Banner />
      <Trending />
      <Trailers />
      <Populars />
      <JoinToday />
      <LeaderBoard />
    </div>
  );
}

export default Home;