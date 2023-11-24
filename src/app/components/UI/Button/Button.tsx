type ButtonProps = {
  children: React.ReactNode;
  type?: "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      role="button"
      data-testid="button"
      onClick={onClick}
      type={type}
      className={`bg-transparent border-primary border-2 p-4 uppercase text-xl focus:bg-secondary hover:bg-secondary duration-[0.34s] ease-[ease] ${
        disabled ? "pointer-events-none opacity-30" : ""
      }`}
    >
      {children}
    </button>
  );
};
