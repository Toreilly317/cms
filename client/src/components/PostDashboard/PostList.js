import React from "react";
import { List } from "semantic-ui-react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

import Container from "../styli/Container";

export default props => {
  return (
    <Container>
      <List divided relaxed>
        {props.posts.map(post => {
          return <PostListItem post={post} key={post.id} id={post.id} />;
        })}
      </List>
    </Container>
  );
};
