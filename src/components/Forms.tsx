import React from 'react';
import { useTheme } from '../hooks/useTheme'; // Adjust the path as needed

interface forms {
  className?: string;
}
export const Forms: React.FC<forms> =  () => {
  const { theme } = useTheme(); // Get the theme value from the hook

  return (
    <>
      {theme === "dark" ?  
        <div className="relative h-64 overflow-hidden rounded-lg my-10 mx-2">
          <iframe
            src="https://app.formbricks.com/s/cm09tg7c300011xii8teim4qm"
            frameBorder="0"
            style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', border: 0 }}
            title="Embedded Form"
          ></iframe>
        </div> :
        <div className="relative h-64 overflow-hidden rounded-lg my-10 mx-2">
          <iframe
            src="https://app.formbricks.com/s/clzy2x60o0000m8ct2rbf09kc"
            frameBorder="0"
            className="absolute inset-0 w-full h-full border-0"
            title="Embedded Form"
          ></iframe>
        </div>
      }
    </>
  );
};
