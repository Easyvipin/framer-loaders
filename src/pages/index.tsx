import Header from "@src/Components/Header";
import Loader from "@src/Components/Loader";
import Bar from "@src/Components/loaders/Bar";
import Cart from "@src/Components/loaders/Cart";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center p-8 gap-10">
      <Header />
      <div className="flex flex-wrap gap-8">
        <div className="border border-rose-300 h-80 w-80 rounded-lg shadow-violet-500 shadow-md hover:shadow-violet-700">
          <Bar />
        </div>
        <div className="border border-rose-300 h-80 w-80 rounded-lg shadow-violet-500 shadow-md hover:shadow-violet-700">
          <Cart />
        </div>
        <div className="border border-rose-300 h-80 w-80 rounded-lg shadow-violet-500 shadow-md hover:shadow-violet-700">
          loader
        </div>
      </div>
    </main>
  );
}
