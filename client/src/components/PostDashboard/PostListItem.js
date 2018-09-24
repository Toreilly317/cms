import React from "react";
import styled from "styled-components";

const PostListItem = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: min-content 1fr;
  grid-template-rows: 1fr;
  grid-gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

const PostListHeader = styled.div`
  font-size: 3.2rem;
`;

const postListSelect = styled.input``;

const PostDates = styled.div``;

export default ({ post }) => {
  return (
    <PostListItem>
      <div>
        <input type="checkbox" />
      </div>
      <PostListHeader>{post.title}</PostListHeader>
      PostDates Created At: {new Date(post.createdAt).toLocaleString()}
    </PostListItem>
  );
};
