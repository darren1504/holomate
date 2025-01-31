import { FaPlus } from "react-icons/fa";

type PostButtonProps = {
  onClick: () => void;
};

export default function PostButton({ onClick }: PostButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-36 h-16 w-16 rounded-full bg-sky-50 bg-gradient-to-r from-blue-300 to-blue-500 p-1 shadow-lg"
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
        <FaPlus className="text-xl text-blue-400" />
      </div>
    </button>
  );
}
