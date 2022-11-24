import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { InviteForm } from '../../components/inviteForm';
import { ModalConfirmInvite } from '../../components/ModalConfirmInvite';
import { ModalConclusionInvite } from '../../components/ModalConclusionInvite';
import searchIcon from '../../assets/busca.svg';
import { Person } from '../../interfaces';

export function MainPage() {
  const [invitedPerson, setInvitedPerson] = useState<Person>({} as Person);
  const [showModalConfirmInvite, setShowModalConfirmInvite] = useState(false);
  const [showModalConclusionInvite, setShowModalConclusionInvite] =
    useState(false);

  const onSubmitInvitePersonForm = (person: Person) => {
    setInvitedPerson(person);
    setShowModalConfirmInvite(true);
  };

  const onConfirmInvite = () => {
    setShowModalConfirmInvite(false);
    setShowModalConclusionInvite(true);
  };

  return (
    <div
      className={`flex h-full flex-col ${
        showModalConfirmInvite && 'overflow-hidden'
      }`}
    >
      <Header />
      <div className="min-h-[290px] bg-blue">
        <div className=" mx-auto w-full max-w-5xl">
          <h1 className="mt-9 mb-4 text-2xl font-bold text-white">
            Prescrições
          </h1>
          <hr className="mb-9 h-1 w-2/5 border-none bg-gradient-to-r from-white to-ligh-blue" />
          <h1 className="mx-auto w-fit text-center text-2xl text-white">
            Encontre um paciente para prescrever:
          </h1>
          <h3 className="mx-auto max-w-xl text-center font-light text-white">
            Aqui você pode buscar por E-mail ou CPF para encontrar o paciente e
            começar a montar a sua prescrição
          </h3>
          <div className="mx-auto mt-6 flex max-w-md">
            <Input type="text" />
            <button
              type="button"
              className="ml-2 rounded bg-dark-blue py-2 px-8 shadow-input"
            >
              <img src={searchIcon} alt="Buscar paciente" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex h-fit flex-col items-center py-6">
        <h3 className="mb-6 text-warning-text">
          Nenhum paciente foi encontrado
        </h3>
        <InviteForm onSubmit={onSubmitInvitePersonForm} />
      </div>
      {showModalConfirmInvite && (
        <ModalConfirmInvite
          personCellphone={invitedPerson.cellphone}
          personEmail={invitedPerson.email}
          personName={invitedPerson.name}
          onConfirm={onConfirmInvite}
          onClose={() => setShowModalConfirmInvite(false)}
        />
      )}

      {showModalConclusionInvite && (
        <ModalConclusionInvite
          personEmail={invitedPerson.email}
          personName={invitedPerson.name}
          onClose={() => setShowModalConclusionInvite(false)}
        />
      )}
    </div>
  );
}
