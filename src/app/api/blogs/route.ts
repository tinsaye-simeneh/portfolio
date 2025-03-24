import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

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

export async function GET() {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data as Post[]);
}

export async function POST(request: Request) {
  const body: Omit<Post, "id" | "created_at" | "updated_at"> =
    await request.json();

  if (!body.title || !body.description || !body.read_time) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("blogs")
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data as Post, { status: 201 });
}
