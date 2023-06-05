type Props = {
  id: string;
  name: string;
};

function TextAreaField({ id, name }: Props) {
  return (
    <textarea
      className='block w-full rounded-lg border-2 p-2.5 text-sm text-gray-800   
      outline-none duration-200 focus:border-gray-600'
      id={id}
      name={name}
    >
      Type your answer here...
    </textarea>
  );
}

export default TextAreaField;
