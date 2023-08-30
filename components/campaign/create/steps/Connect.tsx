import PageTitle from '../../../common/PageTitle'
import PrimaryButton from '../../../common/buttons/PrimaryButton'

const Connect = () => {

  const LabelStyle = "block text-sm font-medium leading-6"
  const LabelDescriptionStyle = "text-sm leading-6 text-gray-500 mb-2"
  const AccountIconStyle = "col-span-1 h-30 flex justify-center items-center bg-black border border-white"


  return (
  <div className="p-20 w-3/5">
    <PageTitle title="Connect" />

    {/* Income Sources */}
    <div className="mt-10 mb-10">
      <label htmlFor="title" className={LabelStyle}>Find your income sources</label>
      <p className={LabelDescriptionStyle}>Connect all your monetization platforms to verify your income sources.</p>
      <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
        <input
          type="text"
          name="title"
          id="title"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          placeholder='Search: YouTube, Twitch, Patreon etc. '        
        />
      </div>
    </div>

    {/* Grid Container */}
    <div className="grid grid-cols-3 gap-6 h-fit">
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/YT_icon.png" />
      </div>
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/patreon_icon.png" />
      </div>
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/shopify_icon.png" />
      </div>
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/discord_icon.webp" />
      </div>
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/instagram_icon.jpeg" />
      </div>
      <div className={AccountIconStyle}>
        <img src="./campaign/connect/tiktok_icon.png" />
      </div>
    </div>
    
    <div className="mt-24 my-4 border-t border-gray-300"></div>

    {/* Connected Account */}
    <div className="flex justify-between mt-10 mb-5">
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

    {/* Save & Continue */}
    <div className="flex justify-end mt-10">
      <PrimaryButton name="Save & Continue" />
    </div>
    
  </div>
  );
};

export default Connect;