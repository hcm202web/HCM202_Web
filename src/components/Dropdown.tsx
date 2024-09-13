import { useState } from 'react';

interface DropdownProps {
  options: string[];
  defaultOption: string;
  onOptionSelected: (option: string) => void;
  bgColor: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  onOptionSelected,
  bgColor
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onOptionSelected(option);
  };

  return (
    <div className="relative max-w-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: bgColor }} 
        className={`w-40 p-1.5 text-left text-white rounded-md border-custom-blue focus:border-custom-blue block relative`}
      >
        {selectedOption}
        <span
          className={`ml-3 transform -translate-y-1/2 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="absolute w-full mt-1 rounded-md shadow-custom bg-white z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`${
                selectedOption === option ? 'bg-slate-200 text-black rounded-md' : ''
              } block w-full text-left px-4 py-2 text-custom-black rounded-md`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
