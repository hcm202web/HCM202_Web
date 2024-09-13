import React from 'react';

interface ToggleGroupProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
}

const ToggleGroupProject: React.FC<ToggleGroupProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-row space-x-3">
      {options.map((option) => (
        <button
          key={option}
          className={`border-2 rounded-2xl w-32 h-32 ${selected === option ? 'border-[red] text-black' : 'border-[black] text-black'}`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleGroupProject;