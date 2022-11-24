import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'date' | 'email';
  className?: string;
  placeholder?: string;
  error?: string;
  value?: string;
  max?: string;
  onChange?: (value: string) => void;
  onClick?: () => void;
}
export function Input({
  type,
  className,
  placeholder,
  error,
  value,
  onChange,
  onClick,
}: InputProps) {
  return (
    <div className="relative w-full">
      <input
        value={value}
        className={`min-h-[38px] w-full rounded border ${
          error ? 'border-red-error' : 'border-blue'
        } px-8 text-gray shadow-input placeholder:text-ligh-gray ${className}`}
        placeholder={placeholder}
        type={type}
        onChange={(event) => !!onChange && onChange(event.target.value)}
        onClick={() => !!onClick && onClick()}
      />
      {!!error && (
        <div
          className="absolute -top-9 left-4 h-fit rounded bg-red-error p-2 leading-3 shadow-input
        before:absolute before:-bottom-2 before:border-l-8 before:border-r-8 before:border-t-8 before:border-transparent before:border-t-red-error before:content-['']"
        >
          <span className="text-[0.625rem]  text-white">{error}</span>
        </div>
      )}
    </div>
  );
}
