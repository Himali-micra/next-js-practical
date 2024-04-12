import { NextResponse } from "next/server";
export function GET(request) {
  return NextResponse.json(
    { name: "Nirav", age: "29", city: "surat" },
    { status: 200 }
  );
}
