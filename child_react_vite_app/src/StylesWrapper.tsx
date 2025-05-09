import React, { useEffect, useRef } from "react";
import appStyles from "./App.css?inline";

const StylesWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const root = wrapperRef.current;
    if (root) {
      // Inject all styles if not already present
      const styleIds = [{ id: "shadow-style-app", content: appStyles }];
      styleIds.forEach(({ id, content }) => {
        if (!root.querySelector(`style[data-shadow-style='${id}']`)) {
          const style = document.createElement("style");
          style.setAttribute("data-shadow-style", id);
          style.textContent = content;
          root.appendChild(style);
        }
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} id="styles-container">
      {children}
    </div>
  );
};

export default StylesWrapper;
