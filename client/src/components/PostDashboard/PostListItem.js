import React from "react";
import { List, Container } from "semantic-ui-react";

export default ({ post }) => {
  return (
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">{post.title}</List.Header>
        <List.Description as="a">{post.createdAt}</List.Description>
      </List.Content>
    </List.Item>
  );
};
