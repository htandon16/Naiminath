"use client";
import React, { useRef, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import QuillToolbar, {
  formats,
  modules,
} from "@/app/(components)/QuillEditorToolbar";

const QuillEditor = () => {
  const [content, setContent] = useState({ value: "" });
  const quillRef = useRef<ReactQuill>(null);
  //const turndown = new TurndownService();

  const handleChange = (value: string) => {
    setContent({ value });
  };

  const handleUpload = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault;

    if (typeof document !== 'undefined') {
      let element = document.querySelector('.class-name')
      
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
    

    // const fileName = `dynamicFile_${Date.now()}.html`;

    // const filePath = `../../admin/blogfiles/${fileName}`;
    // console.log("HTML string has been written to the file:", filePath);
    // fs.writeFileSync(filePath, htmlContent, "utf-8");

    // console.log("HTML string has been written to the file:", filePath);

    //convertHtmlToMdx(htmlContent);
    //const mdxContent = turndown.turndown(htmlContent);
    //console.log("Content:mdxContent==", mdxContent);
    // if (quillRef.current) {
    //   const editor = quillRef.current.getEditor();
    //   const html = editor.root.innerHTML;
    //   console.log("Content:quillRef==", html);

    // }
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

async function convertHtmlToMdx(htmlString: string) {
  // Parser.parse(htmlString, { contentType: "markdown" }).then((result: any) =>
  //   console.log(result)
  // );
  // const markdownString = quillToMarkdown(htmlString);
  // console.log("Content:querySelector==", markdownString);
}

export default QuillEditor;
