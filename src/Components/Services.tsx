import cons01 from "../assets/cons01.jpg";
import Post from "./Post";

// src={cons01} alt="cons01"

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
      />
      <Post
        postName="Material Supply"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      />
      <Post
        postName="Conslutancy"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      />
      <Post
        postName="Architecture"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      />
      <Post
        postName="Crane Service"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      />
    </div>
  );
};

export default Services;
