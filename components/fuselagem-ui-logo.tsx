import { Button, ButtonProps } from '@nextui-org/react';
import { PlaneTakeoff } from 'lucide-react';
import React, { ComponentProps } from 'react';
import { cnBase } from 'tailwind-variants';

export interface FuselagemUILogoProps extends ComponentProps<'h1'> {

}

export const FuselagemUILogo: React.FC<FuselagemUILogoProps> = ({ className, ...props }) => {
    return (
        <div className='flex items-center gap-2'>
            <FuselagemUIIconLogo />
            <span className={cnBase('font-extrabold text-transparent text-xl sm:text-2xl lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600', className)}>
                Fuselagem UI
            </span>
        </div>
    )
}

export interface FuselagemUIIconLogoProps extends ButtonProps {

}

export const FuselagemUIIconLogo: React.FC<FuselagemUIIconLogoProps> = ({ className, ...props }) => {
    return (
        <Button isIconOnly className={cnBase('bg-gradient-to-tr from-purple-400 to-pink-600 text-white shadow-lg', className)} {...props}>
            <PlaneTakeoff />
        </Button>
    )
}
