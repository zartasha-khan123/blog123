
'use client'










import Image from 'next/image';
import { client } from '@/sanity/lib/client'; // Ensure this is correctly set up
import React, { useState, useEffect } from 'react';
import { createComment } from '@/services/api';


const RouteCake1 = () => {
  const [comments, setComments] = useState<{ name: string; comment: string }[]>([]);
  const [newComment, setNewComment] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await client.fetch(`*[_type == "comment"]{name, comment}`);
        setComments(data);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Failed to load comments. Please try again later.');
      }
    };

    fetchComments();
  }, [loading]);

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newComment || !name) {
      alert('Please fill in all fields.');
      return;
    }

    const commentData = {
      _type: 'comment',
      name,
      comment: newComment,
    };

    try {
      setLoading(true);
      setError('');

      const createdComment = await createComment(commentData)
      console.log('createdComment:', createdComment);

      setNewComment('');
      setName('');
    } catch (err) {
      console.error('Error posting comment:', err);
      setError("'Failed to post your comment. Please try again.'");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-300 text-gray-800 py-10 px-4">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Title Section */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Birch Log Cake</h1>
          <p className="text-sm text-gray-500 mt-2">November 24, 2016 by Cakegirls</p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/cardblog1.jpg"
            alt="Birch Log Cake"
            width={500}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 text-base leading-relaxed">
          <p>
            This winter tree look-alike starts with three 6″ cake layers to make a really tall layered cake. You can use any cake flavor you like, but we were partial to this chocolate truffle cake. A tall cake means you have plenty of room to display your birch tree design on the sides and creating the tree bark is deceptively simple.
          </p>
          <p>
            It starts by painting dark chocolate melted candy coating in a birch tree-inspired pattern and then layering it with a thin layer of white coating on top. Once firm, you can easily break the sheet of bark into shards to layer and decorate the sides of your cake. To make the snowy winter forest theme complete, we’ve added a few whimsical woodland cake novelties to add a focal point.
          </p>
        </div>

        {/* Steps Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Make a Birch Log Cake</h2>
          {/* Steps with Images */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-700">Step 1: Bake Your Cake</h3>
              <p className="mt-2">
                Bake your favorite 6″ round cake recipe. Make frosting then tint one cup of icing light brown, leaving the rest white. If making an 8″ round or larger cake, you will need to make two or more batches of the following birch bark.
              </p>
              <div className="flex justify-center mt-4">
                <Image
                  src="/birch2.jpg"
                  alt="Birch Log Cake Step 1"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">Step 2: Create the Birch Bark</h3>
              <p className="mt-2">
                Cover a half sheet tray in parchment paper. Melt 4 ounces of dark chocolate candy coating in the microwave. Paint tree-like patterns using a brush and chill briefly in the fridge. Layer with melted white coating, chill, and break into bark-like shards.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-700">Step 3: Assemble Your Cake</h3>
              <p className="mt-2">
                Frost the sides of the cake with white buttercream and the top with light brown buttercream. Place the bark shards around the cake sides, creating a layered birch tree effect.
              </p>
              <div className="flex justify-center mt-4">
                <Image
                  src="/birch1.jpg"
                  alt="Birch Log Cake Step 3"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Supplies Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Supplies You will Need</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Layer Cake, recipe of choice</li>
            <li>Buttercream</li>
            <li>Dark Chocolate Candy Coating</li>
            <li>White Candy Coating</li>
            <li>Paintbrushes</li>
            <li>Novelty Deer</li>
            <li>Novelty Pine Trees</li>
            <li>Pre-made Gum Paste Mushrooms</li>
          </ul>
        </div>

        {/* Final Decorations */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Final Touches</h2>
          <p>
            Spread a little buttercream on the pine trees so they look snowy. Place trees, deer, and mushrooms on top of the cake to complete the decoration.
          </p>
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
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
          <div className="space-y-4">
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
  );
};

export default RouteCake1;






