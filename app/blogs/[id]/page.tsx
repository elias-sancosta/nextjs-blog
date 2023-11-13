import Comments from '@/components/Comments';
import FormComments from '@/components/FormComments';

const BlogDetailPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">Post one</h1>
      <p>Written by: John Doe</p>
      <div className="mt-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam impedit
        dicta eius! Obcaecati itaque corrupti culpa doloribus, quas velit, id
        voluptatem incidunt sequi impedit odio in necessitatibus accusantium
        inventore eos.
      </div>
      <Comments />
      <FormComments />
    </div>
  );
};
export default BlogDetailPage;
