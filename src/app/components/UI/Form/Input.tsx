type InputProps = {
    name: string,
    type: string,
    value: string,
    placeholder: string,
    id: string,
    error: boolean,
    touched: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input:React.FC<InputProps> = ({ name, type, value, placeholder, id, error, touched, onChange, onBlur }) => {
    return (
      <div className="w-full flex flex-col gap-2 uppercase my-8">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`p-4 bg-transparent ${error && touched ? 'border-red-500' : 'border-primary'} border-b-2 italic text-2xl`}
          placeholder={placeholder}
          required
        />
        <span className={`text-red-500 ${error && touched ? 'opacity-100' : 'opacity-0'} duration-[0.34s] ease-[ease]`}>Please provide correct {id}</span>
      </div>
    );
  };