import React from "react";

const CreatePost = () => {  
  return (
    <div>
      <form>
        <input id='Name' type='text' name='name' placeholder="Name"></input>
        <input id='Alias' type='text' name='alias' placeholder="Alias"></input>
        <input id='Submit' type='submit' name="submit"></input>
      </form>
    </div>
  );
}

export default CreatePost;
