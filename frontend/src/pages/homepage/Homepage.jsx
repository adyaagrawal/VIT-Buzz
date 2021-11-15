import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import React from "react";

function Homepage() {
  const location = useLocation();
  const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => console.log(data))
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
      <div>Example connection</div>
    </>
  );
}

class connectionExample extends React.Component{
  componentDidMount(){
    const apiUrl = `http://127.0.0.1:8000/api/`;
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => console.log(data))
  }
  render(){
    return <div>Example connection</div>
  }
}

export default Homepage;
