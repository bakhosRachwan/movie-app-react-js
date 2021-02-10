import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const TMDB_BASE_URL = `https://api.themoviedb.org/3`;
const constructUrl = (path) => {
  return `${TMDB_BASE_URL}/person/${path}?api_key=${atob(
    "ZDJmYTdhZDFlMjZhZjA4NDdkMzQ5ZDdkYmQ1ZjkzZTU="
  )}`;
};

// const ActorInfoPage=()=>(){
//   const [person, setPerson] = useState({});
//   let PERSON_ID = props.match.params.id;
//   let SEARCH_URL;
//   useEffect(() => {
//     SEARCH_URL = constructUrl(`person/${PERSON_ID}`);
//     fetch(SEARCH_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         setPerson(data);
//       });
//   }, [PERSON_ID]);

const ActorInfoPage = () => {
  const [actor, setActor] = useState(null);
  const { actid: actorId } = useParams();

  // console.log(actor);

  useEffect(() => {
    fetch(constructUrl(actorId))
      .then((response) => response.json())
      .then((data) => {
        setActor(data);
      });
  }, [actorId]);

  return (
    <div className="actorcont">
      {actor && (
        <div id="bio">
          <div className="actorimage">
            <img
              src={`https://image.tmdb.org/t/p/w500` + actor.profile_path}
              alt="actorImage"
              className="image3"
            />
          </div>
          <div id="actorinfo">
            <div className="namebirth">
              <p className="actorname">{actor.name}</p>
              {actor.birthday !== null ? (
                <p className="birthdate">Date of Birth: {actor.birthday}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <p className="actdo">{actor.biography}</p>
            </div>
            <div className="back">
              <Link
                onClick={() => window.history.back()}
                style={{ textDecoration: "none" }}
              >
                <div className="back2">
                  <MdArrowBack size="2em" />
                  Back
                </div>
                {/* <button className="btn btn-secondary btn-lg">Back</button>  */}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActorInfoPage;
