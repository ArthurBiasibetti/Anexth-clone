import React from 'react';
import ReactSelect, {
  IndicatorSeparatorProps,
  StylesConfig,
} from 'react-select';

export type IOptions = { value: string; label: string };

interface SelectProps {
  placeholder: string;
  options?: IOptions[];
  error?: string;
  onChange?: (option: IOptions) => void;
  onClick?: () => void;
}

const IndicatorSeparator = ({ innerProps }: IndicatorSeparatorProps) => {
  return <span />;
};

export function Select({
  placeholder,
  options = [],
  error,
  onChange,
  onClick,
}: SelectProps) {
  return (
    <div className="relative w-full" onClick={() => !!onClick && onClick()}>
      <ReactSelect
        placeholder={placeholder}
        components={{ IndicatorSeparator }}
        options={options}
        onChange={(option) => !!onChange && onChange(option as IOptions)}
        className={`react-select-container ${error ? 'error' : ''}`}
        classNamePrefix="react-select"
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
