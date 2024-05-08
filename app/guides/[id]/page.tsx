import { getPostData } from '@/lib/posts';
import './styles.css';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type PostData = {
  title: string;
  date: string;
  contentHtml: string;
  code: string;
};

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id);

  return (
    <>
      <section className="flex flex-col justify-center py-12 ">
        <div className="max-w-3xl mx-auto">
          {/* Post Title */}
          <h1 className="font-extrabold text-3xl mb-5">{postData.title}</h1>

          {/* Post Content */}
          <div
            className="content mb-5"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
          {/* Twitter Code */}
          <div dangerouslySetInnerHTML={{ __html: postData.code }} />
        </div>
      </section>
    </>
  );
}
