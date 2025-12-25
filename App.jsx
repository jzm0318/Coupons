import React, { useState, useEffect } from 'react';

// REMOVED: import { ... } from 'lucide-react'; 
// Using Inline SVG Icon Components below to ensure zero-dependency deployment

const HeartIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
);
const CoffeeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h12Z"/><path d="M3 14h13"/><path d="M17 11h1a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3h-1"/><path d="M6 2v2"/></svg>
);
const SparklesIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const UtensilsIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"/></svg>
);
const MoonIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
);
const CheckIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 6 9 17l-5-5"/></svg>
);
const CarIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
);
const WineIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 22h8"/><path d="M7 10h10"/><path d="M12 15v7"/><path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>
);
const GiftIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5H12Z"/></svg>
);
const SmileIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
);
const TicketIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
);

// Initial coupon data
const INITIAL_COUPONS = [
  {
    id: 1,
    title: "Breakfast in Bed",
    description: "Pancakes, sausage, and coffee served with a smile.",
    icon: <CoffeeIcon className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    buttonColor: "bg-amber-500 hover:bg-amber-600"
  },
  {
    id: 2,
    title: "Back Massage",
    description: "30 minutes of relaxation. No complaints allowed.",
    icon: <SparklesIcon className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    buttonColor: "bg-purple-500 hover:bg-purple-600"
  },
  {
    id: 3,
    title: "Dinner Date Night",
    description: "You get to pick a dinner out of your choosing.",
    icon: <UtensilsIcon className="w-6 h-6 text-rose-600" />,
    color: "bg-rose-50",
    borderColor: "border-rose-200",
    buttonColor: "bg-rose-500 hover:bg-rose-600"
  },
  {
    id: 4,
    title: "Movie Night Pick",
    description: "You control the remote. No groaning about your choice.",
    icon: <MoonIcon className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600"
  },
  {
    id: 5,
    title: "Household Chore Pass",
    description: "One chore of your choice, completely handled by me.",
    icon: <CheckIcon className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600"
  },
  {
    id: 6,
    title: "Car Wash",
    description: "I take your car to get washed.",
    icon: <CarIcon className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    buttonColor: "bg-blue-500 hover:bg-blue-600"
  },
  {
    id: 7,
    title: "Wine & Unwind",
    description: "A bottle of wine and quiet time to yourself.",
    icon: <WineIcon className="w-6 h-6 text-red-800" />,
    color: "bg-red-50",
    borderColor: "border-red-200",
    buttonColor: "bg-red-800 hover:bg-red-900"
  },
  {
    id: 8,
    title: "Wildcard",
    description: "Redeemable for one specific request within reason!",
    icon: <GiftIcon className="w-6 h-6 text-fuchsia-600" />,
    color: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
    buttonColor: "bg-fuchsia-500 hover:bg-fuchsia-600"
  },
  {
    id: 9,
    title: "Free Hug",
    description: "One warm, giant hug. Redeemable anytime, infinitely!",
    icon: <SmileIcon className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-50",
    borderColor: "border-pink-200",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    isUnlimited: true
  }
];

