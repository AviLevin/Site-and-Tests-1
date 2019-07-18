import React from "react";

class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.id == 1) {
      return (
        <div>
          <h1>{this.props.title} Main</h1>
          <p>{this.props.title} Main</p>
        </div>
      );
    }
    return (
      <div>
        <h1>
          {this.props.title} {this.props.id} Main
        </h1>
        <p>
          {this.props.title} {this.props.id} Main
        </p>
      </div>
    );
  }
}

export default Article;
