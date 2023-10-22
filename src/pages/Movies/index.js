import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "~/layout/DefaultLayout/Sidebar";
import {Loading} from "~/component/Loading/Loading";
import { CardMovie } from "~/component/CardMovie";

function Movies() {

  const [data, setData] =  useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch('https://652405ebea560a22a4e945b0.mockapi.io/user/films')
        const  jsonData = await responce.json();

        setData(jsonData[0])

      } catch (error) {
        console.log('Error fetching data: ', error);
      }
    }

    fetchData();
  }, [])

  const FilmList = ({data}) => {
    if(!data) {
      return (
        <div className="h-[299px] w-[100%] flex justify-center items-center">
          <Loading />
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
                <CardMovie dataItem={item} />
              </Link>
            )
          })}
      </>
    )
  }



  return (
    <>
      <div>
        <div className="overflow-hidden">
          <div className="max-w-[1320px] mx-auto md:mt-[66px] mt-[61px]">
            <h2 className="pt-7 pb-7 pl-5 pr-5 lg:pl-0 lg:pr-0  text-2xl font-semibold ">
              Popular Movies
            </h2>
            <div className="grid md:grid-cols-[260px,1fr] grid-cols-[1fr] gap-4 md:gap-8 pl-5 pr-5 lg:pl-0 lg:pr-0">
              <Sidebar />
              <div className="w-full ">
                <div className="grid lg:grid-cols-[repeat(5,1fr)] md:lg:grid-cols-[repeat(3,1fr)] grid-cols-[repeat(2,1fr)] md:gap-5 gap-3">
                  <FilmList data={data} />
                </div>

                <div className="rounded-2xl max-w-full w-full h-[50px] mb-4 flex justify-center items-center bg-[rgb(1,180,228)] text-xl font-semibold text-white mt-[30px] p-0 rounded-lg;">
                  Load More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
