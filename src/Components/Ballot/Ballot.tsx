import React from "react";
import { FilmCategory } from "../../Store/user.store";

const Ballot: React.FC<{
  setSelectedFilm: (film: FilmCategory, selectedFilmId: string) => void;
  filmCategoryId: FilmCategory;
  filmId: string;
  photoUrL: string;
  title: string;
}> = ({ title, setSelectedFilm, filmCategoryId, filmId, photoUrL }) => {
  return (
    <div
      onClick={() => {
        setSelectedFilm(filmCategoryId, filmId);
      }}
    >
      <img src={photoUrL} />
      {title}
    </div>
  );
};

export default Ballot;
