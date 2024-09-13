import React, { useState, useEffect, useRef } from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import { useStore } from '../store';
import Dropdown from '../components/Dropdown';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { logout, userName } = useStore();

  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && !node.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleClickChange = (option: string) => {
    console.log(option + " option ================")
    switch (option) {
      case "Chương 1":
        navigate("/Chapter-1");
        break;
      case "Chương 2":
        navigate("/Chapter-2");
        break;
    }
  }

  const handleMainMenuButton = () => {
    navigate("/main-menu");
  }
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#232323] rounded-b-lg sticky top-0 z-[9999]">
      <div className="px-5">
        <div className="flex flex-row justify-start items-center">
          <div className="aspect-auto w-40 p-3">
            <img src={logo} alt="logo" className="w-1/2 h-1/2 aspect-auto pointer-events-none" />
          </div>
          <div className='h-full w-32'>
            <button className='text-white text-bold' onClick={handleMainMenuButton}> TRANG CHỦ</button>
          </div>
          <div>
            <Dropdown
              options={["Chương 1", "Chương 2"]}
              defaultOption='Chương 1'
              onOptionSelected={handleClickChange}
              bgColor='#232323'
            />
          </div>
          <div
            className="flex flex-col justify-end items-center space-x-2 min-w-24 ml-auto"
            ref={node}
          >
            <div className="flex flex-col w-40" onClick={() => setIsOpen(!isOpen)}>
              <div className='flex flex-row justify-center items-center space-x-2'>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  className="cursor-pointer"
                >
                  <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                  <path
                    d="M17.5 30.1C13.125 30.1 9.2575 27.86 7 24.5C7.0525 21 14 19.075 17.5 19.075C21 19.075 27.9475 21 28 24.5C26.8431 26.2227 25.2803 27.6345 23.4492 28.6111C21.6182 29.5876 19.5752 30.0989 17.5 30.1ZM17.5 5.25C18.8924 5.25 20.2277 5.80312 21.2123 6.78769C22.1969 7.77226 22.75 9.10761 22.75 10.5C22.75 11.8924 22.1969 13.2277 21.2123 14.2123C20.2277 15.1969 18.8924 15.75 17.5 15.75C16.1076 15.75 14.7723 15.1969 13.7877 14.2123C12.8031 13.2277 12.25 11.8924 12.25 10.5C12.25 9.10761 12.8031 7.77226 13.7877 6.78769C14.7723 5.80312 16.1076 5.25 17.5 5.25ZM17.5 0C15.2019 0 12.9262 0.452651 10.803 1.33211C8.67984 2.21157 6.75066 3.50061 5.12563 5.12563C1.84374 8.40752 0 12.8587 0 17.5C0 22.1413 1.84374 26.5925 5.12563 29.8744C6.75066 31.4994 8.67984 32.7884 10.803 33.6679C12.9262 34.5474 15.2019 35 17.5 35C22.1413 35 26.5925 33.1563 29.8744 29.8744C33.1563 26.5925 35 22.1413 35 17.5C35 7.8225 27.125 0 17.5 0Z"
                    fill="#8B8B8B"
                  />
                </svg>
                <span className="block w-full text-left  text-white cursor-pointer select-none">
                  {userName ? `${userName}` : "Username"}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={`cursor-pointer ${isOpen ? '' : '-rotate-90'}`}>
                  <path d="M3.40604 6.23536C3.32648 6.16018 3.23289 6.1014 3.13062 6.06239C3.02835 6.02338 2.91939 6.00489 2.80997 6.00799C2.70055 6.01108 2.59281 6.0357 2.49291 6.08043C2.39301 6.12516 2.30289 6.18913 2.22771 6.26869C2.15253 6.34825 2.09375 6.44184 2.05474 6.54412C2.01572 6.64639 1.99724 6.75535 2.00033 6.86476C2.00343 6.97418 2.02805 7.08192 2.07278 7.18183C2.11751 7.28173 2.18148 7.37185 2.26104 7.44703L9.76104 14.5304C9.91577 14.6766 10.1206 14.7581 10.3335 14.7581C10.5465 14.7581 10.7513 14.6766 10.906 14.5304L18.4069 7.44703C18.4882 7.37234 18.5538 7.28225 18.6 7.18197C18.6462 7.0817 18.672 6.97325 18.6759 6.86292C18.6798 6.75259 18.6618 6.64259 18.6228 6.53929C18.5839 6.43599 18.5248 6.34146 18.449 6.2612C18.3732 6.18093 18.2822 6.11652 18.1813 6.07172C18.0804 6.02691 17.9716 6.0026 17.8613 6.0002C17.7509 5.99779 17.6411 6.01734 17.5384 6.05771C17.4356 6.09808 17.3419 6.15847 17.2627 6.23536L10.3335 12.7787L3.40604 6.23536Z" fill="white" />
                </svg>
              </div>
              {isOpen && (
                <div className="absolute top-16 w-40 rounded-lg bg-white ">
                  <div className="h-8 hover:text-white text-black hover:bg-[#7C7C7C] rounded-t-lg flex flex-row justify-start items-center p-2">
                    <span
                      onClick={() => {
                        console.log('Đăng xuất');
                        logout();
                        setIsOpen(false);
                      }}
                      className="block w-full text-left cursor-pointer select-none"
                    >
                      Log out
                    </span>
                    <RiLogoutBoxRLine className="" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
