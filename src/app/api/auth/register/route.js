import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const { name, email, password } = await request.json();

    await connect();
    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    try {
     
      await newUser.save();
     
      return new NextResponse("User has been Created", { status: 201 });
    } catch (err) {
      console.error("Error saving newUser:", err);
      return new NextResponse(err.message, {
        status: 500,
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return new NextResponse("Error processing request", {
      status: 500,
    });
  }
};
