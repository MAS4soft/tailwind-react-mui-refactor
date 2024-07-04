// import cons01 from "../assets/cons01.jpg";

function Post({ postName = "-", postBody = "-", children }) {
  return (
    <div>
      {children}
      <h1>{postName}</h1>
      <p>{postBody}</p>
    </div>
  );
}

export default Post;
