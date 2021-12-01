import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">VIT Blogging and Community site</span>
        <span className="headerTitleLg">VIT-Buzz</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/9452644/pexels-photo-9452644.png?cs=srgb&dl=pexels-adya-agrawal-9452644.jpg&fm=jpg"
        alt="vit"
      />
    </div>
  );
}
