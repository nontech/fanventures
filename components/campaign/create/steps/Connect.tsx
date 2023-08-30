const Connect = () => {
  return (
  <>
    <h1>Connect Page</h1>
    <div className="grid grid-cols-3 gap-6">
      {/* Income Sources */}
      <div className="col-span-full">
          <label htmlFor="username" className="block text-sm font-medium leading-6">
            Find your income sources*
          </label>
          <div className="mt-2">
            <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="janesmith"
              />
            </div>
          </div>
        </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/YT_icon.png" />
      </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/patreon_icon.png" />
      </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/shopify_icon.png" />
      </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/discord_icon.webp" />
      </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/instagram_icon.jpeg" />
      </div>
      <div className="col-span-1 bg-black border border-white">
        <img src="./campaign/connect/tiktok_icon.png" />
      </div>
    </div>

    {/* Connected Account */}
    <div className="flex justify-between mt-10">
      <div>Connected Accounts</div>
      <div>+ Add another account</div>
    </div>

    {/* Connected Accounts List */}
    <div className="grid grid-cols-5 gap-2 border p-4">
      <div className="col-span-1 row-span-2">
        <img src="./campaign/connect/YT_icon.png" />
      </div>
      <div className="col-span-3">
        Flux Academy
      </div>
      <div className="col-span-1">
        $1.8m est. Value
      </div>
      <div className="col-span-1">
        628K subscribers
      </div>
      <div className="col-span-1">
        1.6k videos
      </div>
      <div className="col-span-1">
        100m views p.a.
      </div>
      <div className="col-span-1">
        $235k income p.a
      </div>
    </div>

    <div className="flex justify-end mt-10 mr-10">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Save & Continue</button>
    </div>
  </>
  );
};

export default Connect;