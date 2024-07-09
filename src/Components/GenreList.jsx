import React, { useCallback, useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

function GenreList({genereId, selectedGenresName}) {
  const [GenreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    getGenreList();
  }, []);
  const getGenreList = () => {
    GlobalApi.getGenreList.then((resp) => {

      setGenreList(resp.data.results);
    });
  };
  return (
    <div className="genre-container p-4">
  <h2 className="text-[30px] font-bold dark:text-white">Genre</h2>
  {GenreList.map((item, index) => (
    <div
      key={index}
      onClick={() => {setActiveIndex(index); genereId(item.id);
        selectedGenresName(item.name)}}
      className={`flex gap-2 items-center mb-2 cursor-pointer rounded-lg p-2 group
        transition-all ease-out duration-300
        ${
        activeIndex === index
          ? "bg-gray-300 dark:bg-gray-600 font-bold"
          : "hover:bg-gray-300 dark:hover:bg-gray-600"
      }`}
    >
      <img
        src={item.image_background}
        className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105
          transition-all ease-out duration-200 ${
          activeIndex === index ? "scale-105" : null
        }`}
      />
      <h3
        className={`dark:text-white text-[18px] group-hover:font-bold
          transition-all ease-out duration-200 ${
          activeIndex === index ? "font-bold" : null
        }`}
      >
        {item.name}
      </h3>
    </div>
  ))}
</div>
  );
}

export default GenreList;