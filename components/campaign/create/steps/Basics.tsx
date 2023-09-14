import PageTitle from '../../../common/PageTitle'
import PrimaryButton from '../../../common/buttons/PrimaryButton'

export default function Basics() {

  const LabelStyle = "block text-sm font-medium leading-6"
  const LabelDescriptionStyle = "text-sm leading-6 text-gray-500 mb-2"


  return (
      <div className="p-20 w-3/5">
          <PageTitle title="Basics" />

          {/* Grid Container */}
          <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-10">

            {/* Title */}
            <div className="col-span-full">
              <label htmlFor="title" className={LabelStyle}>Campaign Title</label>
              <p className={LabelDescriptionStyle}>What is the title of your campaign?</p>
              <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="col-span-full">
              <label htmlFor="tagline" className={LabelStyle}>Campaign Tagline</label>
              <p className={LabelDescriptionStyle}>Provide a short description that best describes your campaign.</p>
              <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="tagline"
                  id="tagline"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Duration */}
            <div className="col-span-full">
              <label htmlFor="duration" className={LabelStyle}>Campaign Duration</label>
              <p className={LabelDescriptionStyle}>How many days shall your campaign last? (max. 60 days)</p>
              <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="duration"
                  id="duration"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Category */}
            <div className="col-span-full">
              <label htmlFor="category" className={LabelStyle}>Campaign Category</label>
              <p className={LabelDescriptionStyle}>Please state your content categories to help investors find you.</p>
              <div className="flex rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            {/* Cover Image */}
            <div className="col-span-1">
              <label htmlFor="campaign-cover-image" className={LabelStyle}>Campaign Cover Image</label>
              <p className={LabelDescriptionStyle}>Upload an image that represents your campaign.</p>
              <div className="flex justify-center items-center border bg-white px-6 py-10">
                <div className="flex text-sm leading-6 text-gray-600">
                  {/* Camera Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                  </svg>
                  <span>Upload Image</span>
                </div>
              </div>
            </div>

            {/* Video URL */}
            <div className="col-span-1">
              <label htmlFor="campaign-cover-image" className={LabelStyle}>Video URL (Recommended)</label>
              <p className={LabelDescriptionStyle}>Enter a YouTube or Vimeo URL to provide more information. </p>
              <div className="flex">
                <div className="flex w-3/4 rounded-md bg-white shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
                  <input
                    type="text"
                    name="tagline"
                    id="tagline"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
                <PrimaryButton name="ADD VIDEO" />
              </div>
              <div className="mt-2 flex justify-center border bg-white px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    {/* Camera Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                    <span>Upload Image</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="col-span-full">
              <label htmlFor="story" className={LabelStyle}>Story</label>
              <div className="mt-2">
                <p className={LabelDescriptionStyle}>Tell potential contributors more about your campaign</p>
                <textarea
                  id="story"
                  name="story"
                  rows={10}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

          </div>           

          {/* Save & Continue */}
          <div className="flex justify-end mt-10">
            <PrimaryButton name="Save & Continue" />
          </div>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_HXoNiiaJyTFPypZNe35uzcdl1M2nGLOAMEctC508k7RkAg/viewform?usp=sf_link">Google Form</a>
        </div>
  )
}
