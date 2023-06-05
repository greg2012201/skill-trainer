type Props = {
  id: string;
  name: string;
};

function TextAreaField({ id, name }: Props) {
  return (
    <textarea
      className='block p-2.5 w-full text-sm text-gray-800 rounded-lg border-2   
      focus:border-gray-600 outline-none duration-200'
      id={id}
      name={name}
    >
      Type your answer here...
    </textarea>
  );
}

export default TextAreaField;
