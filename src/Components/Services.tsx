import cons01 from "../assets/cons01.jpg";
import cons02 from "../assets/cons02.jpg";
import cons03 from "../assets/cons03.jpg";
import cons04 from "../assets/cons04.jpg";
import cons05 from "../assets/cons05.jpg";
import cons06 from "../assets/cons06.jpg";
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
          <img style={{ width: "400px" }} src={cons01} alt="cons01" />
        </div>
      </Post>

      <Post
        postName="Building Staffs"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img style={{ width: "400px" }} src={cons02} alt="cons02" />
        </div>
      </Post>
      <Post
        postName="Material Supply"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img style={{ width: "400px" }} src={cons03} alt="cons03" />
        </div>
      </Post>
      <Post
        postName="Conslutancy"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img style={{ width: "400px" }} src={cons04} alt="cons04" />
        </div>
      </Post>
      <Post
        postName="Architecture"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img style={{ width: "400px" }} src={cons05} alt="cons05" />
        </div>
      </Post>
      <Post
        postName="Crane Service"
        postBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in
        ipsum."
      >
        <div>
          <img style={{ width: "400px" }} src={cons06} alt="cons06" />
        </div>
      </Post>
    </div>
  );
};

export default Services;
