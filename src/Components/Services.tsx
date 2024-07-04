import cons01 from "../assets/cons01.jpg";
import Post from "./Post";

const Services = () => {
  return (
    <div>
      <Post
        postName="Land Minning"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>

      <Post
        postName="Building Staffs"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>
      <Post
        postName="Material Supply"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>
      <Post
        postName="Conslutancy"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>
      <Post
        postName="Architecture"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>
      <Post
        postName="Crane Service"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img src={cons01} alt="cons01" />
        </div>
      </Post>
    </div>
  );
};

export default Services;
