import PrimaryButton from '../../../common/buttons/PrimaryButton'

const Funding = () => {
  return (
    <>
      <h1>Funding Page</h1>
      {/* Section: Campaign Type */}
      <div>
        <div>Campaign Type*</div>
        <div>Choose between Flexible Funding (keep what you raise) and Fixed Funding (all-or-nothing).</div>
        <div className="flex">
          <button className="w-60 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-none">
            Flexible Funding
          </button>
          <button className="w-60 bg-blue-300 hover:bg-blue-600 text-white px-4 py-2 rounded-none">
            Fixed Funding
          </button>
        </div>
      </div>

      {/* Section: Campaign Goal Amount & Currency */}
      <div>
        <label htmlFor="amount-currency" className="block text-sm font-medium leading-6">
        Campaign Goal Amount & Currency*
        </label>
        <span>How much money would you like to raise and in which currency?</span>
        <div className="mt-2">
          <input
            type="text"
            name="amount-currency"
            id="amount-currency"
            autoComplete="amount-currency"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      {/* Section: Income Sources */}
      <h3>Income Sources*</h3>
      <div>Select what percentage of which income source you would like to share and for how long.</div>
      {/* Table */}
      <div className="grid grid-cols-6 gap-4">
        {/* Headings */}
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold"></p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Platform</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Account Name</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Account Income</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Share in %</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Term in Years</p>
        </div>

        {/* Row 1 */}
        <div className="col-span-1 flex items-center justify-center">
          <input type="radio" name="row-1" />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          {/* <div className="w-6 h-6 bg-blue-500"></div> */}
          <img src="./campaign/connect/YT_icon.png" />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm font-semibold">Flux Academy</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p className="text-sm">€235k income p.a.</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <div className="w-6 h-6 bg-white text-black flex items-center justify-center">
            <p className="text-sm font-semibold">10</p>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center">
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
      <div className="flex flex-col items-end">
        <div>Total selected income:   €29.300,00</div>
        <div>Estimated Campaign Value:   €187.520,00</div>
      </div>

      {/* Section: Terms & Conditions */}
      <div className="flex flex-col">
        {/* Checkbox */}
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <span className="text-sm">I have read the terms and conditions</span>
        </label>
        {/* Action Button */}
        <PrimaryButton name="LAUNCH CAMPAIGN" />
      </div>
    </>
  )
};

export default Funding;