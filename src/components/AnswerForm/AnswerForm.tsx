import TextAreaField from '@/components/TextAreaField/';
import SendButton from '@/components//SendButton/SendButton';

function AnswerForm() {
  return (
    <form className='relative w-full'>
      <TextAreaField
        id='answer'
        name='answer'
        placeholder='Type your answer here...'
        className='pr-6'
      />
      <div className='flex-start flex w-full'>
        <SendButton className='absolute bottom-2 right-3.5' />
      </div>
    </form>
  );
}

export default AnswerForm;
