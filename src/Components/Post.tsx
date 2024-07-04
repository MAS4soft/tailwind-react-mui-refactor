// import cons01 from "../assets/cons01.jpg";

function Post({ postName = "-", postBody = "-" }) {
  return (
    <div>
      <h1>{postName}</h1>
      <p>{postBody}</p>
    </div>
  );
}

export default Post;
