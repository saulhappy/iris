import React, { Fragment, useEffect } from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";
import { connect } from "react-redux";
import Sinner from "../layout/Spinner";
import { getPost } from "../../actions/post";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost]);

  return <div>this is a post</div>;
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
