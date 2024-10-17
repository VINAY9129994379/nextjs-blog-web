// Assuming your file structure looks something like this:
// - app
//   - api
//     - blog
//       - route.js
//   - config
//     - db.js
//   - models
//     - BlogModel.js

import { NextResponse } from "next/server";
import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';
import BlogModel from '@/models/BlogModel'; // Adjust path as necessary
import connectDB from '@/config/db'; // Adjust the path as necessary

export async function GET(request) {
    await connectDB();
    return NextResponse.json({ msg: "API Working" }); 
}

export async function POST(request) {
    await connectDB();

    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const path = `./public/${timestamp}_${image.name}`;
        await writeFile(path, buffer);

        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            title: formData.get('title'),
            description: formData.get('description'),
            category: formData.get('category'),
            author: formData.get('author'),
            image: imgUrl,
            authorImg: formData.get('authorImg')
        };

        await BlogModel.create(blogData);
        console.log("Blog Saved");

        return NextResponse.json({ success: true, msg: "Blog Added", imageUrl: imgUrl });
    } catch (error) {
        console.error('Error creating blog:', error);
        return NextResponse.json({ success: false, msg: "Error adding blog" });
    }
}
