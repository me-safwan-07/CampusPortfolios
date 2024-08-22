import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from "react-icons/bs";
// import { BsArrowLeft } from "react-icons/bs";

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white mb-10"
    >
      <BsArrowLeftShort className="h-6 w-8" /> {/* Icon with size */}
      Back to Templates
    </button>
  );
};