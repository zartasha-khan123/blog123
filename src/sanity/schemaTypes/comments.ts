
// export const comments ={
//     name: 'comment',
//     title: 'Comment',
//     type: 'document',
//     fields: [
//       {
//         name: 'name',
//         title: 'Name',
//         type: 'string',
//       },
//       {
//         name: 'comment',
//         title: 'Comment',
//         type: 'text',
//       },
//     ],
//   };


export const commentSchema = {
  name: "comment",
  type: "document",
  title: "Comment",
  fields: [

    { name: "name", type: "string", title: "Name" },
    { name: "comment", type: "text", title: "Comment" },
  ],
};


