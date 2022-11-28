import {
  isValidEmail,
  isValidMobilePhone,
} from '@brazilian-utils/brazilian-utils';
import React, { useState } from 'react';
import { Person } from '../../interfaces';
import { Input } from '../Input';
import { IOptions, Select } from '../Select';

interface InviteFormProps {
  onSubmit: (person: Person) => void;
}

const options: IOptions[] = [
  { value: 'MASCULINO', label: 'Masculino' },
  { value: 'FEMININO', label: 'Feminino' },
  { value: 'PREFIRO_NAO_DIZER', label: 'Prefiro não dizer' },
  { value: 'OUTRO', label: 'Outro' },
];

export function InviteForm({ onSubmit }: InviteFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cellphone, setCellphone] = useState('');
  const [gender, setGender] = useState('');
  const [date, setDate] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cellphoneError, setCellphoneError] = useState('');
  const [genderError, setGenderError] = useState('');
  const [dateError, setDateError] = useState('');

  const isValidToSubmitForm =
    !nameError && !emailError && !cellphoneError && !genderError && !dateError;

  const fieldValidator = (): boolean => {
    let isFieldsValid = true;

    if (!name) {
      isFieldsValid = false;
      setNameError('Por favor, preencha um nome.');
    }

    if (!email || !isValidEmail(email)) {
      isFieldsValid = false;
      setEmailError('E-mail inválido, insira um e-mail válido para continuar.');
    }

    if (!cellphone || !isValidMobilePhone(cellphone)) {
      isFieldsValid = false;
      setCellphoneError(
        'Celular inválido, insira um número válido para continuar.'
      );
    }

    if (!gender) {
      isFieldsValid = false;
      setGenderError('Por favor, preencha o campo.');
    }

    if (!date) {
      isFieldsValid = false;
      setDateError('Por favor, preencha uma data.');
    }

    return isFieldsValid;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (fieldValidator()) {
      onSubmit({ email, cellphone, name, gender });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-fit w-full max-w-lg flex-col items-center  rounded-md py-8 px-16 shadow-highlight"
    >
      <h1 className="text-center text-lg uppercase text-blue">
        Convidar um novo paciente
      </h1>
      <h3 className="mt-1 mb-4 text-center text-base text-gray">
        Ao enviar um convite para o paciente se cadastrar, você pode montar uma
        prescrição que ele vai receber no momento que se cadastrar.
      </h3>
      <div className="flex w-full flex-col flex-wrap items-center space-y-4">
        <Input
          onClick={() => setNameError('')}
          value={name}
          onChange={(value) => setName(value)}
          placeholder="Nome"
          type="text"
          error={nameError}
        />

        <Input
          onClick={() => setEmailError('')}
          value={email}
          onChange={(value) => setEmail(value)}
          placeholder="E-mail"
          type="text"
          error={emailError}
        />

        <Input
          onClick={() => setCellphoneError('')}
          value={cellphone}
          onChange={(value) => setCellphone(value)}
          placeholder="Celular"
          type="text"
          error={cellphoneError}
        />

        <div className="flex w-full flex-wrap gap-2">
          <div className="grow basis-1/3">
            <Select
              onClick={() => setGenderError('')}
              onChange={(option) => setGender(option.value)}
              placeholder="Gênero"
              options={options}
              error={genderError}
            />
          </div>
          <div className="grow basis-1/3">
            <Input
              onClick={() => setDateError('')}
              value={date}
              onChange={(value) => setDate(value)}
              type="date"
              className=" text-ligh-gray"
              error={dateError}
            />
          </div>
        </div>

        <input
          type="submit"
          disabled={!isValidToSubmitForm}
          value="enviar convite"
          className={`cursor-pointer rounded ${
            !isValidToSubmitForm ? 'bg-blue-disabled' : 'bg-blue'
          } py-2 px-8 uppercase text-white`}
        />
      </div>
    </form>
  );
}
