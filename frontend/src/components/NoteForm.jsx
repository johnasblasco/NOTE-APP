import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const NoteForm = ({ initialValues, onSubmit, onCancel }) => {
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      content: Yup.string().required('Content is required'),
    }),
    onSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
      {formik.errors.title && <p className="text-red-500 text-sm">{formik.errors.title}</p>}

      <textarea
        name="content"
        placeholder="Content"
        className="w-full border p-2 rounded"
        value={formik.values.content}
        onChange={formik.handleChange}
      />
      {formik.errors.content && <p className="text-red-500 text-sm">{formik.errors.content}</p>}

      <div className="flex justify-end gap-2">
        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Save</button>
        <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-1 rounded">Cancel</button>
      </div>
    </form>
  );
};

export default NoteForm;
