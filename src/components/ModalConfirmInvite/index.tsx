import React from 'react';
import closeIcon from '../../assets/fechar.svg';

export interface ModalConfirmInviteProps {
  personName: string;
  personEmail: string;
  personCellphone: string;
  onClose?: () => void;
  onConfirm?: () => void;
}

export function ModalConfirmInvite({
  personCellphone,
  personEmail,
  personName,
  onConfirm,
  onClose,
}: ModalConfirmInviteProps) {
  return (
    <div className="absolute flex h-screen w-full items-center justify-center bg-black bg-opacity-50">
      <div className="relative flex flex-col rounded bg-white px-24 py-8">
        <button
          className="absolute top-4 right-4"
          onClick={() => !!onClose && onClose()}
        >
          <img src={closeIcon} alt="Fechar modal" />
        </button>
        <span className="mb-5 text-center text-base text-gray">
          Você está convidando:
        </span>
        <span className="text-center text-2xl font-bold text-ligth-blue-400">
          {personName}
        </span>
        <span className="my-1 text-center text-base text-ligth-blue-400">
          {personEmail}
        </span>
        <span className="text-center text-base text-ligth-blue-400">
          {personCellphone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2 $3')}
        </span>
        <span className="my-7 text-center text-sm text-gray">
          Confirma o envio do convite?
        </span>
        <button
          onClick={() => !!onConfirm && onConfirm()}
          type="button"
          className="rounded bg-blue py-4 px-8 uppercase text-white"
        >
          enviar convite
        </button>
        <button
          className="mt-2 bg-transparent  leading-4 text-main"
          onClick={() => !!onClose && onClose()}
        >
          Editar informações
        </button>
      </div>
    </div>
  );
}
