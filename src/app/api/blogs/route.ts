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
