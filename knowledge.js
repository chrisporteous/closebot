// CloseBot Knowledge Base
// Last updated: 2026-03-09
// This file can be updated to add new products, objection handlers, and competitive intel

const KNOWLEDGE = {

  // ===========================================
  // PRODUCTS - Square's full ecosystem
  // ===========================================
  products: {
    payments: {
      name: "Square Payments",
      category: "payments",
      pitch: "Transparent pricing with no hidden fees. Next-day deposits as standard. One flat rate (1.75% chip & PIN) so sellers always know what they're paying.",
      keyBenefits: [
        "No monthly fees or hidden charges",
        "Next-day deposits (not 3 days like SumUp/Zettle)",
        "Offline payments capability",
        "All card types accepted"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5068-square-pricing",
        product: "https://squareup.com/gb/en/payments"
      }
    },
    
    pos: {
      name: "Square Point of Sale",
      category: "saas",
      pitch: "Free POS software that grows with the business. Real-time sales data, inventory management, and staff tools all in one place.",
      keyBenefits: [
        "Free - no monthly license fees",
        "Real-time reporting and analytics",
        "Staff management and permissions",
        "Customer directory built-in",
        "Works offline"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5065-get-started-with-square-point-of-sale",
        product: "https://squareup.com/gb/en/point-of-sale"
      }
    },
    
    terminal: {
      name: "Square Terminal",
      category: "hardware",
      pitch: "All-in-one device. Takes payments, prints receipts, no phone needed. Perfect for counter service or tableside. Built-in 4G backup.",
      price: "£149 + VAT (one-time, no rental)",
      keyBenefits: [
        "All-in-one: POS + payments + printer",
        "Built-in 4G backup if WiFi drops",
        "No phone or tablet required",
        "Own it outright - no rental fees"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6536-square-terminal-overview",
        product: "https://squareup.com/gb/en/hardware/terminal"
      }
    },
    
    register: {
      name: "Square Register",
      category: "hardware",
      pitch: "Purpose-built POS with customer-facing display. Premium look, built-in payments, no tablet needed. Perfect for QSR and retail.",
      price: "£599 + VAT (one-time)",
      keyBenefits: [
        "Customer-facing display for loyalty/tipping",
        "Premium, professional appearance",
        "Faster customer engagement",
        "No separate tablet or card reader needed"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6137-square-register-overview",
        product: "https://squareup.com/gb/en/hardware/register"
      }
    },
    
    appointments: {
      name: "Square Appointments",
      category: "saas",
      pitch: "Online booking, automated reminders, no-show protection. Reduces admin time and fills the calendar 24/7.",
      pricing: "Free for individuals, from £29/month for teams",
      keyBenefits: [
        "24/7 online booking",
        "Automated SMS/email reminders",
        "No-show protection with card-on-file",
        "Syncs with Google Calendar",
        "Client management built-in"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6238-get-started-with-square-appointments",
        product: "https://squareup.com/gb/en/appointments"
      }
    },
    
    invoices: {
      name: "Square Invoices",
      category: "saas",
      pitch: "Send professional invoices, get paid online. Automatic reminders chase late payments. Great for services and B2B.",
      keyBenefits: [
        "Professional branded invoices",
        "Customers pay online instantly",
        "Automatic payment reminders",
        "Recurring invoices for retainers",
        "Track who's viewed/paid"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5069-get-started-with-square-invoices",
        product: "https://squareup.com/gb/en/invoices"
      }
    },
    
    loyalty: {
      name: "Square Loyalty",
      category: "saas",
      pitch: "Built-in loyalty program. Customers earn points automatically at checkout, no punch cards needed. Drives repeat visits.",
      pricing: "From £45/month",
      keyBenefits: [
        "Automatic enrollment at checkout",
        "Works across in-store and online",
        "Customer insights and reporting",
        "Customizable rewards",
        "No punch cards or apps for customers"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5095-get-started-with-square-loyalty",
        product: "https://squareup.com/gb/en/software/loyalty"
      }
    },
    
    giftcards: {
      name: "Square Gift Cards",
      category: "saas",
      pitch: "Physical and digital gift cards built into Square. No third-party needed. Redeemable in-store and online.",
      keyBenefits: [
        "No third-party provider needed",
        "Physical and eGift cards",
        "Redeemable across all channels",
        "Track balances in one place",
        "Great for seasonal promotions"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5494-square-gift-cards-overview",
        product: "https://squareup.com/gb/en/gift-cards"
      }
    },
    
    kds: {
      name: "Kitchen Display System",
      category: "saas",
      pitch: "Digital ticket management for kitchens. Orders flow straight from POS - no lost tickets. Track prep times and communicate with FOH.",
      pricing: "£20/month per device",
      keyBenefits: [
        "No lost or dropped tickets",
        "Track prep times for optimization",
        "Communicate kitchen to FOH",
        "Color-coded order status",
        "Integrates with online orders"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6584-get-started-with-square-kds",
        product: "https://squareup.com/gb/en/point-of-sale/restaurants/kitchen-display-system"
      }
    },
    
    online: {
      name: "Square Online",
      category: "saas",
      pitch: "Free online store or ordering site. Syncs with in-store inventory and POS. Loyalty and gift cards work across both.",
      keyBenefits: [
        "Free to start",
        "Syncs inventory with in-store POS",
        "Click & collect built-in",
        "Loyalty works online too",
        "No separate ecommerce platform needed"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6074-get-started-with-square-online",
        product: "https://squareup.com/gb/en/online-store"
      }
    },
    
    banking: {
      name: "Square Banking",
      category: "banking",
      pitch: "Business savings and loans. Instant access to funds. Loans based on sales history, not credit scores.",
      keyBenefits: [
        "Loans based on actual sales",
        "No credit check required",
        "Instant access to savings",
        "Automatic savings rules",
        "Integrated with Square Dashboard"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6847-square-loans-overview",
        product: "https://squareup.com/gb/en/banking"
      }
    },
    
    restaurantPos: {
      name: "Square for Restaurants",
      category: "saas",
      pitch: "Purpose-built restaurant POS. Table management, coursing, floor plans, and kitchen integration all included.",
      pricing: "Free plan available, Plus from £60/month",
      keyBenefits: [
        "Table and floor plan management",
        "Coursing and seat management",
        "Tableside ordering with Terminal",
        "KDS integration",
        "Tip pooling automation"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6262-get-started-with-square-for-restaurants",
        product: "https://squareup.com/gb/en/point-of-sale/restaurants"
      }
    },
    
    retailPos: {
      name: "Square for Retail",
      category: "saas",
      pitch: "Retail-focused POS with advanced inventory, purchase orders, and vendor management.",
      pricing: "Free plan available, Plus from £60/month",
      keyBenefits: [
        "Advanced inventory management",
        "Purchase orders and vendors",
        "Barcode scanning",
        "Low stock alerts",
        "Multi-location support"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/6263-get-started-with-square-for-retail",
        product: "https://squareup.com/gb/en/point-of-sale/retail"
      }
    },
    
    staff: {
      name: "Square Team Management",
      category: "saas",
      pitch: "Staff scheduling, time tracking, and payroll integration. Manage your team from one place.",
      keyBenefits: [
        "Shift scheduling",
        "Time clock built into POS",
        "Labour cost reporting",
        "Staff permissions",
        "Tip distribution"
      ],
      links: {
        help: "https://squareup.com/help/gb/en/article/5073-manage-team-members",
        product: "https://squareup.com/gb/en/staff"
      }
    }
  },

  // ===========================================
  // VERTICAL RECOMMENDATIONS
  // ===========================================
  verticals: {
    restaurant_fsr: {
      name: "Full Service Restaurant",
      icon: "🍽️",
      primary: ["restaurantPos", "terminal", "kds"],
      secondary: ["loyalty", "giftcards", "online"],
      keyWins: [
        "Tableside ordering AND payments in one device (Terminal)",
        "No separate POS tablet + PDQ needed",
        "Gift cards built-in, not third-party",
        "Tip pooling automated",
        "KDS eliminates lost tickets"
      ],
      painPointMap: {
        "fees": ["payments"],
        "tips": ["restaurantPos", "terminal"],
        "kitchen": ["kds"],
        "gift cards": ["giftcards"],
        "online ordering": ["online"],
        "reservations": ["appointments"],
        "staff": ["staff"],
        "reporting": ["pos"]
      }
    },
    
    restaurant_qsr: {
      name: "Quick Service Restaurant",
      icon: "🍔",
      primary: ["pos", "register", "kds"],
      secondary: ["online", "loyalty", "giftcards"],
      keyWins: [
        "Fastest card transaction time in market",
        "Customer-facing display speeds up loyalty/tipping",
        "Online ordering syncs with in-store inventory",
        "Loyalty works across all channels"
      ],
      painPointMap: {
        "speed": ["register", "kds"],
        "online": ["online"],
        "loyalty": ["loyalty"],
        "fees": ["payments"],
        "queues": ["register", "online"]
      }
    },
    
    retail: {
      name: "Retail",
      icon: "🛍️",
      primary: ["retailPos", "register", "terminal"],
      secondary: ["online", "loyalty", "giftcards"],
      keyWins: [
        "Advanced inventory with low stock alerts",
        "Online store syncs with in-store stock",
        "No separate ecommerce platform needed",
        "Barcode scanning built-in"
      ],
      painPointMap: {
        "inventory": ["retailPos"],
        "online": ["online"],
        "fees": ["payments"],
        "loyalty": ["loyalty"],
        "stock": ["retailPos"]
      }
    },
    
    services: {
      name: "Professional Services",
      icon: "💼",
      primary: ["appointments", "invoices", "terminal"],
      secondary: ["pos", "online"],
      keyWins: [
        "Online booking reduces admin",
        "No-show protection with card-on-file",
        "Professional invoices with online payment",
        "Automatic payment reminders"
      ],
      painPointMap: {
        "bookings": ["appointments"],
        "no-shows": ["appointments"],
        "invoicing": ["invoices"],
        "fees": ["payments"],
        "admin": ["appointments", "invoices"]
      }
    },
    
    health: {
      name: "Health & Wellness",
      icon: "💪",
      primary: ["appointments", "terminal", "pos"],
      secondary: ["invoices", "loyalty"],
      keyWins: [
        "24/7 online booking",
        "Automated reminders reduce no-shows",
        "Client history and notes",
        "Recurring appointments for regulars"
      ],
      painPointMap: {
        "bookings": ["appointments"],
        "no-shows": ["appointments"],
        "fees": ["payments"],
        "clients": ["appointments", "pos"]
      }
    },
    
    beauty: {
      name: "Beauty & Personal Care",
      icon: "💇",
      primary: ["appointments", "pos", "terminal"],
      secondary: ["loyalty", "online", "giftcards"],
      keyWins: [
        "Online booking fills quiet times",
        "No-show protection saves revenue",
        "Gift cards drive new customers",
        "Loyalty brings them back"
      ],
      painPointMap: {
        "bookings": ["appointments"],
        "no-shows": ["appointments"],
        "fees": ["payments"],
        "loyalty": ["loyalty"],
        "gift cards": ["giftcards"]
      }
    },
    
    home: {
      name: "Home & Repair Services",
      icon: "🔧",
      primary: ["invoices", "terminal", "pos"],
      secondary: ["appointments", "banking"],
      keyWins: [
        "Take payments on-site with Terminal",
        "Send invoices for larger jobs",
        "Loans available based on sales history",
        "No monthly fees eating into margins"
      ],
      painPointMap: {
        "invoicing": ["invoices"],
        "cash flow": ["banking", "invoices"],
        "fees": ["payments"],
        "on-site payments": ["terminal"]
      }
    }
  },

  // ===========================================
  // COMPETITOR BATTLECARDS
  // ===========================================
  competitors: {
    lightspeed: {
      name: "Lightspeed",
      type: "POS company",
      weaknesses: [
        "Payments is white-labeled Stripe, not truly integrated",
        "Charges per-device license fees (Square is per-location)",
        "No ecommerce integrations",
        "6-7 screens to take a payment - slows service",
        "Separate platforms = integration issues"
      ],
      winningScript: "Lightspeed charges you for every device. We charge per location. And their payments is actually Stripe underneath - so you're dealing with two companies when something goes wrong."
    },
    
    goodtill: {
      name: "Goodtill (SumUp)",
      type: "POS company",
      weaknesses: [
        "Acquired by SumUp - bolted together, not integrated",
        "Need separate POS device AND card reader",
        "Integration creates room for error",
        "Limited functionality vs truly integrated solution"
      ],
      winningScript: "Goodtill was bought by SumUp and they've tried to bolt the systems together. You'll need a tablet AND a card reader. With Square Terminal, it's all in one device."
    },
    
    eposnow: {
      name: "EPOS Now",
      type: "POS company",
      weaknesses: [
        "White-labels payments, loyalty - not their own",
        "Their Terminal equivalent is clunky and prone to failure",
        "Won't integrate with ecommerce",
        "Poor support reputation"
      ],
      winningScript: "EPOS Now looks like an all-in-one but they're white-labeling other companies' products. When something breaks, you're stuck between providers pointing fingers."
    },
    
    toast: {
      name: "Toast",
      type: "Restaurant POS",
      weaknesses: [
        "More expensive than Square",
        "Payments is white-labeled WorldPay",
        "Can't guarantee offline payments (not the payment provider)",
        "Data collection not as comprehensive"
      ],
      winningScript: "Toast is solid for restaurants but they're more expensive and their payments is actually WorldPay. They can't make the same guarantees we can about offline payments or next-day deposits."
    },
    
    sumup: {
      name: "SumUp",
      type: "Payments company",
      weaknesses: [
        "Cannot do card-not-present from POS (invoices, phone)",
        "3-day settlement (Germany-based)",
        "Free POS is very basic, not fit for real business",
        "Their 'Terminal' is just a card reader - no POS software"
      ],
      winningScript: "SumUp's free POS is really basic - fine for a market stall but not a real business. And because they're based in Germany, you're waiting 3 days for your money. We do next-day."
    },
    
    dojo: {
      name: "Dojo",
      type: "Payments company",
      weaknesses: [
        "Payments only - need separate POS provider",
        "Total cost of ownership higher (POS + payments + ecommerce)",
        "Reliant on integrations that can break",
        "No ecosystem benefits"
      ],
      winningScript: "Dojo's rates look good but they're payments only. You'll need a separate POS, separate online ordering, separate loyalty - and hope they all talk to each other. With Square, it's all one system."
    },
    
    zettle: {
      name: "Zettle (PayPal)",
      type: "Payments company",
      weaknesses: [
        "Discontinued apps - essentially payments only now",
        "3-day settlement (Sweden-based)",
        "POS lacks functionality",
        "Integration with Lightspeed/Goodtill creates issues"
      ],
      winningScript: "Zettle's pulled back from POS - they discontinued several apps. And like SumUp, you're waiting 3 days for settlement because they're based in Sweden. We're UK-based, next-day deposits."
    }
  },

  // ===========================================
  // OBJECTION HANDLERS
  // ===========================================
  objections: {
    "too expensive": {
      response: "Let's look at total cost. What are you paying now in monthly fees, terminal rental, and per-transaction? Square has no monthly fees, no rental - just 1.75% per transaction. Most sellers save money overall.",
      followUp: "Can I see your current statement? I'll show you a side-by-side comparison.",
      tags: ["price", "cost", "expensive", "cheaper"]
    },
    
    "happy with current provider": {
      response: "That's great they're working for you. When did you last review your statement? Many sellers find hidden fees they weren't aware of - PCI compliance charges, statement fees, minimum monthly fees. What's your current rate?",
      followUp: "Would you be open to a quick rate comparison? No obligation, just information.",
      tags: ["happy", "current", "provider", "already have"]
    },
    
    "need to think about it": {
      response: "Absolutely, it's a business decision. What specific concerns would you want to think through? I can address those now so you have all the information you need.",
      followUp: "What would need to be true for this to be a yes today?",
      tags: ["think", "consider", "decide", "not sure"]
    },
    
    "locked in contract": {
      response: "When does your contract end? Let's get you set up now so you're ready to switch the day it expires. Some sellers find the savings cover any exit fees within a few months.",
      followUp: "Do you know what your exit fee would be? Often it's less than expected - and we can calculate if the savings cover it.",
      tags: ["contract", "locked", "tied in", "exit fee"]
    },
    
    "don't have time": {
      response: "I get it, you're busy running a business. The good news is setup takes about 10 minutes. I can walk you through it right now, or leave you the kit to do when it suits.",
      followUp: "What if we just got you set up to try? No commitment to switch fully yet. You can run it alongside your current system.",
      tags: ["time", "busy", "later", "not now"]
    },
    
    "need to check with partner/accountant": {
      response: "Smart to involve them. What questions do you think they'd have? I can give you the answers now, or I'm happy to speak with them directly.",
      followUp: "Would a quick call with them help move this forward? I can explain the commercial terms.",
      tags: ["partner", "accountant", "business partner", "check with"]
    },
    
    "rates are too high": {
      response: "Our rate is 1.75% for chip & PIN with no monthly fees. When you factor in the £20-30/month others charge just to have an account, plus terminal rental, we're often cheaper overall. What are you paying now all-in?",
      followUp: "Let me show you a total cost comparison. Most sellers are surprised.",
      tags: ["rates", "percentage", "transaction fee", "1.75"]
    },
    
    "what if it breaks": {
      response: "Square hardware comes with a 2-year warranty. If anything goes wrong, we replace it. And because you own the device outright, there's no rental company to deal with - just us.",
      followUp: "Plus, Terminal has built-in 4G backup. If your WiFi drops, it keeps working.",
      tags: ["breaks", "warranty", "support", "reliable"]
    },
    
    "my customers prefer cash": {
      response: "Cash is great - no fees. But card payments are growing every year, and customers spend more on card. Square lets you take both. You only pay when you take a card payment.",
      followUp: "Even if it's just 20% of transactions, that's revenue you might be losing if customers don't have cash on them.",
      tags: ["cash", "card", "customers"]
    },
    
    "I've heard bad things": {
      response: "I'd love to know what you've heard - sometimes it's outdated or about a different market. Square processes billions in payments for millions of sellers. What specific concern can I address?",
      followUp: "Would it help to speak to another seller in your area who uses Square?",
      tags: ["heard", "reviews", "reputation", "bad"]
    }
  },

  // ===========================================
  // CLOSING TECHNIQUES
  // ===========================================
  closingTechniques: {
    assumptive: {
      name: "Assumptive Close",
      script: "So, shall we get you set up with the Terminal today? I can have you taking payments before I leave.",
      when: "Seller is engaged, no major objections remaining",
      icon: "✅"
    },
    
    alternative: {
      name: "Alternative Close",
      script: "Would you prefer the Terminal for flexibility, or the Register for that premium counter setup?",
      when: "Seller is comparing options, can't decide",
      icon: "🔄"
    },
    
    urgency: {
      name: "Urgency Close",
      script: "If we get you live today, you'll have next-day deposits starting tomorrow. That's cash in your account by [day after tomorrow].",
      when: "Cash flow is a pain point",
      icon: "⚡"
    },
    
    trial: {
      name: "Trial Close",
      script: "Why don't we get you set up to try it? Run it alongside your current system for a week. If it's not working for you, no harm done.",
      when: "Seller is hesitant, needs to experience it",
      icon: "🧪"
    },
    
    summary: {
      name: "Summary Close",
      script: "So to recap: you're getting [products], which solves [pain points], for [price]. You'll be live today with next-day deposits. Ready to go?",
      when: "After addressing all objections, need to wrap up",
      icon: "📋"
    },
    
    calculator: {
      name: "Calculator Close",
      script: "Based on your £[X] annual volume, you'd pay roughly £[Y] in fees with us. What are you paying now? ... So you'd save £[Z] per year. That's worth switching for, right?",
      when: "Price-sensitive seller, need to show value",
      icon: "🧮"
    }
  },

  // ===========================================
  // GPV TIERS (Annual - UK Sign-up Flow)
  // ===========================================
  gpvTiers: [
    { value: "tier1", label: "Under £50k", range: "< £50,000", monthly: "< £4,200" },
    { value: "tier2", label: "£50k - £100k", range: "£50,000 - £100,000", monthly: "£4,200 - £8,300" },
    { value: "tier3", label: "£100k - £250k", range: "£100,000 - £250,000", monthly: "£8,300 - £21,000" },
    { value: "tier4", label: "£250k - £500k", range: "£250,000 - £500,000", monthly: "£21,000 - £42,000" },
    { value: "tier5", label: "£500k - £1m", range: "£500,000 - £1,000,000", monthly: "£42,000 - £83,000" },
    { value: "tier6", label: "Over £1m", range: "> £1,000,000", monthly: "> £83,000" }
  ]
};

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
  module.exports = KNOWLEDGE;
}
