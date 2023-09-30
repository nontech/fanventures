
const CategoryCards = () => {
  const categories = [
    {
      id: 1,
      title: "Video Creators",
      description: "Creating and monetizing videos on social media.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Influencers",
      description: "Generating income from promoting a company's products or services or being affiliated with a brand.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Podcasters",
      description: "Recording, editing and monetizing podcasts on various platforms.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 4,
      title: "Music Artists",
      description: "Publishing songs and receiving royalties.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 5,
      title: "Writers",
      description: "Generate an income from creating blogs and posts on a variety of subjects.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "None of that",
      description: "None of the mentioned groups but monetizing an audience online through different means.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      Join Us
      <div className="flex flex-wrap justify-start">
        {categories.map((category) => (
          <div key={category.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-md">
              <img src={category.imageUrl} alt={category.title} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{category.title}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards