import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Coffee, 
  Utensils, 
  Moon, 
  Sparkles, 
  Ticket, 
  Check, 
  X,
  Music,
  Car,
  Wine,
  Gift,
  Smile
} from 'lucide-react';

// Initial coupon data
const INITIAL_COUPONS = [
  {
    id: 1,
    title: "Breakfast in Bed",
    description: "Pancakes, sausage, and coffee served with a smile.",
    icon: <Coffee className="w-6 h-6 text-amber-600" />,
    color: "bg-amber-50",
    borderColor: "border-amber-200",
    buttonColor: "bg-amber-500 hover:bg-amber-600"
  },
  {
    id: 2,
    title: "Back Massage",
    description: "30 minutes of relaxation. No complaints allowed.",
    icon: <Sparkles className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50",
    borderColor: "border-purple-200",
    buttonColor: "bg-purple-500 hover:bg-purple-600"
  },
  {
    id: 3,
    title: "Dinner Date Night",
    description: "You get to pick a dinner out of your choosing.",
    icon: <Utensils className="w-6 h-6 text-rose-600" />,
    color: "bg-rose-50",
    borderColor: "border-rose-200",
    buttonColor: "bg-rose-500 hover:bg-rose-600"
  },
  {
    id: 4,
    title: "Movie Night Pick",
    description: "You control the remote. No groaning about your choice.",
    icon: <Moon className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50",
    borderColor: "border-indigo-200",
    buttonColor: "bg-indigo-500 hover:bg-indigo-600"
  },
  {
    id: 5,
    title: "Household Chore Pass",
    description: "One chore of your choice, completely handled by me.",
    icon: <Check className="w-6 h-6 text-emerald-600" />,
    color: "bg-emerald-50",
    borderColor: "border-emerald-200",
    buttonColor: "bg-emerald-500 hover:bg-emerald-600"
  },
  {
    id: 6,
    title: "Car Wash",
    description: "I take your car to get washed.",
    icon: <Car className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50",
    borderColor: "border-blue-200",
    buttonColor: "bg-blue-500 hover:bg-blue-600"
  },
  {
    id: 7,
    title: "Wine & Unwind",
    description: "A bottle of wine and quiet time to yourself.",
    icon: <Wine className="w-6 h-6 text-red-800" />,
    color: "bg-red-50",
    borderColor: "border-red-200",
    buttonColor: "bg-red-800 hover:bg-red-900"
  },
  {
    id: 8,
    title: "Wildcard",
    description: "Redeemable for one specific request within reason!",
    icon: <Gift className="w-6 h-6 text-fuchsia-600" />,
    color: "bg-fuchsia-50",
    borderColor: "border-fuchsia-200",
    buttonColor: "bg-fuchsia-500 hover:bg-fuchsia-600"
  },
  {
    id: 9,
    title: "Free Hug",
    description: "One warm, giant hug. Redeemable anytime, infinitely!",
    icon: <Smile className="w-6 h-6 text-pink-500" />,
    color: "bg-pink-50",
    borderColor: "border-pink-200",
    buttonColor: "bg-pink-500 hover:bg-pink-600",
    isUnlimited: true
  }
];

export default function App() {
  // Initialize from localStorage with merge logic
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

    // If no data, start fresh
    if (currentData.length === 0) {
      return INITIAL_COUPONS.map(c => ({ ...c, redeemed: false, redeemedAt: null }));
    }

    // If data exists, merge in any new coupons (like the Free Hug one) that aren't in storage yet
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

  // Save to localStorage whenever coupons change
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
              <Heart className="w-5 h-5 fill-current" />
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
                    <Ticket className="w-5 h-5 text-slate-200 group-hover:text-slate-300 transition-colors" />
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
                <Heart className="w-12 h-12 text-rose-300 fill-rose-100" />
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
