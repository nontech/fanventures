export default function Metrics() {
  return (
      <div className="flex justify-center space-x-8 py-4">
      <div className="flex-col py-4">
        <div className="font-semibold text-lg">Total Investments</div>
        <div className="text-green-600 font-bold text-xl">$100m <span className="text-xs ml-1">+24.8%</span></div>
      </div>
    
      <div className="flex-col py-4">
        <div className="font-semibold text-lg">Total Funded Campaigns</div>
        <div className="text-green-600 font-bold text-xl">$424m <span className="text-xs ml-1">+32.6%</span></div>
      </div>
    
      <div className="flex-col py-4">
        <div className="font-semibold text-lg">Total Investors</div>
        <div className="text-green-600 font-bold text-xl">$2.6m <span className="text-xs ml-1">+41.2%</span></div>
      </div>
    </div>
  );
}