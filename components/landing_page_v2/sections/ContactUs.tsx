import ContactUsButton from "./ContactUsButton";

const text = {
  title: "Have anymore questions?",
  tagline: "We are here for you"
}

const ContactUs = () => {
  return (
    <div className="mt-20 mb-20">
      <div>{text.title}</div>
      <div>{text.tagline}</div>
      <ContactUsButton />
    </div>
  );
};

export default ContactUs;