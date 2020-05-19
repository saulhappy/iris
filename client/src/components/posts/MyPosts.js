import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import { getPosts } from "../../actions/post";

const Post = ({ getPosts, post: { posts, loading }, auth: { user } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Here Are Your Posts</h1>
      <div className='posts'>
        {user &&
          posts
            .filter((post) => post.user === user._id)
            .map((post) => <PostItem key={post._id} post={post} />)}
        {/* {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))} */}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPosts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, { getPosts })(Post);
