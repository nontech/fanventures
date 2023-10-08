// components/TallyForm.tsx
import React from 'react';

// It's a Tally Form
const ContactUsButton: React.FC = () => {
  return (
    <div>
      {/* Add the script to embed Tally */}
      <script async src="https://tally.so/widgets/embed.js"></script>

      {/* Add a button with Tally data attributes */}
      <button
        data-tally-open="m6KkzN"
        data-tally-layout="modal"
        data-tally-hide-title="1"
        data-tally-emoji-animation="none"
        data-tally-auto-close="0"
        className="text-primary px-4 py-2 border-2 rounded-lg border-primary/20"
      >
        Contact Us
      </button>
    </div>
  );
};

export default ContactUsButton;
