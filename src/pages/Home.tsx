import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { iUser } from "../interface/Interface";


const Home = () => {
  const [getUser, setGetUser] = useState<iUser []>([]);

  const getAllUsers = async () => {
    const res = await axios.get(
      "https://user-data-ci61.onrender.com/user/viewalluser"
    );
    setGetUser(res.data.data);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className=" max-w-[1440px] mx-auto">
      <h1 className=" font-bold my-6 mx-[auto] text-center text-2xl ">
        All Users
      </h1>
      <section className=" flex gap-7 flex-wrap ">
        {getUser?.map((user: iUser, i: number) => (
          <Link to={`/userdetails/${user._id}`}>
            <main
              className=" flex w-80 p-7 items-center shadow-lg hover:transition-all hover:translate-1.5"
              key={i}
            >
              <div className=" h-16 w-16 bg-purple-700 rounded-full justify-center items-center flex font-medium text-3xl mr-3 text-white">
                {user?.username.charAt(0)}
              </div>
              <div>
                <h2 className=" font-medium text-lg"> {user?.username} </h2>
                <p className=""> {user?.email} </p>
              </div>
            </main>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Home;
