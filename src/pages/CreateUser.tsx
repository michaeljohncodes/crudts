import React, { useState } from "react";
import Instance from "../api/Instance";
import Swal from "sweetalert2";
import { FadeLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [bio, setBio] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await Instance.post("/user/newuser", {
        username,
        email,
        age,
        bio,
        address,
      }).then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          timer: 2,
          showConfirmButton: false,
        });
        setLoading(false);
        navigate("/");
      });
    } catch (error) {
      console.log("failed to create user", error);
    }
  };

  return (
    <>
      {loading ? (
        <div
          style={{
            background: "rgba(128, 0, 128, 0.3)",
          }}
          className=" w-screen h-screen fixed flex justify-center items-center"
        >
          <FadeLoader color="#7e22ce" />
        </div>
      ) : (
        <div className=" max-w-[1440px] mx-auto">
          <h1 className=" font-bold my-6">User Detail</h1>
          <form onSubmit={submitForm} className="  gap-7 shadow-lg p-10">
            <div>Username</div>
            <input
              className=" h-10 w-80 border"
              type="text"
              placeholder="Enter your name"
              required
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <div>Email</div>
            <input
              className=" h-10 w-80 border "
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <div>Age</div>
            <input
              className=" h-10 w-80 border "
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => {
                setAge(Number(e.target.value));
              }}
            />
            <div>Address</div>

            <input
              className=" h-10 w-80 border "
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <div>Bio</div>
            <input
              className=" h-10 w-80 border "
              type="text"
              placeholder="Enter your bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
            <br />
            <button type="submit" className=" bg-purple-800 text-white p-3">
              Submmit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default CreateUser;
