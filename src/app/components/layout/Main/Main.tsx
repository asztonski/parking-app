import { Container } from "../Container/Container";


type MainProps = {
  children: React.ReactNode,
}

export const Main:React.FC<MainProps> = ({ children }) => {
  

  return (
    <main className="w-full max-w-3xl my-10 px-5 m-auto">
      <Container>{children}</Container>
    </main>
  );
};
