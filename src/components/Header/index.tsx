import React from 'react';
import Logo from '../../assets/Union.svg';
import UserIcon from '../../assets/user.svg';

export function Header() {
  return (
    <header className="sticky top-0 left-0 flex w-full items-center justify-around bg-white drop-shadow-xl">
      <img src={Logo} alt="Logo da Anexth" />
      <div className="flex h-full text-sm text-blue-text">
        <nav>
          <ul className="flex h-full space-x-10 ">
            <li className="cursor-pointer py-10">Home</li>
            <li className="active-page relative cursor-pointer py-10">
              Prescrições
            </li>
            <li className="cursor-pointer py-10">Teleconsulta</li>
            <li className="cursor-pointer py-10">Fale Conosco</li>
          </ul>
        </nav>
        <div className="ml-9 flex items-center space-x-5">
          <div className="h-14 border-l border-l-gray-100" />
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-100">
            <img src={UserIcon} alt="foto do usuario" className="mt-2" />
          </div>
          <span>Dr Caio Rocha</span>
        </div>
      </div>
    </header>
  );
}
