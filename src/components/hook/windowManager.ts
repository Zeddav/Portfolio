import { useState } from "react";

export interface WindowItem {
  id: string;
  zIndex: number;
}

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowItem[]>([]);

  const openWindow = (id: string) => {
    setWindows((prev) => {
      if (prev.find((w) => w.id === id)) { // Show in top if already aopen
        return prev.map((w) => ({
          ...w,
          zIndex: w.id === id ? Math.max(...prev.map((w) => w.zIndex)) + 1 : w.zIndex,
        }));
      }
      const maxZ = prev.length ? Math.max(...prev.map((w) => w.zIndex)) : 0;
      return [...prev, { id, zIndex: maxZ + 1 }];
    });
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

    const closeAllWindows = () => {
    setWindows([]);
  };

  const bringToFront = (id: string) => {
    setWindows((prev) => {
      const maxZ = prev.length ? Math.max(...prev.map((w) => w.zIndex)) : 0;
      return prev.map((w) => (w.id === id ? { ...w, zIndex: maxZ + 1 } : w));
    });
  };

  return { windows, openWindow, closeWindow, closeAllWindows, bringToFront };
};
