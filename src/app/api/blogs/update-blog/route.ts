import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function PUT(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id) {
    return NextResponse.json(
      { error: "Missing 'id' query parameter" },
      { status: 400 }
    );
  }

  let body;
  try {
    body = await req.json();
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("blogs")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json(
      { error: "No blog post found with the given id" },
      { status: 404 }
    );
  }

  return NextResponse.json(data);
}
