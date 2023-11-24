type ContainerProps = {
  children: React.ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="relative p-4 md:p-10 w-full flex flex-col justify-center gap-10 after:absolute after:-z-10 after:bg-secondary after:opacity-20 after:w-full after:h-full after:rounded-lg after:inset-0">
      {children}
    </div>
  );
};
