// import{supabase}from "@/lib/supabase";
// export default function Home() {
//   const setNewView = async () => {
//     const { data, error } = await supabase
//       .from("views")
//       .insert([{ name: "Tahlil" }]);
//     if (error) {
//       console.error("Error inserting view:", error);
//     } else {
//       console.log("View inserted successfully:", data);
//     }
//   }

//   setNewView();
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
//       <p className="mt-4 text-lg">This page logs a new view in the database.</p>
//     </main> 
//   );
// }

import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient();
export default async function Home() {
  // Fetch all users
  const users = await prisma.user.findMany();

  // Fetch all posts
  const posts = await prisma.post.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">All Users and Posts</h1>
      <div className="mt-4 text-lg">
        <h2 className="font-semibold">Users:</h2>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 text-lg">
        <h2 className="font-semibold">Posts:</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.title} - {post.content}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}