import React, { Component } from "react";
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
      <Layout>
        {this.props.posts && <PostList posts={this.props.posts.all} />}
      </Layout>
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
