import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div  >
      <span class="text-yellow-300 text-xl mr-4">{counter}</span>
      <button
        class="border px-4 py-2 text-lg"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        +
      </button>
      <button
        class="border px-4 py-2 text-lg"
        onClick={() => setCounter((counter) => counter - 1)}
      >
        -
      </button>
    </div>
  );
}