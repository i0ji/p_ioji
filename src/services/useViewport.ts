import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenType, getScreenType } from "store/viewSlice";

export const useViewport = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateScreenType = () => {
      const width = window.innerWidth;
      const screenType = getScreenType(width);
      dispatch(setScreenType({ screenType, width }));
    };

    updateScreenType();

    window.addEventListener("resize", updateScreenType);

    return () => window.removeEventListener("resize", updateScreenType);
  }, [dispatch]);
};
