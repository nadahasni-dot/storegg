import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getGameCategories } from '../services/player';

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState('');

  const getGameCategoriesAPI = useCallback(async () => {
    const data = await getGameCategories();
    setCategories(data);
  }, []);

  useEffect(() => {
    getGameCategoriesAPI();
  }, []);

  const onSubmit = () => {
    console.log('favorite: ', favorite);
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    <Image src="/icon/upload.svg" width={120} height={120} alt="upload" />
                  </label>
                  <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
              <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite
                  Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  <option
                    value=""
                    disabled
                  >
                    Please select category
                  </option>
                  {categories.map((category) => (
                    <option
                      key={category._id}
                      value={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">

              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>

              <Link href="/">
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  role="button"
                >
                  Terms &
                  Conditions
                </a>

              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
