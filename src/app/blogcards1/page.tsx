
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { createComment } from "@/services/api";


function Route2cards() {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await client.fetch(`*[_type == "comment"]{name, comment}`);
        setComments(data);
      } catch (err) {
        console.error("Error fetching comments:", err);
        setError("Failed to load comments. Please try again later.");
      }
    };

    fetchComments();
  }, [loading]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment || !name) {
      alert("Please fill in all fields.");
      return;
    }

    const commentData = {
      _type: "comment",
      name,
      comment: newComment,
    };

    try {
      setLoading(true);
      setError("");

      const createdComment = await createComment(commentData);
      console.log("createdComment:", createdComment);

      setNewComment("");
      setName("");
    } catch (err) {
      console.error("Error posting comment:", err);
      setError("'Failed to post your comment. Please try again.'");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 text-gray-800">
      <div className="container mx-auto p-6 space-y-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="col-span-2 space-y-12">
          {/* Introduction Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-6 mt-28">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Oatmeal Chocolate Chip Cookies
            </h1>
            <Image
              src={"/route2.jpg"}
              alt="Oatmeal Chocolate Chip Cookies"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              I have been making these cookies for years. I have tried many recipes, but this one is the best...
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
            These are, hands down, the best oatmeal chocolate chip cookies I have ever made and probably the best I
            have ever eaten. Granted, I actually make things that I like more than these (sometimes you feel like a
            muffin, not a cookie), but I have never seen someone not reach for a second cookie straight away. They are
            fantastic - slightly crispy on the edges with a nice and chewy center. They are buttery, without being
            greasy at all, and perfectly balanced. The cookies have just the right amount of chocolate chips to appease
           any chocolate lover, but not so much that the flavors of the oats and vanilla are drowned out.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
             The cookies are from{" "}
            <strong>The Frog Commissary Cookbook</strong>, a book of the recipes from a very popular local restaurant
            called Frog in Philadelphia in the 1970s. My mother started making these cookies, and, after a time, so
             did I. This cookie became the signature item at the restaurant, flying out the door much like McDonalds
           sells burgers!
          </p>
          </div>

          {/* Recipe Section */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recipe</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 cup butter, room temperature</li>
              <li>1 cup sugar</li>
              <li>1 cup brown sugar</li>
            <li>2 large eggs</li>
            <li>2 tbsp milk</li>
         <li>2 tsp vanilla extract</li>
             <li>2 cups all-purpose flour</li>
           <li>1 tsp baking soda</li>
            <li>1 tsp baking powder</li>           
             <li>1 tsp salt</li>
            <li>2 1/2 cups oats (rolled or quick, but not instant)</li>
            <li>2 cups chocolate chips (about 12-oz.)</li>


              
              {/* Add the rest of the recipe items */}
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Instructions</h2>
           <ol className="list-decimal pl-6 space-y-3">
             <li>Preheat the oven to 350°F. Line a baking sheet with parchment paper.</li>
             <li>
              In a large bowl, cream together the butter and the sugars until the mixture is light in color. Beat in the
              eggs one at a time, followed by the milk and the vanilla extract.
             </li>
             <li>
               In a medium bowl, stir together the flour, baking soda, baking powder, and salt. Gradually beat the flour
               into the sugar mixture until just incorporated.
             </li>
             <li>Stir in the oats and chocolate chips by hand.</li>
             <li>
               Drop 1-inch balls of dough onto the cookie sheet, placing about 1 1/2 inches apart so they have room to
              spread.
           </li>
            <li>Bake at 350 F for 10-13 minutes, until golden brown at the edges and light golden at the center.</li>
            <li>Cool on the baking sheet for at least 1-2 minutes before transferring to a wire rack to cool completely.</li>
          </ol>
            </ul>
          </div>

          {/* Comment Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-4">Comments</h3>
            {error && <p className="text-red-500">{error}</p>}
            <form className="mb-8" onSubmit={handleSubmit}>
              <input
                type="text"
                className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-black"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg mb-4 text-black"
                rows={4}
                placeholder="Leave a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-700 text-white font-semibold rounded-lg hover:bg-yellow-400"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
            <div className="space-y-4 text-white">
              {comments.map((comment, index) => (
                <div key={index} className="p-4 border border-gray-300 rounded-lg">
                  <p className="font-semibold">{comment.name}:</p>
                  <p>{comment.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
      </div>
  );
}

export default Route2cards;
