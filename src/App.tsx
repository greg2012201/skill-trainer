import AnswerForm from './components/AnswerForm/AnswerForm';
import PromptController from './components/PromptController';

function App() {
  return (
    <div className='item-center flex flex-col content-center pt-6'>
      <h1 className='text-center text-4xl'>English trainer</h1>
      <PromptController answerForm={<AnswerForm />} />
    </div>
  );
}

export default App;
