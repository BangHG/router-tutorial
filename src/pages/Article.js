// ##13.5 중첩된 라우트

import {useParams} from 'react-router-dom';

const Article = () =>{
  const {id} = useParams();
  return(
    <div>
      <h2>게시글 {id} </h2>
    </div>
  );
};

export default Article;