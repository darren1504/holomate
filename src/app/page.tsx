"use client";

import { useState, useEffect } from "react";
import Post from "@/components/Post";
import Navbar from "@/components/Navbar";
import { posts as initialPosts } from "@/types/data";
import Image from "next/image";
import PostButton from "@/components/PostButton";

interface Comment {
  id: number;
  username: string;
  profileImage: string;
  time: string;
  content: string;
}

interface Post {
  id: number;
  username: string;
  profileImage: string;
  time: string;
  content: string;
  comments: Comment[];
}

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPostContent, setNewPostContent] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      setPosts(initialPosts);
      localStorage.setItem("posts", JSON.stringify(initialPosts));
    }
  }, []);

  const handleAddPost = () => {
    if (!newPostContent.trim()) return;

    const newPost: Post = {
      id: posts.length + 1,
      username: "ホロ太郎1234",
      profileImage: "/pfp_default.jpeg",
      time: "たった今",
      content: newPostContent,
      comments: [],
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    setNewPostContent("");
    setIsModalOpen(false);
  };

  const handleDeletePost = (postId: number) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  return (
    <div className="mx-auto h-full max-w-md bg-[url('/main-bg.png')] bg-cover pb-20">
      <header className="flex justify-end gap-24">
        <h1 className="py-6 text-center text-xl font-bold text-sky-50">
          ホロメイト
        </h1>
        <div className="mr-6 mt-4 h-10 w-10 rounded-full border-2 border-neutral-200 bg-sky-50">
          <Image
            src="/filter.svg"
            alt="filter"
            width={20}
            height={20}
            className="mx-auto my-2"
          ></Image>
        </div>
      </header>
      <main>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            profileImage={post.profileImage}
            time={post.time}
            content={post.content}
            comments={post.comments}
            onDelete={handleDeletePost}
          />
        ))}
      </main>
      <footer>
        <div className="relative mr-4 flex justify-end">
          <PostButton onClick={() => setIsModalOpen(true)} />
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
              onClick={() => setIsModalOpen(false)}
            >
              <div
                className="w-96 rounded-lg bg-sky-50 p-6 shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="mb-4 text-lg font-bold">新しい投稿</h2>
                <textarea
                  className="h-24 w-full border p-2"
                  placeholder="投稿内容を入力"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                />
                <div className="mt-4 flex justify-end gap-2">
                  <button
                    className="px-4 py-2"
                    onClick={() => setIsModalOpen(false)}
                  >
                    キャンセル
                  </button>
                  <button
                    className="rounded bg-blue-500 px-6 py-2 font-bold text-white"
                    onClick={handleAddPost}
                  >
                    投稿
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Navbar />
      </footer>
    </div>
  );
}
