type LockedAction = { type: "LOCKED" };
type UnlockedAction = { type: "UNLOCKED" };

type LockState = {
  isLocked: boolean;
};

type LockAction = LockedAction | UnlockedAction;

export const lockReducer = (state: LockState, action: LockAction) => {
  switch (action.type) {
    case "LOCKED":
      return { isLocked: true };
    case "UNLOCKED":
      return { isLocked: false };
    default:
      return state;
  }
};
