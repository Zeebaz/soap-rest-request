import React from "react";
import { useState } from "react";
import { postRestRequest } from "../../../service/apirest";

/* 
    Body exam
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
*/

const JsonPlaceHolderAPI = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });
  const [resp, setResp] = useState(null);

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ post });
    const response = await postRestRequest(
      "https://jsonplaceholder.typicode.com/posts",
      post
    );
    setResp(response);
    console.log({ response });
  };

  return (
    <div>
      <h2>JSON Placeholder API</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div className="jsonform">
          <label htmlFor="">
            Title:{" "}
            <input
              type="text"
              id="title"
              value={post.title}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="">
            Body:{" "}
            <input
              type="text"
              id="body"
              value={post.body}
              onChange={handleChange}
            />
          </label>
        </div>
        <button>Submit new post</button>
      </form>
      {resp && <pre>{JSON.stringify(resp,null,1)}</pre>}
    </div>
  );
};

export default JsonPlaceHolderAPI;
