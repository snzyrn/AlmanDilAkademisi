import React, { useEffect, useState } from "react";
import Image from "next/image";

interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
}

const InstagramGrid: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);

  useEffect(() => {
    fetch("/api/instagramPost")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) =>
        console.error("Error fetching Instagram posts:", error)
      );
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="relative w-full h-64">
          <Image
            src={post.imageUrl}
            alt={post.caption}
            className="w-full h-full object-cover"
            layout="fill"
          />
          <div className="absolute bottom-0 left-0 bg-black text-white p-2 text-sm">
            {post.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstagramGrid;
