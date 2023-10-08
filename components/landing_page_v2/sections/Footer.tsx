import NotifyMeButton from "./NotifyMeButton";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
    <hr className="my-12 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
    <div className="flex justify-center items-center mt-20">
      <section className="w-full h-40 rounded-lg">
        <SocialMedia />
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          The Platform will be launched on November 15, 2023
        </div>
        <NotifyMeButton />
      </section>
    </div>
    </>
  );
};

export default Footer