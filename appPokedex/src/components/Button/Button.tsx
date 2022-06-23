import { ButtonHTMLAttributes } from 'react';
import './Button.css';

type buttonType = ButtonHTMLAttributes<HTMLElement>;

export function Button(props : buttonType ){

    return(
        <button className='button' {...props} />
    );
}