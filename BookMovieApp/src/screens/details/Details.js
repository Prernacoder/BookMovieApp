import {
  GridList, GridListTile, GridListTileBar,
  Typography
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../common/header/Header";
import YouTube from "react-youtube";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./Details.css";

const movieInitial = {
  genres: [],
  trailer_url: "",
  artists: [],
};

const opts = {
  height: "300",
  width: "700",
  playerVars: {
    autoplay: 1,
  },
};

function Details(props) {
  const [movie, setMovie] = useState(movieInitial);
  const [ratingGiven, setRatingGiven] = useState(false);
  const [fiveStars, setFiveStars] = useState([{
    id: 1,
    stateId: "star1",
    color: "black",
  },
  {
    id: 2,
    stateId: "star2",
    color: "black",
  },
  {
    id: 3,
    stateId: "star3",
    color: "black",
  },
  {
    id: 4,
    stateId: "star4",
    color: "black",
  },
  {
    id: 5,
    stateId: "star5",
    color: "black",
  }]);
  const [starNumber, setStarNumber] = useState();

  setFiveStars.bind(starNumber);


  const artistClickHandler = (url) => {
    window.location = url;
  };

  useEffect(() => {
    const getMovie = async () => {
      const response = await fetch(
        `${props.baseUrl}movies/${props.match.params.id}`
      );
      const data = await response.json();
      setMovie(data);
    };
    getMovie();
  }, []);

  return (
    <div className="details">
      <Header
        id={props.match.params.id}
        baseUrl={props.baseUrl}
        showBookShowButton
      />
      
      {/* Navigation to home */}
      <div className="back">
        <Typography>
          <Link to="/" > &#60; Back to Home</Link>
        </Typography>
      </div>
      
      {/* Movie Poster */}
      <div className="flex-containerDetails">
        <div className="leftDetails">
          <img src={movie.poster_url} alt={movie.title} />
        </div>

        {/* details of Movie */}
        <div className="middleDetails">
          <div>
            <Typography variant="headline" component="h2">
              {movie.title}
            </Typography>
          </div>
          <br />
          <div>
            <Typography>
              <span className="bold">Genres: </span> {movie.genres.join(", ")}
            </Typography>
          </div>
          
          <div>
            <Typography>
              <span className="bold">Duration:</span> {movie.duration}{" "}
            </Typography>
          </div>

          <div>
            <Typography>
              <span className="bold">Release Date:</span>{" "}
              {new Date(movie.release_date).toDateString()}{" "}
            </Typography>
          </div>
          
          <div>
            <Typography>
              <span className="bold"> Rating:</span> {movie.critics_rating}{" "}
              {movie.rating}{" "}
            </Typography>
          </div>

          <div className="marginTop16">
            <Typography>
              <span className="bold">Plot:</span>{" "}
              <a href={movie.wiki_url}>(Wiki Link)</a> {movie.storyline}{" "}
            </Typography>
          </div>
          
          {/* Attesting Youtube Trailer */}
          <div className="trailerContainer">
            <Typography>
              <span className="bold">Trailer:</span>
            </Typography>
            <YouTube videoId={movie.trailer_url.split("?v=")[1]} opts={opts} />
          </div>
        </div>

        <div className="rightDetails">
          
          {/* To Rate the movie */}
          <Typography>
            <span className="bold">Rate this movie: </span>
          </Typography>
          <Typography>
            {!ratingGiven && fiveStars.map((starNumber, key) =>
            (<StarBorderIcon id={starNumber} onClick=
              {() => {
                setStarNumber(starNumber.stateId);
                setRatingGiven(true);
              }}
              key={key} />
            ))}


            {ratingGiven && fiveStars.map((id, key) => {
              if (id <= starNumber)
                return (<StarBorderIcon id={id} style={{ color: 'yellow' }} key={key} />)
              return (<StarBorderIcon id={id} key={key} />)
            })
            }
          </Typography>

          {/* Adding coresponding Artists */}
          <div className="bold marginBottom16 marginTop16">
            <Typography>
              <span className="bold">Artists:</span>
            </Typography>
          </div>
          <div className="paddingRight">
            <GridList cellHeight={160} cols={2}>
              {movie.artists != null &&
                movie.artists.map((artist) => (
                  <GridListTile
                    className="gridTile"
                    onClick={() => artistClickHandler(artist.wiki_url)}
                    key={artist.id}
                  >
                    <img
                      src={artist.profile_url}
                      alt={artist.first_name + " " + artist.last_name}
                    />
                    <GridListTileBar
                      title={artist.first_name + " " + artist.last_name}
                    />
                  </GridListTile>
                ))}
            </GridList>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;