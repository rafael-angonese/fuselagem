import { ReactNode } from "react";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-red-500 rounded-lg p-4 m-4 text-white text-lg font-bold"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
