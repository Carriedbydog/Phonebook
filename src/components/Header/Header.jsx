import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import { logoutThunk } from 'redux/auth/operations';

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutThunk());
  };
  const isLogin = useSelector(selectIsLoggedIn);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 bg-red-100 py-8">
      <ul className="flex gap-10 p-4">
        <li>
          <NavLink className="font-bold hover:text-blue-500" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="font-bold hover:text-blue-500" to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden overflow-hidden">
          <div
            className="HAMBURGER-ICON space-y-2 p-4"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ">
              {!isLogin ? (
                <>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink
                      onClick={() => setIsNavOpen(prev => !prev)}
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <NavLink
                      onClick={() => setIsNavOpen(prev => !prev)}
                      to="/register"
                    >
                      Sign up
                    </NavLink>
                  </li>
                </>
              ) : (
                <div>
                  <button
                    className="p-4 font-semibold rounded-xl text-white bg-blue-500 hover:bg-blue-700"
                    onClick={handleLogout}
                  >
                    Sign out
                  </button>
                </div>
              )}
            </ul>
          </div>
        </section>

        {!isLogin ? (
          <ul className="items-center DESKTOP-MENU hidden space-x-8 lg:flex px-4">
            <li>
              <NavLink className="font-bold hover:text-blue-500" to="/login">
                Login
              </NavLink>
            </li>
            <li>
              <button
                className="p-3 font-semibold rounded-xl text-l text-white bg-blue-500 hover:bg-blue-700  "
                to="/register"
              >
                Sign up
              </button>
            </li>
          </ul>
        ) : (
          <div>
            <UserMenu />
          </div>
        )}
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: linear-gradient(lightblue,purple);
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        overflow: hidden;
      }
    `}</style>
    </div>
  );
};
