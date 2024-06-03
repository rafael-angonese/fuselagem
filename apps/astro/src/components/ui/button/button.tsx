import React, { type ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {

}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <>
            <button {...props}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >{children}</button>
        </>
    )
}