"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import { createComment } from '@/services/api';
function Cards4() {

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
    <>
    <div className="min-h-screen bg-gray-700 text-gray-800">

      <div className="container mx-auto p-6 space-y-12">
        {/* Introduction Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-6 mt-28">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Baking tips for yummy basketCakes
          </h1>
          <Image  src={'/card4.webp'} alt="buns recipe" width={500} height={400} className="rounded-lg object-cover" />
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Basketcakes came out really well and later when I checked both the recipes there were only a few variations. The biggest difference was the quantity of water. In previous recipe wheat flour had absorbed more liquid but this time it was less. I am using Aashirwad brand wheat flour from the beginning but it was clear that they don’t maintain same flour quality always..
</p>
          <p className="text-lg text-gray-700 leading-relaxed">
          Thats why I always keep on insisting in my bread posts that one should never follow blindly same quantity of liquid used for kneading the dough written in the recipe.

Around a year back I was following a bread recipe by a famous blogger and according to the instructions used whole quantity of water to knead the dough. Dough became so wet that it was impossible to handle, so I added extra flour. There was nothing wrong in the recipe, but the flour blogger had used had more liquid absorbing quality than mine. So, whether you are using wheat flour,  all purpose flour (maida) or chiroti rava, if required, reduce or increase the amount of liquid given in the recipe while kneading the dough.

The same logic applies for time limit of proofing the dough. Generally first proofing time is somewhere between 1 to 1+1/2 hours. If your kitchen is warm then dough could be double in size in 50 minutes to 1 hour. If you will let it proof for the next half an hour it will be over proofed, and over proofing dough does not give you a good loaf of bread.

For first proofing if I am keeping dough in switched off microwave (which I generally do) then proofing gets over in one hour, but if I keep the dough on kitchen counter it takes half an hour more.

If you are using dry active yeast, you have to proof it first before adding it with the flour. In proofing the yeast temperature of water is most important. It should be slightly more than lukewarm…if water is cold or too hot, it kills the yeast. Take a bigger glass to proof the yeast because it blooms nicely – so there should be enough space in the glass. Add yeast, sugar and lukewarm water in the glass and mix it with a spoon. Cover it and keep it aside for 10 minutes. After 10 minutes it will be frothy with bubbles on the top and it’s ready to be used. I have posted recipe also for White Sandwich Bread with active dry yeast in the blog.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            The cookies are from{" "}
           Sugar             1+1/2 tsp
Salt                 1 tsp
Yeast               3/4 tsp
Wheat flour   2+1/2 cups
Milk powder   2 tbsp
Milk                  1 cup +1/4 cup (reduce 1 tbsp) (it should be slightly more than lukewarm)
Pizza mix spices    3 tsp
Oil                            3 tsp
Butter                     2 tbsp
Instead of milk water can be used or you can use both by mixing them together.

Other than milk all ingredients should be at room temperature.

On sim heat warm 2 tbsp butter and add 1+1/2 tsp pizza mix spices and keep it aside.

Process :

Take a big vessel and place all dry ingredients in it.
          </p>
        </div>

       

        {/* Instructions Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
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
            <li>Bake at 350°F for 10-13 minutes, until golden brown at the edges and light golden at the center.</li>
            <li>Cool on the baking sheet for at least 1-2 minutes before transferring to a wire rack to cool completely.</li>
          </ol>
        </div>

        {/* Notes Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Notes</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>If you chill the dough for about 30 minutes before baking, you will have a slightly puffier cookie.</li>
            <li>You can substitute raisins for the chocolate chips.</li>
            <li>
              You can add up to 1 1/2 cups of chopped nuts in addition to raisins or chocolate chips. You might want to
              make the cookies slightly larger if this is the case.
            </li>
          </ul>
        </div>
      </div>
      
        {/* comments section */}
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

    
  

    </>
  )
}

export default Cards4
