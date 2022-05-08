import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Profile() {
  const [user, setUser] = useState({
    avatar: '',
    username: '',
    email: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload:JwtPayloadTypes = jwtDecode(jwtToken);
      const userData: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userData.avatar = `${IMG}/${userData.avatar}`;

      setUser(userData);
    } else {
      setUser({
        avatar: '',
        username: '',
        email: '',
      });
    }
  }, []);

  return (
    <div className="user text-center pb-50 pe-30">
      <img src={user.avatar} width="90" height="90" className="img-fluid mb-20 img-dashboard" alt="" />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
