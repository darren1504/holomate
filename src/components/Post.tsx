import React, { useState } from "react";
import { FaComment, FaThumbsUp, FaEllipsisH } from "react-icons/fa";
import Image from "next/image";

interface CommentProps {
  id: number;
  username: string;
  profileImage: string;
  time: string;
  content: string;
}

interface PostProps {
  id: number;
  username: string;
  profileImage: string;
  time: string;
  content: string;
  comments: CommentProps[];
  onDelete: (postId: number) => void;
}

const Post: React.FC<PostProps> = ({
  id,
  username,
  profileImage,
  time,
  content,
  comments,
  onDelete,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-auto mb-4 h-auto max-w-sm rounded-lg bg-sky-50 p-4">
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-2">
          <div>
            <Image
              src={profileImage}
              alt="profile icon"
              width={24}
              height={24}
              className="mx-auto my-2 rounded-full"
            ></Image>
          </div>
          <h1 className="text-base font-bold">{username}</h1>
          <p className="text-xs">{time}</p>
        </div>
        <div className="relative">
          <button
            className="h-8 w-8 rounded-full border-2 border-black pl-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaEllipsisH />
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-1 w-24 rounded bg-white shadow-lg">
              <button
                className="block w-full px-4 py-2 text-left font-bold text-blue-400"
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsModalOpen(true);
                }}
              >
                削除
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-sm">{content}</p>
      <div className="mt-4 flex justify-between">
        <p className="text-sm font-bold">コメントする</p>
        <div className="flex gap-2">
          <div className="flex items-center">
            <FaComment />
            <p>1</p>
          </div>
          <div className="flex items-center">
            <FaThumbsUp />
            <p>1</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-96 rounded-lg bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-lg font-bold">投稿を削除しますか？</h2>
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2"
                onClick={() => setIsModalOpen(false)}
              >
                キャンセル
              </button>
              <button
                className="rounded bg-blue-500 px-6 py-2 font-bold text-white"
                onClick={() => {
                  onDelete(id);
                  setIsModalOpen(false);
                }}
              >
                削除
              </button>
            </div>
          </div>
        </div>
      )}

      {comments.map((comment) => (
        <div
          key={comment.id}
          className="mt-4 rounded-lg border-2 border-sky-200 p-2"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>
                <Image
                  src={comment.profileImage}
                  alt="profile icon"
                  width={24}
                  height={24}
                  className="mx-auto my-2 rounded-full"
                />
              </div>
              <h1 className="text-xs font-bold">{comment.username}</h1>
              <p className="text-xs">{comment.time}</p>
            </div>
            <button className="h-8 w-8 rounded-full border-2 border-black pl-1.5">
              <FaEllipsisH />
            </button>
          </div>
          <p className="mt-4 text-xs">{comment.content}</p>
          <div className="mt-4 flex justify-end">
            <div className="flex gap-2">
              <div className="flex items-center">
                <FaComment />
                <p>1</p>
              </div>
              <div className="flex items-center">
                <FaThumbsUp />
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
