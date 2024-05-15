import { Transition, TransitionChild } from "@headlessui/react";
import { forwardRef, useEffect, useState } from "react";

// RootTransition component
export const RootTransition = forwardRef(({ children, ...props }, ref) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Transition ref={ref} show={show} {...props}>
      {children}
    </Transition>
  );
});

// ChildTransition component
export const ChildTransition = forwardRef(
  (
    { delay, children, direction = "up", speed = 500, className, ...props },
    ref
  ) => {
    const enterFromDirection =
      direction === "up"
        ? "translate-y-6"
        : direction === "down"
          ? "-translate-y-6"
          : direction === "left"
            ? "translate-x-6"
            : "-translate-x-6";

    const enterToDirection =
      direction === "up"
        ? "translate-y-0"
        : direction === "down"
          ? "translate-y-0"
          : direction === "left"
            ? "translate-x-0"
            : "translate-x-0";

    return (
      <TransitionChild
        ref={ref}
        className={`${className} delay-${delay}`} // Apply delay using a CSS class
        suppressHydrationWarning
        enter={`transition-all ease-in-out duration-${speed}`}
        enterFrom={`opacity-0 ${enterFromDirection}`}
        enterTo={`opacity-100 ${enterToDirection}`}
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        {...props}
      >
        <div>{children}</div>
      </TransitionChild>
    );
  }
);
