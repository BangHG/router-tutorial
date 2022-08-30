// ##13.5 중첩된 라우트

import {Link} from 'react-router-dom';

const Articles = () =>{
  const {id} = useParams();
  return(
    <div>
      <h2>게시글 {id} </h2>
    </div>
    // <ul>
    //   <li>
    //     <Link to="article/1">게시물 1</Link>
    //   </li>
    //   <li>
    //     <Link to="article/2">게시물 2</Link>
    //   </li>
    //   <li>
    //     <Link to="article/3">게시물 3</Link>
    //   </li>
    // </ul>
  )
}