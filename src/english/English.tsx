import AnswerForm from '@/shared/components/AnswerForm/AnswerForm';
import ChatMessageItem from '@/shared/components/ChatMessageItem';
import ChatMessageView from '@/shared/components/ChatMessageView';
import PromptController from '@/shared/components/PromptController';
import TaskGenerator from '@/shared/components/TaskGenerator';

function English() {
  return (
    <>
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
    </>
  );
}

export default English;
