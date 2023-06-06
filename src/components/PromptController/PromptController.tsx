type Props = Record<'answerForm' | 'taskGenerator', JSX.Element>;

function PromptController({ answerForm, taskGenerator }: Props): JSX.Element {
  return (
    <div className='relative ml-auto mr-auto flex w-1/2 flex-col pt-8'>
      {taskGenerator}
      {answerForm}
    </div>
  );
}

export default PromptController;
