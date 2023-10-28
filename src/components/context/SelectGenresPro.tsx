import React, { createContext, useState } from "react";
import { Platform } from "../../hooks/usePlatforms";


export const SelectGenresContext = createContext<any | string>(null);

export default function SelectGenresPro({ children }: any | React.ReactNode) {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <SelectGenresContext.Provider
      value={{
        selectedPlatform,
        setSelectedPlatform,
      }}
    >
      {children}
    </SelectGenresContext.Provider>
  );
}
