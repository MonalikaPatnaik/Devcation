import { Link } from 'react-router-dom';
import { RxHome } from 'react-icons/rx';
import errorImg from '../assets/pageNotFound-1.png';
import Navbar from '../components/Navbar/Navbar';

function RouteNotFound() {
  return (
    <div className=" min-vh-100 bg-light">
      <Navbar/>
      <div className="d-flex flex-column align-items-center justify-content-center mt-5">
        <img src={errorImg} className="w-25" alt="Error 404" />
        <div className="w-75 text-center font-mono py-3 px-3">
          <div className="">
          <p className="fs-4 fs-md-5 fs-lg-6 font-monospace text-center">
            Sorry, the page you were looking for isn&rsquo;t found here.
          </p>
            <div className="pt-3">
              <Link to="/" className="btn btn-success border-2 border-black font-weight-bold rounded px-2 py-1" >
                <RxHome className="me-2 mb-1" />
                Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RouteNotFound;
