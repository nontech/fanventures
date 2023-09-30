const Fans = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="mb-10">how it works for fans taking the role of investors</div>
      
      <div className="flex justify-center space-x-4">
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Become a Backer</h2>
            <p className="text-gray-600">Find a campaign that excites you and become a backer by pledging support.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Participate in the Success</h2>
            <p className="text-gray-600">Receive a return based on the future success of the content creator as well as other unique rewards.</p>
        </div>

        
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm">
            <h2 className="text-lg font-semibold mb-2">Make a Difference</h2>
            <p className="text-gray-600">Stay connected with your favorite creators through regular updates & notifications to contribute to your common success.</p>
        </div>
      </div>
    </div>
  );
};

export default Fans;