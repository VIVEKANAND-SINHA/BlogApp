"use client";
import React, { useState, useRef, useMemo } from "react";
// import JoditEditor from "jodit-react";
import dynamic from "next/dynamic";
import { Button } from "@mui/material";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function BlogEditor({ placeholder }) {
  const [content, setContent] = useState("");
  const editor = useRef(null);

  const sendBlogToDatabase = () => {
    console.log(content);
    fetch("http://localhost:3000/blog/saveblog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ content: content }),
    })
      .then((response) => {
        if (response.status == 200) {
          console.log(response);
          response.json().then((data) => {
            console.log(data);
            alert("post Saved with id" + data["_id"]);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        tabIndex={3} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
      />

      <Button onClick={sendBlogToDatabase}>getvalue</Button>
    </>
  );
}
