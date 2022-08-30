import React from 'react';
// import {Link} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
const About = () => {
  // ##13.4.2. 쿼리스트링
  const location = useLocation();
  return (
    <div>
      <h1>어바웃</h1>
      <p>어바웃임니다.</p>
      {/* <Link to="/">메인으로</Link> */}
      <p>쿼리스트링: {location.search}</p>
    </div>
  );
};

export default About;


