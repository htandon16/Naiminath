"use client";
import dynamic from "next/dynamic";
import React, { useMemo, useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";

import type ReactQuill from 'react-quill';
const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import('react-quill');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof ReactQuill;


import type QuillToolbar from "@/app/(components)/QuillEditorToolbar";

const QuillToolbarEditor = dynamic(
  async () => {
    const { default: RQ } = await import('@/app/(components)/QuillEditorToolbar');
    // eslint-disable-next-line react/display-name
    return ({ ...props }) => <RQ {...props} />;
  },
  {
    ssr: false,
  }
) as typeof QuillToolbar;

// Undo and redo functions for Custom Toolbar
function undoChange(this: {
  [x: string]: any;
  undo: () => void;
  redo: () => void;
}) {
  this.quill.history.undo();
}
function redoChange(this: {
  [x: string]: any;
  undo: (this: {
    [x: string]: any;
    undo: () => void;
    redo: () => void;
  }) => void;
  redo: () => void;
}) {
  this.quill.history.redo();
}
const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange,
    },
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true,
  },
};
const formats = [
  "video",
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
];




const QuillEditor = () => {

//   const ReactQuill = useMemo(
//     () => dynamic(() => import("react-quill"), { 
//       ssr: false,
//       loading: () => <p>Loading Quill Editor...</p>, }),
//     []
// );
//   const QuillToolbar = useMemo(
//     () => dynamic(() => import("@/app/(components)/QuillEditorToolbar"), { 
//       ssr: false,
//       loading: () => <p>Loading Quill Editor...</p>,  }),
//     []
// );

// const { formats, modules }:any = dynamic(() => import('@/app/(components)/QuillEditorToolbar'), {
//    ssr: false, 
//    loading: () => <p>Loading Quill Editor...</p>, 
//   });

  const [content, setContent] = useState({ value: "" });
 // const quillRef = useRef<ReactQuill>(null);
  //const turndown = new TurndownService();

  const handleChange = (value: string) => {
    setContent({ value });
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    
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
  
  };

  return (
    <div>
      <QuillToolbarEditor />
      <div id="editorcontainer">
        <QuillWrapper 
          theme="snow"
          value={content.value}
          onChange={handleChange}
          placeholder="Write something awesome..."
          modules={modules}
          formats={formats}
          //ref={quillRef}
        />
        <button
          className=" text-white bg-teal-400 py-2 px-3 rounded-lg mt-10 text-center align-middle block mx-auto"
          onClick={(e) => handleUpload(e)}
        >
          Upload
        </button>
      </div>
    </div>
  );
};


export default QuillEditor;
