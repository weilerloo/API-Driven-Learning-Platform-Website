import { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import ReactPlayer from "react-player";

export default function Upload({
  name,
  label,
  register,
  setValue,
  errors,
  video = false,
  viewData = null,
  editData = null,
}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewSource, setPreviewSource] = useState(
    viewData ? viewData : editData ? editData : ""
  );
  const inputRef = useRef(null);

  // dropzone setup
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setSelectedFile(file);
      setValue(name, file, { shouldValidate: true }); // ✅ send file to react-hook-form

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: video ? { "video/*": [] } : { "image/*": [] },
    multiple: false,
    onDrop,
  });

  useEffect(() => {
    // register with RHF
    register(name, { required: true });
  }, [name, register]);

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm text-richblack-5" htmlFor={name}>
        {label} <sup className="text-pink-200">*</sup>
      </label>

      <div
        {...getRootProps()}
        className={`flex flex-col items-center justify-center rounded-md border-2 border-dashed p-6 cursor-pointer ${
          isDragActive
            ? "border-yellow-400 bg-richblack-700"
            : "border-richblack-600"
        }`}
      >
        <input {...getInputProps()} ref={inputRef} />

        {!previewSource ? (
          <div className="flex flex-col items-center gap-2 text-richblack-300">
            <FiUploadCloud className="text-2xl" />
            <p className="text-sm">
              Drag & drop your {video ? "video" : "image"} here, or click to
              select
            </p>
          </div>
        ) : (
          <div className="w-full h-48">
            {!video ? (
              <img
                src={previewSource}
                alt="Preview"
                className="h-full w-full rounded-md object-cover"
              />
            ) : (
              <ReactPlayer
                url={previewSource}
                controls
                width="100%"
                height="100%"
              />
            )}
          </div>
        )}
      </div>

      {errors[name] && (
        <span className="ml-2 text-xs tracking-wide text-pink-200">
          {label} is required
        </span>
      )}
    </div>
  );
}
