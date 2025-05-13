import { Eye, Import, UserPlus, Users, User2Icon } from "lucide-react";
import GreetUser from "../Cards/GreetUser";
import StatCard from "../Cards/StatCard";
import BarChart from "../Cards/BarChart";
import PieChart from "../Cards/PieChart";
import LineChart from "../Cards/LineChart";
import CommentCards from "../Cards/CommentCards";
import { useEffect, useState } from "react";

export const metadata = {
  title: "Dashboard | ",
};

const data1 = [
  { x: 1, y: 2 },
  { x: 2, y: 5 },
  { x: 3, y: 3 },
  { x: 4, y: 6 },
];

const data2 = [
  { x: 1, y: 4 },
  { x: 2, y: 3 },
  { x: 3, y: 6 },
  { x: 4, y: 2 },
];

const data3 = [
  { x: 1, y: 1 },
  { x: 2, y: 3.5 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

const data4 = [
  { x: 1, y: 2.5 },
  { x: 2, y: 4.5 },
  { x: 3, y: 3 },
  { x: 4, y: 6 },
];

const HomePage = () => {
  const [user, setUser] = useState(null);
  const userId = "665db7331e40a7aeb7ff3aa7";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/user/${userId}`);
        const data = await res.json();
        if (res.ok) setUser(data);
        else console.error("Error:", data.error);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <GreetUser />
      <section className="w-full px-4 pt-6 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-[#EFF6FF] dark:bg-gray-900">
        {/* Top Section: Stats + User Info */}
        <div className="flex flex-col xl:flex-row justify-between gap-6 xl:gap-12 mb-10">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            <StatCard
              number={46}
              title="Total Views"
              percentage={95}
              icon={
                <Eye className="h-12 w-12 p-2 text-white bg-indigo-500 rounded-lg" />
              }
            />
            <StatCard
              number={42}
              title="Total Followers"
              percentage={95}
              icon={
                <Users className="h-12 w-12 p-2 text-white bg-blue-500 rounded-lg" />
              }
            />
            <StatCard
              number={456}
              title="Total Followings"
              percentage={95}
              icon={
                <UserPlus className="h-12 w-12 p-2 text-white bg-green-500 rounded-lg" />
              }
            />
            <StatCard
              number={56}
              title="Saved Posts"
              percentage={95}
              icon={
                <Import className="h-12 w-12 p-2 text-white bg-yellow-500 rounded-lg" />
              }
            />
          </div>

          {/* User Info Card */}
          <div className="flex items-center w-full xl:w-64 px-5 py-4 gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border">
            <User2Icon className="h-12 w-12 p-2 text-white bg-orange-700 rounded-full" />
            <div className="flex flex-col">
              <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
                {user?.fullName || "Loading..."}
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                @{user?.username || "..."}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Profile Visits
            </h2>
            <BarChart />
          </div>

          <div className="w-full lg:w-80 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Recent Messages
            </h2>
            <div className="p-4 border rounded-lg space-y-4">
              {[
                {
                  name: "Hank Schrader",
                  handle: "@johnducky",
                  color: "bg-blue-500",
                },
                {
                  name: "Dean Winchester",
                  handle: "@imdean",
                  color: "bg-green-500",
                },
                {
                  name: "John Dodol",
                  handle: "@dodoljohn",
                  color: "bg-purple-500",
                },
              ].map((msg, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full ${msg.color}`}></div>
                  <div>
                    <p className="font-semibold">{msg.name}</p>
                    <p className="text-sm text-gray-500">{msg.handle}</p>
                  </div>
                </div>
              ))}
              <button className="w-full py-1.5 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm">
                Start Conversation
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              Profile Visit
            </h2>
            <div className="space-y-6">
              <LineChart
                title="Europe"
                title1="280"
                data={data1}
                strokeColor="#FF5733"
                gradientId="gradient1"
              />
              <LineChart
                title="India"
                title1="280"
                data={data2}
                strokeColor="#33C3FF"
                gradientId="gradient2"
              />
              <LineChart
                title="Australia"
                title1="280"
                data={data3}
                strokeColor="#28A745"
                gradientId="gradient3"
              />
              <LineChart
                title="USA"
                title1="280"
                data={data4}
                strokeColor="#6F42C1"
                gradientId="gradient4"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Latest Comments
              </h2>
              <CommentCards />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                Visitors Profile
              </h2>
              <PieChart />
            </div>
          </div>
        </div>

        <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://mymeals.in"
            className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4"
          >
            My Meals Company
          </a>
        </footer>
      </section>
    </>
  );
};

export default HomePage;
