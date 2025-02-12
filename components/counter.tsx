"use client";

import { useAppSelector } from "@/hooks/reduxHook";
import { decrement, increment, reset } from "@/redux/counterSlice";
import { useState } from "react";

export default function Counter() {
  // const count = useSelector((state: RootState) => state.counter.value);
  const count = useAppSelector((state) => state);
  console.log(count);
  const [add, setAdd] = useState(0);

  // const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1> */}
      <div>{add}</div>
      <div className="space-x-2">
        <button
          // onClick={() => dispatch(increment())}
          onClick={() => setAdd((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          +
        </button>
        <button
          // onClick={() => dispatch(decrement())}
          onClick={() => setAdd((prev) => prev - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button
          // onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
