import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useAppDispatch } from "store/hooks";
import { setActiveSection } from "store/navSlice";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (inView) dispatch(setActiveSection(id));
  }, [inView, id, dispatch]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}
