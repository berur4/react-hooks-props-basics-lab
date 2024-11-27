import React from "react";

function Links({ github, linkedin }) {
  return (
    <div id="links">
      <h3>Links</h3>
      <a href={github} target="Liza" rel="https://github.com/liza">
        {github}
      </a>
      <a href={linkedin} target="Liza" rel="https://www.linkedin.com/in/liza/">
        {linkedin}
      </a>
    </div>
  );
}

export default Links;
