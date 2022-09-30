import React from "react";
import data from "./data";
import LazyLoad from "react-lazyload";
import { Skeleton, Spin } from "antd";
const Loading = () => (
  <div className="post loading">
    <Spin size="large" />
    <Skeleton active />
    {/* <h5>Loading...</h5> */}
    {/* <img src="http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg" /> */}
  </div>
);

const Post = ({ id, title, body }) => (
  <div className="post">
    {/* <LazyLoad
      once={true}
      placeholder={<img src={`https://picsum.pjoto/id/${id}/5/5`} alt="..." />}
    >
      <div className="post-img">
        <img src={`https://picsum.pjoto/id/${id}/200/200`} alt="...." />
      </div>
    </LazyLoad> */}
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

const TestLazyLoading = () => (
  <div className="App">
    <h2>LazyLoad Demo</h2>
    <div className="post-container">
      {data.map((post) => (
        <LazyLoad
          key={post.id}
          //height={100}
          offset={[-150, 100]}
          placeholder={<Loading />}
        >
          <Post key={post.id} {...post} />
        </LazyLoad>
      ))}
    </div>
  </div>
);

export default TestLazyLoading;
