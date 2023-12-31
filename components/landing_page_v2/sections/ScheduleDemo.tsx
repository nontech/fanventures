import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { PopupModal } from 'react-calendly';

// Define the type for PopupModal's props
type PopupModalProps = React.ComponentProps<typeof PopupModal>;

declare global {
  interface Window {
    Calendly: {
      initPopupWidget(options: { url: string }): void;
      // Add other Calendly methods/properties here if needed
    };
  }
}

const DynamicPopupModal = dynamic<PopupModalProps>(() => import('react-calendly').then((mod) => mod.PopupModal), {
  ssr: false,
});

const ScheduleDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load Calendly widget script asynchronously
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      // Clean up script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <button
        className="bg-secondary text-white px-4 py-2.5 rounded-lg"
        onClick={() => setIsOpen(true)}
      >
        Schedule Demo
      </button>
      {typeof window !== 'undefined' && (
        <DynamicPopupModal
          url="https://calendly.com/fanventures/30min"
          onModalClose={() => setIsOpen(false)}
          open={isOpen}
          rootElement={document.getElementById('__next')} // Make sure 'root' exists, root in Nextjs is '__next'
        />
      )}
    </div>
  );
};

export default ScheduleDemo;
