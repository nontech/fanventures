const text = {
  title_1: "Invest In Your Favorite",
  title_2: "Content Creators",
  tagline: "FANVENTURES unites creators and fans to build success together",
  explore_btn: "Contact us"
}

import ScheduleDemo from "./ScheduleDemo";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center text-center mt-20">
      <h1 className="text-5xl font-bold mb-4 text-primary">{text.title_1}</h1>
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#EEE4BF] to-[#5E4D17] bg-clip-text text-transparent">{text.title_2}</h1>
      {/* Row 2: Tagline */}
      <p className="text-base mb-8 text-primary/80">{text.tagline}</p>
      {/* Row 3: Action Buttons */}
      <section className="flex space-x-4 justify-center">
        <ScheduleDemo />
        <button className="text-primary px-4 py-2 border-2 rounded-lg border-primary/20">{text.explore_btn}</button>
      </section>
    </div>
  );
};

export default HeroSection;
