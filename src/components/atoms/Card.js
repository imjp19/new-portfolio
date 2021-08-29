import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { BsBoxArrowUpRight } from "react-icons/bs";
const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <DiGithubBadge className="icon" />
        </a>
        <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          <BsBoxArrowUpRight className="icon-open" />
        </a>
      </div>
    </div>
  )
}

export default Card
