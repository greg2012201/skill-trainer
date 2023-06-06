import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  handleOnClick(e: MouseEvent<HTMLButtonElement>): void;
  children: JSX.Element | string;
  className?: string;
  icon?: JSX.Element;
};

function Button({ handleOnClick, children, className, icon }: Props): JSX.Element {
  return (
    <button
      type='button'
      onClick={handleOnClick}
      className={twMerge(
        'flex items-center rounded-md bg-green-400 p-1 text-sm text-white transition-all duration-300 hover:bg-green-300',
        className,
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;
