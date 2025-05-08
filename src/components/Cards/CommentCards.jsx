import React from "react";

const comments = [
  {
    name: "Si Cantik",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=si1",
    comment: "Congratulations on your graduation!",
  },
  {
    name: "Si Ganteng",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=si2",
    comment:
      "Wow amazing design! Can you make another tutorial for this design?",
  },
  {
    name: "Singh Eknoor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=singh",
    comment: "What a stunning design! You are so talented and creative!",
  },
  {
    name: "Rani Jhadav",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rani",
    comment:
      "I love your design! It’s so beautiful and unique! How did you learn to do this?",
  },
];

const CommentCards = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 max-w-4xl ">
      <h1 className="text-xl font-semibold dark:text-blue-100  text-blue-900 mb-4">
        Latest Comments
      </h1>
      <table className="w-full table-auto">
        <thead>
          <tr className="text-left text-gray-500 dark:text-white border-b">
            <th className="pb-2">Name</th>
            <th className="pb-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((user, index) => (
            <tr key={index} className="border-b last:border-0">
              <td className="flex items-center gap-3 py-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-semibold dark:text-blue-100  text-blue-800">
                  {user.name}
                </span>
              </td>
              <td className="text-gray-700 dark:text-white py-4">
                {user.comment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentCards;
