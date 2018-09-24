import React, { Component, Fragment } from "react";
import Layout from "../layout/Layout";
import { Segment } from "semantic-ui-react";

import PostList from "./PostList";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

class PostDashboard extends Component {
  state = {};

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
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
