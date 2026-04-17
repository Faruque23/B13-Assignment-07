import { createContext, useContext, useState } from 'react';

const TimelineContext = createContext(null);

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (type, friendName) => {
    const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);
    setEntries((prev) => [
      {
        id: Date.now(),
        type,
        title: `${typeLabel} with ${friendName}`,
        date: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
