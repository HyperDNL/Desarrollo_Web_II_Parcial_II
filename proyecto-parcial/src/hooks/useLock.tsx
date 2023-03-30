import { useReducer, useCallback } from "react";
import { lockReducer } from "../reducers/cardReducer";

const useLock = (setLocked: (locked: boolean) => void) => {
  const [{ isLocked }, dispatch] = useReducer(lockReducer, {
    isLocked: false,
  });

  const lock = useCallback(() => {
    dispatch({ type: "LOCKED" });
    setLocked(true);
  }, [setLocked]);

  const unlock = useCallback(() => {
    dispatch({ type: "UNLOCKED" });
    setLocked(false);
  }, [setLocked]);

  return { isLocked, lock, unlock };
};

export default useLock;
