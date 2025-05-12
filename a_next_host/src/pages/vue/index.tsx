import React, { useEffect, useRef, useState } from "react";

const VueAppWrapper: React.FC = () => {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        const VueAppLoader = await import("child_vue_rspack_app/VueApp");
        if (containerRef.current) {
          const app = VueAppLoader.default({
            message: `Hello from host app, count: ${count}`,
          });
          app.mount(containerRef.current);
        }
      } catch (error) {
        console.error("Failed to load Vue app:", error);
      }
    };

    loadVueApp();

    return () => {
      if (containerRef.current) {
        const app = containerRef.current._vue;
        if (app) {
          app.unmount();
        }
      }
    };
  }, [count]);

  return (
    <div className="max-w-[960px] mx-auto">
      count: {count}
      <div className="flex gap-2">
        <button
          className="border p-1 px-5 rounded-xl"
          onClick={() => setCount((prev) => prev - 1)}
        >
          -
        </button>
        <button
          className="border p-1 px-5 rounded-xl"
          onClick={() => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <div className="border p-4 mt-4" ref={containerRef} />
    </div>
  );
};

export default VueAppWrapper;
