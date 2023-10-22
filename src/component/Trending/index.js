import {CardMovie} from "~/component/CardMovie";
import {useEffect, useState} from "react";
import {Loading} from "~/component/Loading/Loading";
import {Link} from "react-router-dom";

function Trending() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6531ee474d4c2e3f333d67ff.mockapi.io/movies');
        const jsonData = await response.json();
        setData(jsonData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const TrendingList = ({data}) => {
    if (!data) {
      return (
        <div className="h-[299px] w-[100%] flex justify-center items-center">
          <Loading/>
        </div>
      )
    }

    return (
      <>
        {data.results.map((item) => {
          return (
            <Link
              key={item.id}
              to={`/detail/${item.id}`}
              className="min-w-[150px] group relative hover:shadow-lg transition-transform transform hover:translate-y-[-4px]"
            >
              <CardMovie dataItem={item}/>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div className="max-w-[1300px] m-auto">
      <div className="">
        <div className="flex items-center gap-5 mt-10">
          <h2 className="text-2xl font-semibold px-5 md:px-0">Trending</h2>
          <div className="rounded-full flex items-center space-x-2 border border-solid border-[#032541]">
            <p className="bg-[#032541] py-1 px-3 rounded-full inline-flex items-center text-[#52c4a3] font-semibold">
              Today
            </p>
            <a
              href="#"
              className="pr-3 text-[#032541] font-medium hover:text-blue-500 transition duration-300"
            >
              This week
            </a>
          </div>
        </div>
        <div className="px-5 md:px-0 overflow-x-auto flex gap-5 max-w-[1300px] mx-auto px-10 py-10 bg-cover bg-center bg-no-repeat bg-[url('./images/bg-movie.svg')]">
          <TrendingList data={data}/>
        </div>
      </div>
    </div>
  );
}

export default Trending;
