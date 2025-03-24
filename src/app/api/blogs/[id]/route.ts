import { supabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

type Post = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  reactions: { [key: string]: number };
  read_time: number;
  created_at?: string;
  updated_at?: string;
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Missing post ID" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch post",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body: Partial<Omit<Post, "id" | "created_at" | "updated_at">> =
    await request.json();

  const { data, error } = await supabase
    .from("posts")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Post not found or update failed" },
      { status: 404 }
    );
  }

  return NextResponse.json(data as Post);
}
