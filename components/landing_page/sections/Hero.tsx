const text = {
  title: "Empower your Fans, fund your dreams",
  tagline: "Unite with people who believe in you and grow your online business together",
  start_campaign_btn: "START CAMPAIGN",
  explore_btn: "EXPLORE"
}

const HeroSection = () => {
  return (
    <div className="flex h-30vh">

      {/* Left Column */}
      <div className="w-1/2 h-full">
        <section className="flex flex-col h-full justify-center">
          {/* Row 1: Title */}
          <h1 className="text-4xl font-bold mb-4">{text.title}</h1>
          {/* Row 2: Tagline */}
          <p className="text-lg text-white-400 mb-4">{text.tagline}</p>
          {/* Row 3: Action Buttons */}
          <section className="space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">{text.start_campaign_btn}</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md">{text.explore_btn}</button>
          </section>
        </section>
      </div>

      {/* Right Column */}
      <div className="w-1/2">
        <img src="./landing_page/sections/hero/hero_image.png" alt="Image" />
      </div>

    </div>
  );
};

export default HeroSection;
