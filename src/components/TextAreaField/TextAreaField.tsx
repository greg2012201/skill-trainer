import { twMerge } from 'tailwind-merge';

type Props = {
  id: string;
  name: string;
  className?: string;
};

function TextAreaField({ id, name, className }: Props) {
  return (
    <textarea
      className={twMerge(
        'block w-full rounded-lg border-2 p-2.5 text-sm text-neutral-500 outline-none duration-200 focus:border-green-400',
        className,
      )}
      id={id}
      name={name}
    >
      Type your answer here...
    </textarea>
  );
}

export default TextAreaField;
