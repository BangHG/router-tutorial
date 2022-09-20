// ##13.5 중첩된 라우트

import {Link, Outlet} from 'react-router-dom';

const Articles = () =>{  
  return(
    <div>    
      {/* <h2>아티클 리스트</h2>   */}
      <Outlet />
      띠용
        <ul>
          <li>
            <Link to="/articles/1">게시물 1</Link>
          </li>
          <li>
            <Link to="/articles/2">게시물 2</Link>
          </li>
          <li>
            <Link to="/articles/3">게시물 3</Link>
          </li>
          <li>
            <Link to="/articles/4">게시물 4</Link>
          </li>
        </ul>
    </div>
  );
};

export default Articles;