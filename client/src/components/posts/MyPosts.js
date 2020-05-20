import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PostItem from "./PostItem";
import PostForm from "./PostForm";
import { getPosts } from "../../actions/post";

const Post = ({ getPosts, post: { posts, loading }, auth: { user } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='posts'>
        <h1 className='large text-primary'>Posts that you've submitted</h1>

        {posts
          .filter((post) => post.user === user._id)
          .map((post) => (
            <PostItem key={post._id} post={post} />
          ))}

        {!posts.some((post) => post.user === user._id) && (
          <h3>
            No posts found. Submit your first one below!
            <br></br>
            <p>
              <PostForm />
            </p>
          </h3>
        )}
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
