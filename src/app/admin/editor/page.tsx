"use client";
import React, { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, { formats, modules } from "@/app/(components)/QuillEditorToolbar";

const QuillEditor = () => {
  const [content, setContent] = useState({ value: "" });

  const handleChange = (value: string) => {
    setContent({ value });
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (typeof document !== 'undefined') {
      var myEditor = document.querySelector(".ql-editor");
      var htmlContent = myEditor?.innerHTML || "";
      console.log("Content:querySelector==", htmlContent);

      const writeHtmlFileApi = async () => {
        await fetch("/api/ncism", {
          method: "POST",
          body: JSON.stringify({ content: htmlContent }),
        });
      };
      writeHtmlFileApi();
    }
  };

  return (
    <div className="">
      <QuillToolbar />
      <div id="editorcontainer">
        <ReactQuill
          theme="snow"
          value={content.value}
          onChange={handleChange}
          placeholder="Write something awesome..."
          modules={modules}
          formats={formats}
        />
        <button
          className="text-white bg-teal-400 py-2 px-3 rounded-lg mt-10 text-center align-middle block mx-auto"
          onClick={(e) => handleUpload(e)}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default QuillEditor;
