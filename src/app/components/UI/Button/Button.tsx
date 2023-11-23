type ButtonProps = {
    children: React.ReactNode,
    type?: 'submit',
}

export const Button:React.FC<ButtonProps> = ({ children, type }) => {
    return (
        <button type={type} className="bg-transparent border-primary border-2 p-4 uppercase text-xl focus:bg-secondary hover:bg-secondary duration-[0.34s] ease-[ease]">{children}</button>
    )
}