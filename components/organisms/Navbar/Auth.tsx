import Link from 'next/link';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';

export default function Auth() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: '',
    username: '',
  });

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload:JwtPayloadTypes = jwtDecode(jwtToken);
      const userData: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userData.avatar = `${IMG}/${userData.avatar}`;

      setIsLogin(true);
      setUser(userData);
    } else {
      setIsLogin(false);
      setUser({
        avatar: '',
        username: '',
      });
    }
  }, [isLogin]);

  const onLogout = () => {
    Cookies.remove('token');
    setIsLogin(false);
    setUser({
      avatar: '',
      username: '',
    });
    router.push('/');
  };

  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none" />
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt={user.username}
            />
          </a>

          <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
            <li><Link href="/member"><a className="dropdown-item text-lg color-palette-2">My Profile</a></Link></li>
            <li><Link href="/"><a className="dropdown-item text-lg color-palette-2">Wallet</a></Link></li>
            <li>
              <Link href="/member/edit-profile"><a className="dropdown-item text-lg color-palette-2">Account Settings</a></Link>
            </li>
            <li onClick={onLogout}>
              <a className="dropdown-item text-lg color-palette-2">Log Out</a>
            </li>
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item my-auto">
      <Link href="/sign-in">
        <a
          className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
          role="button"
        >
          Sign
          In
        </a>
      </Link>
    </li>
  );
}
