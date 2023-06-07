import AnswerForm from './components/AnswerForm/AnswerForm';
import PromptController from '@/components/PromptController';
import TaskGenerator from '@/components/TaskGenerator';
import ChatMessageView from '@/components/ChatMessageView';
import ChatMessageItem from '@/components/ChatMessageItem';

function App() {
  return (
    <div className='item-center flex flex-col content-center space-y-8 pt-6'>
      <h1 className='text-center text-4xl'>English trainer</h1>
      <div className='ml-auto mr-auto flex w-1/2 flex-col'>
        <ChatMessageView
          items={[
            'lorem ipsum',
            'handle that',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat mi eget turpis auctor dignissim. Integer ac dapibus ligula. Sed suscipit ultricies metus, id gravida metus tempor ac. Vestibulum id nisi libero. Nullam fringilla, ligula non pulvinar hendrerit, nulla urna congue magna, eu semper mauris enim at nisi. Aliquam erat volutpat. In vitae purus ac metus aliquam bibendum in ac mauris. Nunc volutpat feugiat ipsum, in ultricies odio ultricies at. Maecenas pharetra lobortis lacus at varius. Ut fringilla purus velit, sed varius odio scelerisque ut. Donec maximus efficitur mauris, eu ultrices massa ullamcorper id. Sed consectetur venenatis libero, eu malesuada ante dignissim nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames a',
          ].map((text, index) => {
            return <ChatMessageItem isEven={index % 2 === 0}>{text}</ChatMessageItem>;
          })}
        />
        <PromptController taskGenerator={<TaskGenerator />} answerForm={<AnswerForm />} />
      </div>
    </div>
  );
}

export default App;
