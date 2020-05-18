import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";

const MyPosts = ({ post: { posts, loading }, auth: { user } }) => {
  useEffect(() => {}, []);
  console.log(posts);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Iris Community Posts</h1>
      <p className='lead'>
        <i className='fas fa-comment'></i> Welcome to the forum
      </p>
      <div className='posts'>
        {posts
          .filter((post) => post.user === user._id)
          .map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
      </div>
    </Fragment>
  );
};

MyPosts.propTypes = {
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps)(MyPosts);
