import { Link } from "react-router-dom";
import notFoundImg from "./../../assests/imgs/not_found.svg";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div>
      <img
        src={notFoundImg}
        alt="not-found"
        className="my-5 w-50 text-center"
      />
      <Link to="/">
        <p>
          Back To Home
          <span className="ms-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
