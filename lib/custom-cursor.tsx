'use client'
import React, { useEffect } from "react";
import "@/public/styles/custom-cursor.css";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.querySelector<HTMLDivElement>(".cursor");
    const cursorInner = document.querySelector<HTMLDivElement>(".cursor2");
    const links = document.querySelectorAll<HTMLAnchorElement>("a");

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursor) {
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (cursorInner) {
        cursorInner.style.left = `${x}px`;
        cursorInner.style.top = `${y}px`;
      }
    };

    const handleMouseDown = () => {
      cursor?.classList.add("click");
      cursorInner?.classList.add("cursorinnerhover");
    };

    const handleMouseUp = () => {
      cursor?.classList.remove("click");
      cursorInner?.classList.remove("cursorinnerhover");
    };

    const handleLinkHover = () => {
      cursor?.classList.add("hover");
    };

    const handleLinkLeave = () => {
      cursor?.classList.remove("hover");
    };

    // Attach event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor2"></div>
    </>
  );
};

export default CustomCursor;
