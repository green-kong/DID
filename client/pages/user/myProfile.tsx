import { useEffect, useState } from 'react';
import axios from 'axios';
import MyProfileStyled from '../../styles/myProfile';

const MyProfile = () => {
  const [profile, setProfile] = useState([]);

  const viewProfile = async () => {
    const response = await axios.post(
      'http://localhost:4000/viewProfile',
      null,
    );
    setProfile(response.data.result);
  };

  const view = () => {
    return (
      <>
        {profile.map((v: any, k) => {
          return (
            <ul key={k}>
              <li>{v.userid}</li>
              <li>{v.idx}</li>
            </ul>
          );
        })}
      </>
    );
  };

  useEffect(() => {
    viewProfile();
  }, []);

  // if (profile.result.length === 0) return;
  // if (profile.length === 0) return;
  // console.log(profile);
  return (
    <>
      <MyProfileStyled>
        <div className="wrap">
          <div className="header">내 프로필보기 페이지다~</div>
          <div>{view()}</div>
        </div>
      </MyProfileStyled>
    </>
  );
};

export default MyProfile;
