export default function Metrics() {
  return (
      <div className="flex justify-between items-center mt-12 mb-12">

      <svg className="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
      </svg>
      
      <div>
        <div className="font-semibold text-lg">Total Investments</div>
        <div className="text-green-600 font-bold text-xl">$100m <span className="text-xs ml-1">+24.8%</span></div>
      </div>
    
      <div>
        <div className="font-semibold text-lg">Total Funded Campaigns</div>
        <div className="text-green-600 font-bold text-xl">$424m <span className="text-xs ml-1">+32.6%</span></div>
      </div>
    
      <div>
        <div className="font-semibold text-lg">Total Investors</div>
        <div className="text-green-600 font-bold text-xl">$2.6m <span className="text-xs ml-1">+41.2%</span></div>
      </div>

      <svg className="w-6 h-6 flex dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </div>
  );
}