import { useEffect } from 'react';
import Head from 'next/head';

declare global {
  interface Window {
    Calendly: {
      initPopupWidget(options: { url: string }): void;
      // Add other Calendly methods/properties here if needed
    };
  }
}

const ScheduleDemo = () => {
  useEffect(() => {
    // Load Calendly widget script asynchronously
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/fanventures/30min' });
    }
  };

  return (
    <>
      <Head>
        <script src="https://assets.calendly.com/assets/external/widget.js"></script>
      </Head>
      <div>
        <button
          className="bg-secondary text-white px-4 py-2 rounded-md"
          onClick={openCalendlyPopup}
        >
          Schedule Demo
        </button>
      </div>
    </>
  );
};

export default ScheduleDemo;
