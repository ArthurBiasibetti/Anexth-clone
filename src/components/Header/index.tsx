import React, { useState } from 'react';
import Logo from '../../assets/Union.svg';
import { FaBars } from 'react-icons/fa';
import UserIcon from '../../assets/user.svg';

export function Header() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  return (
    <header className="sticky top-0 z-10 w-full bg-white px-9 drop-shadow-xl">
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Logo da Anexth" />
        <div className="flex h-full text-sm text-blue-text">
          <nav className="hidden md:block">
            <ul className="flex h-full space-x-10 ">
              <li className="cursor-pointer border-t-8 border-transparent py-10">
                Home
              </li>
              <li className="cursor-pointer border-t-8 py-10">Prescrições</li>
              <li className="cursor-pointer border-t-8 border-transparent py-10">
                Teleconsulta
              </li>
              <li className="cursor-pointer border-t-8 border-transparent py-10">
                Fale Conosco
              </li>
            </ul>
          </nav>
          <div className="ml-4 flex items-center space-x-5 md:ml-9">
            <div className="h-14 md:border-l md:border-l-gray-100" />
            <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100">
              <img src={UserIcon} alt="foto do usuario" className="mt-2 " />
            </div>
            <span>Dr Caio Rocha</span>
          </div>
          <button
            className="ml-4 p-2 md:hidden"
            onClick={() => setIsMenuCollapsed((oldState) => !oldState)}
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>
      </div>
      {isMenuCollapsed && (
        <div className="flex justify-center md:hidden">
          <nav className="w-full">
            <ul className=" w-full  text-center ">
              <li className="cursor-pointer border-b-8 border-transparent py-6 hover:border-blue-text">
                Home
              </li>
              <li className="cursor-pointer border-b-8 border-transparent border-blue-text py-6">
                Prescrições
              </li>
              <li className="cursor-pointer border-b-8 border-transparent py-6 hover:border-blue-text">
                Teleconsulta
              </li>
              <li className="cursor-pointer border-b-8 border-transparent py-6 hover:border-blue-text">
                Fale Conosco
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
