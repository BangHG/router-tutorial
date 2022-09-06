import React from 'react';
// import {Link} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import {Link} from 'react-router-dom';

const About = () => {
  const [searchParams,setSearchParams]= useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');
  
  const onToggleDetail = () =>{
    // 쿼리스트링 조회시 문자열 타입. '문자열' 로 비교
    setSearchParams({mode,detail:detail === 'true'? false : true})
  }
  const onIncreaseMode = () =>{
    // 쿼리스트링 조회시 문자열 타입. parseInt로 정수화
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({mode:nextMode,detail})
  }
  return (
    <div>
      <h1>어바웃</h1>
      <p>어바웃임니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>
      toggle
      </button>
      <button onClick={onIncreaseMode}>
      mode + 1
      </button>     
      
      <div>
        <Link to="/">메인화면으로</Link>
      </div>
    </div>
  );
}; 
export default About;