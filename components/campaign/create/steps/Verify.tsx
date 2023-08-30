import PageTitle from '../../../common/PageTitle'
import PrimaryButton from '../../../common/buttons/PrimaryButton'

export default function Verify() {

  const LabelStyle = "block text-sm font-medium leading-6"
  const LabelDescriptionStyle = "text-sm leading-6 text-gray-500 mb-2"

  return (
    <div className="p-20 w-3/5">
      <PageTitle title="Verify" />
          
      {/* Section: Basic info */}

      {/* Grid parent */}
      <div className="mt-10 grid gap-x-6 gap-y-8 grid-cols-6">

        {/* Grid item Row 1: First & Last name */}

        {/* Legal First name */}
        <div className="col-span-3">
          <label htmlFor="first-name" className={LabelStyle}>Legal First name</label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* Legal Last name */}
        <div className="col-span-3">
          <label htmlFor="last-name" className={LabelStyle}>Legal Last name</label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Grid item Row 2: DoB & Phone Number */}

        {/* DoB */}
        <div className="col-span-3">
          <label htmlFor="dob" className={LabelStyle}>Date of birth</label>
          <div className="mt-2">
            <input
              id="dob"
              name="dob"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* Phone Number */}
        <div className="sm:col-span-3">
          <label htmlFor="phone" className={LabelStyle}>Phone Number</label>
          <div className="mt-2">
            <input
              id="phone"
              name="phone"
              type="email"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Grid item Row 3: Country */}
        <div className="sm:col-span-3">
          <label htmlFor="country" className={LabelStyle}>Country</label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
          </div>
        </div>

        {/* Grid item Row 4: City, State/Province, Zip/Postal code */}
        {/* City */}
        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className={LabelStyle}>City</label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* State */}
        <div className="sm:col-span-2">
          <label htmlFor="region" className={LabelStyle}>State / Province</label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        {/* ZIP */}
        <div className="sm:col-span-2">
          <label htmlFor="postal-code" cclassName={LabelStyle}>ZIP / Postal code</label>
          <div className="mt-2">
            <input
              type="text"
              name="postal-code"
              id="postal-code"
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Grid item Row 5: Street Address */}
        <div className="col-span-full">
          <label htmlFor="street-address" className={LabelStyle}>Street address</label>
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="mt-20 mb-20 my-4 border-t border-gray-300"></div>

      {/* Section: Verification */}

      {/* Funds Recipient Verification */}
      <div className="mt-10 mb-10">
        <div className={LabelStyle}>Funds Recipient Verification</div>
        <div className={LabelDescriptionStyle}>The campaign owner must be verified to launch the campaign. ID verification will be done with a third party.</div>
        <PrimaryButton name="VERIFY YOUR ID" />
      </div>

      {/* Bank Information */}
      <div className="mb-10">
        <div className="col-span-full">
          <label htmlFor="account" className={LabelStyle}>Bank Information</label>
          <div className={LabelDescriptionStyle}>Fill out your bank account information. Learn more about payouts.</div>
          <div className="mt-2">
            <input
              type="text"
              name="account"
              id="account"
              placeholder='IBAN XX00000000000000000000'
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="col-span-full mt-2 mb-5">
        <div className={LabelDescriptionStyle}>Retype account number</div>
          <div className="mt-2">
            <input
              type="text"
              name="account"
              id="account"
              placeholder='IBAN XX00000000000000000000'
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <PrimaryButton name="SAVE BANK INFORMATION" />
      </div>

      {/* Divider */}
      <div className="mt-20 mb-20 my-4 border-t border-gray-300"></div>

      {/* Section: Statements */}

      {/* Financial Statements */}
      <div className="mb-10">
        <div className={LabelStyle}>Financial Statements</div>
        <div className={LabelDescriptionStyle}>Please upload any financial statements that you have from the past. The more information you provide the more successful your campaign will be.</div>
      </div>

      {/* Balance Sheet & Income Statement */}
      <div className="flex justify-between mb-10">
        {/* Balance Sheet */}
        <div>
          <label htmlFor="campaign-cover-image" className={LabelStyle}>Balance Sheet</label>
          <p className={LabelDescriptionStyle}>Upload the most current balance sheet.</p>
          <div className="flex justify-center items-center border bg-white px-6 py-10">
            <div className="flex text-sm leading-6 text-gray-600">
              {/* Camera Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              <span>Upload Sheet</span>
            </div>
          </div>
        </div>
        {/* Income Statement */}
        <div>
          <label htmlFor="campaign-cover-image" className={LabelStyle}>Income Statement</label>
          <p className={LabelDescriptionStyle}>Upload the most current income statement. </p>
          <div className="flex justify-center items-center border bg-white px-6 py-10">
            <div className="flex text-sm leading-6 text-gray-600">
              {/* Camera Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
              </svg>
              <span>Upload Figure</span>
            </div>
          </div>
        </div>
      </div>



      {/* Action Button */}
      <div className="flex justify-end">
        <PrimaryButton name="SAVE & CONTINUE" />
      </div>
    </div>
  )
}