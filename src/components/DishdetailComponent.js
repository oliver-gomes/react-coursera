import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishdetailComponent extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div />;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      return dish.comments.map(comment => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, {this.renderDate(comment.date)}
          </p>
        </li>
      ));
    } else {
      return <div />;
    }
  }

  renderDate(date) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit"
    }).format(new Date(date));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div
            className="col-12 col-md-5 m-1"
            style={{ display: "inline-block" }}
          >
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {this.renderComments(this.props.dish)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;
