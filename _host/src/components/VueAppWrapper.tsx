import React, { useEffect, useRef } from "react";

type VueAppWrapperProps = {
  count: number;
};

const VueAppWrapper: React.FC<VueAppWrapperProps> = (props) => {
  const { count } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        const VueAppLoader = await import("child_app/VueApp");
        if (containerRef.current) {
          const app = VueAppLoader.default({
            message: `message from host app with count: ${count}`,
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

  return <div className="border p-4 mt-4" ref={containerRef} />;
};

export default VueAppWrapper;
