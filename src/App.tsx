import AnswerForm from './components/AnswerForm/AnswerForm';
import PromptController from '@/components/PromptController';
import TaskGenerator from '@/components/TaskGenerator';

function App() {
  return (
    <div className='item-center flex flex-col content-center pt-6'>
      <h1 className='text-center text-4xl'>English trainer</h1>
      <PromptController taskGenerator={<TaskGenerator />} answerForm={<AnswerForm />} />
    </div>
  );
}

export default App;
