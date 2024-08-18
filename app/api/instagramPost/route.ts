import { NextRequest, NextResponse } from "next/server";

const INSTAGRAM_API_URL = `https://graph.instagram.com/${process.env.INSTAGRAM_USER_ID}/media?fields=id,caption,media_url&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`;

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
}

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(INSTAGRAM_API_URL);
    if (!response.ok) {
      throw new Error(
        `Error fetching data from Instagram: ${response.statusText}`
      );
    }

    const data = await response.json();
    const posts: InstagramPost[] = data.data.map((post: any) => ({
      id: post.id,
      caption: post.caption || "",
      media_url: post.media_url,
    }));

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error fetching Instagram posts" },
      { status: 500 }
    );
  }
}
