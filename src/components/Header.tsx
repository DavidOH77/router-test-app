import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-Heading">
        <h2 className="text-center m-3">
          Spotify<span>가 되고싶다</span>
        </h2>
        <p>
          <a href="https://www.spotify.com/">https://www.spotify.com/</a>
        </p>
        <div className="row">
          <div className="col-12">
            <Link className="btn btn-success menu" to="/">
              Home
            </Link>
            <Link className="btn btn-success menu" to="/about">
              About
            </Link>
            <Link className="btn btn-success menu" to="/members">
              Members
            </Link>
            <Link className="btn btn-success menu" to="/songs">
              Songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
