import Link from "next/link"

export const metadata = {
  title: "Home",
  description: "Created by Kasra Torabi",
  Image: "./favicon.ico",
};

const Home = () => {
  return (
    <div >
      <h1 className="text-normal flex justify-center pt-10">HI !</h1>
      <button>
        <Link href="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
