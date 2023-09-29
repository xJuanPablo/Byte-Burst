import React from 'react';
import ReactQuill from 'react-quill';

const modules ={
  toolbar: [
  [{'header': [1,2,false]}],
  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  ['link', 'image'],
  ['clean']
  ]
}

function Editor({value, onChange}) {
  return (
    <ReactQuill value={value} onChange={onChange} modules={modules} />
  )
}

export default Editor;