import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?cs=srgb&dl=pexels-lukas-574071.jpg&fm=jpg" />
      <Post img="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?cs=srgb&dl=pexels-pixabay-270348.jpg&fm=jpg" />
      <Post img="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?cs=srgb&dl=pexels-olia-danilevich-4974914.jpg&fm=jpg"/>
      <Post img="https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?cs=srgb&dl=pexels-element-digital-1370295.jpg&fm=jpg"/>
    </div>
  );
}
