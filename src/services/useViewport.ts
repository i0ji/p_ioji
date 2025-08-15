import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setScreenDimensions } from "../store/viewSlice";

export const useViewport = () => {
  const dispatch = useAppDispatch();

  const viewState = useAppSelector((state) => state.view);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setScreenDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      );
    };

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return viewState;
};

export const useIsMobile = () => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector((state) => state.view.isMobile);

  useEffect(() => {
    const handleResize = () => {
      dispatch(
        setScreenDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      );
    };

    if (typeof window !== "undefined") {
      handleResize();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return isMobile;
};
