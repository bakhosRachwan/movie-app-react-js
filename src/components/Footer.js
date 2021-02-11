import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 id="git">
              Follow us on GitHub <FaGithub size="2em" />
            </h5>

            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/JanaZR9"
                  className="badge badge-secondary  mr-4"
                  target="_blank"
                  id="listItems1"
                >
                  Jana Zrayka
                </a>
                <a
                  href="https://github.com/sallyalsardouk"
                  className="badge badge-secondary mr-4"
                  target="_blank"
                  id="listItems2"
                >
                  Sally Sardouk
                </a>
                <a
                  href="https://github.com/marwa-shahal"
                  className="badge badge-secondary mr-4"
                  target="_blank"
                  id="listItems3"
                >
                  Marwa Shahal
                </a>
                <a
                  href="https://github.com/bakhosRachwan"
                  className="badge badge-secondary mr-4"
                  target="_blank"
                  id="listItems4"
                >
                  Bakhos Rachwan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm" id="right">
            &copy;{new Date().getFullYear()} All rights reserved | Terms Of
            Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
