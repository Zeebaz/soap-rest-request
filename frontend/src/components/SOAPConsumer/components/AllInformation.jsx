import React from "react";
import { useState } from "react";
import { postRestRequest } from "../../../service/apirest";

const AllInformation = () => {
  const [post, setPost] = useState("");
  const [resp, setResp] = useState(null);

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postRestRequest(
      'http://127.0.0.1:5000/countries/'+post,
      {}
    );
    setResp(response);
    console.log({ response });
  };

  return (
    <div style={{ overflow:'auto'}}>
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
        </div>
        <button>Submit</button>
      </form>
      {resp && <pre>{JSON.stringify(resp, null, 1)}</pre>}
    </div>
  );
};

export default AllInformation;
