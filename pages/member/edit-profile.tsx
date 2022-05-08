import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organisms/Sidebar';
import { JwtPayloadTypes, UserTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';

interface UserStateTypes {
  email: string;
  username: string;
  avatar: any;
}

export default function EditProfile() {
  const router = useRouter();

  const [user, setUser] = useState<UserStateTypes>({
    avatar: '',
    username: '',
    email: '',
  });

  const [imagePreview, setImagePreview] = useState('/');

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      const jwtToken = atob(token);
      const payload: JwtPayloadTypes = jwtDecode(jwtToken);
      const userData: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      userData.avatar = `${IMG}/${userData.avatar}`;

      setUser(userData);
    }
  }, []);

  const onSubmit = async () => {
    const data = new FormData();
    data.append('image', user.avatar);
    data.append('name', user.username);

    const response = await updateProfile(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Update Success Harap Login Kembali');

      Cookies.remove('token');

      router.push('/sign-in');
    }
  };

  return (
    <>
      <Sidebar activeMenu="settings" />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview === '/' ? (
                        <img
                          src={user.avatar}
                          width={90}
                          height={90}
                          alt="icon upload"
                          style={{ borderRadius: '100%' }}
                        />
                      ) : (
                        <img
                          src={imagePreview}
                          width={90}
                          height={90}
                          alt="icon upload"
                          style={{ borderRadius: '100%' }}
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={(event) => {
                        const image = event.target.files![0];

                        setImagePreview(URL.createObjectURL(image));
                        return setUser({
                          ...user,
                          avatar: image,
                        });
                      }}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.username}
                    onChange={(event) => setUser({ ...user, username: event.target.value })}
                  />
                </div>
                <div className="pt-30">
                  <Input
                    label="Email Address"
                    disabled
                    value={user.email}
                  />
                </div>
                {/* <div className="pt-30">
                  <Input label="Phone" />
                </div> */}
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>

            </div>

          </div>
        </main>
      </section>
    </>
  );
}
