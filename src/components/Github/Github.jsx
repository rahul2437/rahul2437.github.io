import React from "react";
import GitHubCalendar from "react-github-calendar";
import "./Github.css";

const Github = () => {
  return (
    <div className="section github">
      <h2 className="section__title">My Github statistics</h2>
      <div>
        <img
          height="155em"
          src="https://github-readme-stats.vercel.app/api?username=rahul2437&show_icons=true"
          alt="rahul2437"
        />
        <img
          height="155em"
          src="https://github-readme-stats.vercel.app/api/top-langs?username=rahul2437&show_icons=true"
          alt="rahul2437"
        />
        <img
          height="155em"
          src="https://github-readme-streak-stats.herokuapp.com/?user=rahul2437&"
          alt="rahul2437"
        />
      </div>
      <GitHubCalendar className="calendar" username="rahul2437" />
    </div>
  );
};

export default Github;
