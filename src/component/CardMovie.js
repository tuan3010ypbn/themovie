import {Link} from "react-router-dom";


export function CardMovie({dataItem}) {

  return (
    <>
      <div className="product-item--img relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${dataItem.poster_path}`}
          alt={dataItem.alt}
          className="rounded-lg"
        />
        <div
          className="percent absolute -bottom-4 left-[11px] flex justify-center items-center w-[38px] h-[38px] bg-black rounded-full group-hover:flex">
            <span className="percent-title text-white text-sm font-semibold">
              {Math.round(dataItem.vote_average * 10)}<sup>%</sup>
            </span>
          <div className="border-[3px] absolute inset-0 border-3 border-green-500 rounded-full"></div>
        </div>
      </div>
      <div className="product-content mt-[26px]">
        <h4 className="product-title text-base font-semibold truncate">
          {dataItem.original_title ? dataItem.original_title : dataItem.original_name}
        </h4>
        <span className="product-time text-sm text-gray-600">
          {dataItem.release_date ? dataItem.release_date : dataItem.first_air_date}
        </span>
      </div>
    </>
  );
}
