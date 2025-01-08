"use server"




import { client } from "@/sanity/lib/client";



// -------------------------------------------------------create
export async function createComment(commentData: Record<string, unknown>){
    const res = await client.create({
        ...commentData,
        _type: 'comment'
    });

    return res;
}

// export async function createComment(commentData: Record<string, unknown>) {
//     await client.create({
//       ...commentData,
//       _type: 'comment',
//     });
//   }
  

