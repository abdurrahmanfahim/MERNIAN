import React from "react";

const PhotoModal = ({ photo, onClose }) => {
  console.log(photo)
  return (
    <div
      className="fixed inset-30 bg-dark bg-opacity-10 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white shadow-xl rounded-xl max-w-xl w-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.path}
          alt="Photo Modal"
          className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
        />
      </div>
    </div>
  );
};

export default PhotoModal;