export default function App() {
  const [coupons, setCoupons] = useState(() => {
    let currentData = [];
    try {
      const savedData = localStorage.getItem('love_coupons_data');
      if (savedData) {
        currentData = JSON.parse(savedData);
      }
    } catch (e) {
      console.error("Could not load from storage", e);
    }

    if (currentData.length === 0) {
      return INITIAL_COUPONS.map(c => ({ ...c, redeemed: false, redeemedAt: null }));
    }

    const missingCoupons = INITIAL_COUPONS.filter(ic => !currentData.some(c => c.id === ic.id));
    
    return [
      ...currentData,
      ...missingCoupons.map(c => ({ ...c, redeemed: false, redeemedAt: null }))
    ];
  });

  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('love_coupons_data', JSON.stringify(coupons));
    } catch (e) {
      console.error("Could not save to storage", e);
    }
  }, [coupons]);

  const handleRedeemClick = (coupon) => {
    setSelectedCoupon(coupon);
    setIsModalOpen(true);
  };

  const confirmRedemption = () => {
    if (!selectedCoupon) return;

    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    if (selectedCoupon.isUnlimited) {
      const historyEntry = {
        ...selectedCoupon,
        id: Date.now(), 
        redeemed: true,
        redeemedAt: formattedDate,
        isUnlimited: false 
      };
      
      setCoupons(prev => [...prev, historyEntry]);
    } else {
      setCoupons(prev => prev.map(c => 
        c.id === selectedCoupon.id 
          ? { ...c, redeemed: true, redeemedAt: formattedDate } 
          : c
      ));
    }

    setIsModalOpen(false);
    setSelectedCoupon(null);
    
    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCoupon(null);
  };

  const handleReset = () => {
    setCoupons(INITIAL_COUPONS.map(c => ({ ...c, redeemed: false, redeemedAt: null })));
    setShowResetConfirm(false);
    window.location.reload(); 
  };

  const activeCoupons = coupons.filter(c => !c.redeemed);
  const redeemedCoupons = coupons.filter(c => c.redeemed);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-rose-200 pb-12 relative overflow-hidden flex flex-col">
      
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="animate-bounce text-6xl">❤️</div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-full bg-rose-500/10 animate-pulse"></div>
          </div>
        </div>
      )}

      <header className="bg-white border-b border-rose-100 shadow-sm sticky top-0 z-10 safe-area-top">
        <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-rose-500 p-2 rounded-lg text-white shadow-sm">
              <HeartIcon className="w-5 h-5 fill-current" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Brittany's Love Coupons</h1>
          </div>
          <div className="text-sm font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full">
            {activeCoupons.length} Active
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 flex-grow">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">For My Beautiful Wife Brittany</h2>
          <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
            Select a coupon below to redeem it. I promise to honor these whenever is convenient for me ;)!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {activeCoupons.map((coupon) => (
            <div 
              key={coupon.id}
              className={`group relative bg-white rounded-xl shadow-sm border-l-4 hover:shadow-md transition-all duration-300 overflow-hidden ${coupon.borderColor}`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-2 rounded-lg ${coupon.color} transition-transform group-hover:scale-110 duration-300`}>
                    {coupon.icon}
                  </div>
                  <div className="flex gap-2">
                    {coupon.isUnlimited && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-full">
                        Unlimited
                      </span>
                    )}
                    <TicketIcon className="w-5 h-5 text-slate-200 group-hover:text-slate-300 transition-colors" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{coupon.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed h-10">{coupon.description}</p>
                <button
                  onClick={() => handleRedeemClick(coupon)}
                  className={`w-full py-2.5 px-4 rounded-lg text-white text-sm font-bold shadow-sm transition-all active:scale-95 hover:shadow-md ${coupon.buttonColor}`}
                >
                  Redeem Coupon
                </button>
              </div>
            </div>
          ))}
          
          {activeCoupons.length === 0 && (
            <div className="col-span-full py-16 text-center bg-white rounded-xl border-2 border-dashed border-slate-200 mx-4">
              <div className="inline-block p-4 bg-rose-50 rounded-full mb-4">
                <HeartIcon className="w-12 h-12 text-rose-300 fill-rose-100" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-1">All coupons redeemed!</h3>
              <p className="text-slate-500 text-sm mb-6">I hope you enjoyed every single one.</p>
              <button 
                 onClick={() => setShowResetConfirm(true)}
                 className="text-xs text-slate-400 underline hover:text-rose-500 transition-colors"
              >
                (Secret Reset Button)
              </button>
            </div>
          )}
        </div>

        {redeemedCoupons.length > 0 && (
          <div className="opacity-80">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px bg-slate-200 flex-1"></div>
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Redemption History</h3>
              <div className="h-px bg-slate-200 flex-1"></div>
            </div>

            <div className="space-y-3">
              {[...redeemedCoupons].reverse().map((coupon) => (
                <div key={coupon.id} className="bg-slate-100 rounded-lg p-4 flex items-center justify-between border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-200 rounded-full grayscale opacity-50">
                      {coupon.icon}
                    </div>
                    <div>
                      <span className="block font-medium text-slate-600 line-through decoration-slate-300 decoration-2">
                        {coupon.title}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        Used: {coupon.redeemedAt}
                      </span>
                    </div>
                  </div>
                  <div className="bg-slate-200/80 text-slate-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border border-slate-300/50">
                    Redeemed
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="text-center py-8 text-slate-400 text-sm safe-area-bottom">
        <p>Made with ❤️ just for you</p>
      </footer>

      {isModalOpen && selectedCoupon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 safe-area-padding">
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded-2xl shadow-2xl max-w-xs w-full z-10 overflow-hidden transform transition-all scale-100 animate-in fade-in zoom-in duration-200">
            <div className={`h-24 ${selectedCoupon.color} flex items-center justify-center relative`}>
              <div className="p-4 bg-white rounded-full shadow-lg relative z-10">
                {selectedCoupon.icon}
              </div>
              <div className="absolute inset-0 bg-white/20"></div>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-slate-800 mb-2">Redeem Coupon?</h3>
              <div className="text-slate-600 mb-8 text-sm leading-relaxed">
                {selectedCoupon.isUnlimited ? "This coupon is unlimited! Using it will just add it to your history." : (
                  <>
                  Are you sure you want to use your <br/>
                  <span className="font-bold text-rose-600 text-lg block mt-1">"{selectedCoupon.title}"</span>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={confirmRedemption}
                  className="w-full py-3.5 px-4 bg-rose-500 hover:bg-rose-600 active:bg-rose-700 text-white rounded-xl font-bold shadow-lg shadow-rose-200 transition-all transform active:scale-[0.98]"
                >
                  Yes, Use It Now!
                </button>
                <button
                  onClick={closeModal}
                  className="w-full py-3 px-4 bg-white hover:bg-slate-50 text-slate-500 rounded-xl font-semibold transition-colors text-sm"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
           <div 
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            onClick={() => setShowResetConfirm(false)}
          ></div>
          <div className="bg-white rounded-xl p-6 z-10 max-w-xs w-full text-center">
            <h3 className="font-bold text-lg mb-2">Reset All Coupons?</h3>
            <p className="text-sm text-slate-500 mb-4">This will make all coupons available again. This cannot be undone.</p>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2 bg-slate-100 rounded-lg font-medium"
              >
                Cancel
              </button>
              <button 
                onClick={handleReset}
                className="flex-1 py-2 bg-rose-500 text-white rounded-lg font-bold"
              >
                Reset All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
