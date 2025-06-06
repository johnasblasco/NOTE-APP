import React from 'react';

const AuthFormInput = ({ label, name, type, formik }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-full p-2 border rounded"
      />
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm">{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default AuthFormInput;
