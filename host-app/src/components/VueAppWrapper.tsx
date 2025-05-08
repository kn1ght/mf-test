import React, { useEffect, useRef } from "react";
import { createApp } from "vue";

const VueAppWrapper: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadVueApp = async () => {
      try {
        const VueApp = (await import("child_app/VueApp")).default;
        if (containerRef.current) {
          const app = createApp(VueApp);
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
  }, []);

  return <div ref={containerRef} />;
};

export default VueAppWrapper;
