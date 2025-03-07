import React from "react";

function Header() {
  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg class="bi me-2" width="40" height="32">
            </svg>
            <span class="fs-4">CSE-AI</span>
          </a>

          <ul class="nav nav-pills">
            <li class="nav-item">
              <a href="/xyz" class="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/xyz" class="nav-link">
                Github
              </a>
            </li>
            <li class="nav-item">
              <a href="/xyz" class="nav-link">
                About Us
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default Header;