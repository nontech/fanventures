const data = [
  {
    id: 1,
    name: 'John Doe',
    profile_pic: 'some_link',
    country: 'usa',
    flag: './usa_flag.png',
    campaign_stats: '$4,401 (204%) - 13 days left',
    valuation: '$10M',
    yield: '6.1% p.a.',
    investors: '24,081',
    social_media_links: [
      {
        name: 'YouTube',
        icon: './YT_icon.svg.png',
        alt: 'YouTube Icon',
        link: 'clickable_link'
      },
      {
        name: 'Patreon',
        icon: 'icon_src',
        alt: 'Patreon Icon',
        link: 'clickable_link'
      },
      {
        name: 'Spotify',
        icon: 'icon_src',
        alt: 'Spotify Icon',
        link: 'clickable_link'
      },
      {
        name: 'Instagram',
        icon: 'icon_src',
        alt: 'Instagram Icon',
        link: 'clickable_link'
      },
    ]
  }
];


export default function TrendingNow() {
  return (
    <>
      <h1 className="text-center w-full my-10 text-4xl font-bold">Trending Now</h1>
      {data.map(item => (
        <div className="max-w-md mx-auto relative rounded-lg shadow-md overflow-hidden bg-[#484860] text-white">
          
          {/* <!-- Profile Picture --> */}
          <div className="flex justify-center">
            <img className="w-20 h-20 rounded-full" 
                src={item.profile_pic}
                alt="Profile Picture" 
            />
          </div>

          {/* <!-- Name and Country --> */}
          <div className="px-6 py-4">
            <div className="text-xl font-semibold text-white">{item.name}</div>
            <div className="mt-2 flex items-center">
              <img className="h-4 w-6 mr-2" 
                  src={item.flag} 
                  alt="Country Flag" 
              />
            </div>
          </div>

          {/* <!-- Progress Bar --> */}
          <div className="px-6 py-3">
            <div className="text-md ">{item.campaign_stats}</div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
            </div>
          </div>

          {/* <!-- Valuation, Yield, Investors --> */}
          <div className="px-6 py-4">
            <div className="flex justify-between text-sm">
              <div>
                <div className="font-semibold ">Valuation</div>
                <div>{item.valuation}</div>
              </div>
              <div>
                <div className="font-semibold ">Yield</div>
                <div>{item.yield}</div>
              </div>
              <div>
                <div className="font-semibold">Investors</div>
                <div>{item.investors}</div>
              </div>
            </div>
          </div>

          {/* <!-- Icons of Brands --> */}
          <div className="flex justify-center items-center py-4">
            {item.social_media_links.map(sm => (
              <img className="h-6 w-6 mx-2" 
                  src={sm.icon}
                  alt={sm.alt}
              />
            ))}
          </div>
        </div>
      ))}
      <button className="block mx-auto my-10 bg-blue-500 text-white px-4 py-2 rounded-md">view all campaigns</button>
    </>
  );
}