import React from 'react';

interface PostProps {
  postName: string;
  postBody: string;
  c: React.ReactNode; // تعديل النوع هنا
}

const Post: React.FC<PostProps> = ({ postName, postBody, c }) => {
  return (
    <div>
      {c}
      <h1>{postName}</h1>
      <p>{postBody}</p>
    </div>
  );
};

export default Post;
