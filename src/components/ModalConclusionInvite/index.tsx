import React from 'react';
import closeIcon from '../../assets/fechar.svg';

export interface ModalConclusionInviteProps {
  personName: string;
  personEmail: string;
  onClose?: () => void;
}

export function ModalConclusionInvite({
  personEmail,
  personName,
  onClose,
}: ModalConclusionInviteProps) {
  return (
    <div className="absolute flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col rounded bg-white px-24 py-8">
        <button
          className="absolute top-4 right-4"
          onClick={() => !!onClose && onClose()}
        >
          <img src={closeIcon} alt="Fechar modal" />
        </button>
        <span className="text-center text-2xl uppercase text-gray">
          PARABÉNS!
        </span>
        <span className="my-5 text-center text-sm text-gray">
          Você convidou:
        </span>
        <span className="text-center text-2xl font-bold text-ligth-blue-400">
          {personName}
        </span>
        <span className="my-1 text-center text-base text-ligth-blue-400">
          {personEmail}
        </span>
        <button
          onClick={() => !!onClose && onClose()}
          type="button"
          className="mt-7 rounded bg-blue py-2 px-8 uppercase leading-4 text-white"
        >
          CADASTRAR PRESCRIÇÃO
        </button>
      </div>
    </div>
  );
}
