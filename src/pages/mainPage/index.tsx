import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { InviteForm } from '../../components/inviteForm';
import { ModalConfirmInvite } from '../../components/ModalConfirmInvite';
import { ModalConclusionInvite } from '../../components/ModalConclusionInvite';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import searchIcon from '../../assets/busca.svg';
import { Person } from '../../interfaces';
import { serachPerson } from '../../service/api/searchPerson';

export function MainPage() {
  const [invitedPerson, setInvitedPerson] = useState<Person>({} as Person);
  const [isLoading, setIsLoading] = useState(false);
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

  const onSearchPerson = () => {
    setIsLoading(true);
    serachPerson()
      .then(() => {})
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className={`flex h-full flex-col ${
        showModalConfirmInvite && 'overflow-hidden'
      }`}
    >
      <Header />
      <div className="bg-blue py-9 px-8">
        <div className=" mx-auto w-full max-w-5xl">
          <h1 className=" mb-4 text-2xl font-bold text-white">Prescrições</h1>
          <hr className="mb-9 h-1 w-3/4  border-none bg-gradient-to-r from-white to-ligh-blue sm:w-2/5" />
          <h1 className="mx-auto w-fit text-center text-2xl text-white">
            Encontre um paciente para prescrever:
          </h1>
          <h3 className="mx-auto max-w-xl text-center font-light text-white">
            Aqui você pode buscar por E-mail ou CPF para encontrar o paciente e
            começar a montar a sua prescrição
          </h3>
          <div className="mx-auto mt-6 flex max-w-md flex-wrap gap-2">
            <div className="grow basis-3/4">
              <Input type="text" />
            </div>
            <button
              type="button"
              className={`flex min-w-[80px] grow basis-1/5 items-center justify-center rounded bg-dark-blue py-2 px-8 shadow-input ${
                isLoading && 'opacity-75'
              }`}
              onClick={onSearchPerson}
              disabled={isLoading}
            >
              {isLoading ? (
                <AiOutlineLoading3Quarters
                  className={`animate-spin fill-white`}
                />
              ) : (
                <img
                  src={searchIcon}
                  alt="Buscar paciente"
                  className="h-4 w-4 shrink-0"
                />
              )}
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
