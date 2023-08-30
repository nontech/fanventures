import PageTitle from '../../../common/PageTitle'
import PrimaryButton from '../../../common/buttons/PrimaryButton'

const Funding = () => {
  
  const LabelStyle = "block text-sm font-medium leading-6"
  const LabelDescriptionStyle = "text-sm leading-6 text-gray-500 mb-2"
  const IncomeSourceRowStyle = "col-span-1 flex items-center justify-center"
  return (
    <div className="p-20 w-3/5">
      <PageTitle title="Funding" />

      {/* Campaign Type */}
      <div className="mt-10 mb-10">
        <div className={LabelStyle}>Campaign Type*</div>
        <div className={LabelDescriptionStyle}>Choose between Flexible Funding (keep what you raise) and Fixed Funding (all-or-nothing).</div>
        <div className="flex">
          <button className="w-60 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-none">
            Flexible Funding
          </button>
          <button className="w-60 bg-blue-300 hover:bg-blue-600 text-white px-4 py-2 rounded-none">
            Fixed Funding
          </button>
        </div>
      </div>

      {/* Campaign Goal Amount & Currency */}
      <div className="mt-10 mb-10">
        <label htmlFor="tagline" className={LabelStyle}>Campaign Goal Amount & Currency</label>
        <p className={LabelDescriptionStyle}>How much money would you like to raise and in which currency?</p>
        <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <input
            type="text"
            name="tagline"
            id="tagline"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="mt-24 mb-10 my-4 border-t border-gray-300"></div>

      {/* Section: Income Sources */}
      <div className={LabelStyle}>Income Sources</div>
      <div className={LabelDescriptionStyle}>Select what percentage of which income source you would like to share and for how long.</div>  
      
      {/* Grid Container */}
      <div className="grid grid-cols-6 gap-4 mt-10 mb-10">
        
        {/* Headings */}
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold"></p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Platform</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Account Name</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Account Income</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Share in %</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Term in Years</p>
        </div>

        {/* Row 1 */}
        <div className={IncomeSourceRowStyle}>
          <input type="radio" name="row-1" />
        </div>
        <div className={IncomeSourceRowStyle}>
          <img src="./campaign/connect/YT_icon.png" />
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm font-semibold">Flux Academy</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <p className="text-sm">€235k income p.a.</p>
        </div>
        <div className={IncomeSourceRowStyle}>
          <div className="w-6 h-6 bg-white text-black flex items-center justify-center">
            <p className="text-sm font-semibold">10</p>
          </div>
        </div>
        <div className={IncomeSourceRowStyle}>
          <div className="w-6 h-6 bg-white text-black flex items-center justify-center">
            <p className="text-sm font-semibold">5</p>
          </div>
        </div>

        {/* Row 2 */}
        {/* Repeat the column structure for each row with different data */}

        {/* Row 3 */}
        {/* Repeat the column structure for each row with different data */}
      </div>

      {/* Totals */}
      <div className="flex flex-col items-end mb-10">
        <div>Total selected income:   €29.300,00</div>
        <div>Estimated Campaign Value:   €187.520,00</div>
      </div>

      {/* Section: Terms & Conditions */}
      <div className="flex flex-col">
        {/* Checkbox */}
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox mb-2" />
          <span className={LabelDescriptionStyle}>I have read the terms and conditions</span>
        </label>
        {/* Action Button */}
        <PrimaryButton name="LAUNCH CAMPAIGN" />
      </div>
    </div>
  )
};

export default Funding;