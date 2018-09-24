import React, { Component, Fragment } from "react";
import Layout from "../layout/Layout";
import { Segment } from "semantic-ui-react";

import PostList from "./PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

const PostWidget = props => {
  return <div>POST WIDGET</div>;
};
class PostDashboard extends Component {
  state = {};

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
        <PostWidget />
        {this.props.posts && <PostList posts={this.props.posts.all} />}
      </Fragment>
    );
  }
}

const actions = {
  getPosts
};

const mapState = state => ({
  posts: state.posts
});

export default connect(
  mapState,
  actions
)(PostDashboard);
