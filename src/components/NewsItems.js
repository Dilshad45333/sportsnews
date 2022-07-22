import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
      <div className="card" style={{width: "18rem"}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1t'}}>{source}</span>
        <img src={!imageUrl?"https://st1.bollywoodlife.com/wp-content/uploads/2022/06/Nayan-1-2-600x315.png":imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            <small className="text-muted">By {!author?"Unknown":author} on {new Date (date).toGMTString()} </small>
          </p>
          <a  href={newsUrl} target="_blank" className="btn btn-dark">
            Read More
          </a>
        </div>
      </div>
      </div>
    );
  }
}

export default NewsItems;
