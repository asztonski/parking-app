type InputProps = {
    label: string,
    name: string,
    type: string,
    value: string,
    placeholder: string,
    onChange: () => void;
}

export const Input:React.FC<InputProps> = ({ label, name, type, value, placeholder, onChange }) => {
    return (
      <div className="w-full flex flex-col gap-6 uppercase text-2xl">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="p-4 bg-transparent border-primary border-b-2 italic"
          placeholder={placeholder}
          required
        />
      </div>
    );
  };