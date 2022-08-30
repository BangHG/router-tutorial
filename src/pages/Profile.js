// ## 13.4 URL 파라미터와 쿼리스트링
// ## 13.4.1 URL 파라미터
import { useParams } from "react-router-dom";

const data = {
  me:{
    name:'현경',
    desc:'나는 나인걸'
  },
  gildong:{
    name:'길동',
    desc:'호부호형를 못하고'
  }
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];
  return (
    <div>
      <h1>프로필</h1>
      <p>프로필입니다.</p>
      { profile ? (
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.desc}</p>
      </div>
      ):(
        <p>존재하지 않는 프로필입니다.</p>
      )}        
    </div>
  );
};

export default Profile;