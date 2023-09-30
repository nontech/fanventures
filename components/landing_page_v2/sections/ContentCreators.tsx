const ContentCreators = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="mb-10">How It Works For Content Creators</div>
      
      <div className="flex justify-center space-x-4">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Create a Project</h2>
            <p className="text-gray-600">Start your project by creating a detailed campaign and setting a fundraising goal.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Engage with Fans</h2>
            <p className="text-gray-600">Engage with your fans through regular updates, messages, and rewards throughout the campaign to keep them invested.</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Receive Funds</h2>
            <p className="text-gray-600">Once the campaign reaches its goal, the funds are transferred to your account to help bring your creative vision to life.</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCreators;