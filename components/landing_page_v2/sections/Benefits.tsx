const Benefits = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="mb-10">Benefits of our platform</div>
      
      <div className="flex justify-center space-x-4">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Flexible Funding</h2>
            <p className="text-gray-600">Content creators can choose from a range of flexible funding options that cater their specific needs.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Easy Payment Options</h2>
            <p className="text-gray-600">We make it simple for fans to support their favourite creators by offering multiple payment options, including PayPal and credit card.</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Campaign Management Tools</h2>
            <p className="text-gray-600">Our platform is designed to make running a campaign easy and effective, with campaign progress, analytics and feedback tools available to creators and fans</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Integrated Social Media</h2>
            <p className="text-gray-600">We know that social media is integral to a creator's success, so we have integrated popular platforms into our site to allow for greater reach and promotion.</p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;