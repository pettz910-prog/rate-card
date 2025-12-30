import { useState } from 'react';
import { Zap, CheckCircle, Clock, Award, Shield, TrendingUp, Users, Code, DollarSign, FileText, Mail, MessageSquare, Info, ArrowRight, Sparkles, Globe, Database, CreditCard, Lock, BarChart, Phone, Star } from 'lucide-react';

export default function ClientRateCard() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(null);

  const whatsappNumber = "254704544323";
  
  const createWhatsAppLink = (packageName: string, price: number, isCustom = false) => {

    if (isCustom) {
      const message = encodeURIComponent("Hi Janet Marketing! I'd like to discuss a custom web solution for my business. Can we talk?");
      return `https://wa.me/${whatsappNumber}?text=${message}`;
    }
    const message = encodeURIComponent(`Hi Janet Marketing! I'm interested in ${packageName} at KES ${price.toLocaleString()}. Can we discuss?`);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  const packages = [
    {
      id: 1,
      name: "Personal Portfolio",
      shortName: "Portfolio",
      tagline: "Your professional showcase online",
      icon: Globe,
      timeline: "3-5 days",
      revisions: 2,
      hours: 15,
      pricing: { professional: 25000 },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      whatYouGet: "A stunning personal website that showcases your work, skills, and makes it easy for clients to reach you via WhatsApp. Perfect for consultants, freelancers, and professionals.",
      features: [
        { icon: Globe, text: "Modern single-page design", explain: "Sleek, scrolling website with all your info in one place" },
        { icon: FileText, text: "Portfolio/work showcase", explain: "Display your projects, achievements, and services beautifully" },
        { icon: Phone, text: "WhatsApp integration", explain: "Clients click to message you directly on WhatsApp" },
        { icon: Shield, text: "Mobile responsive", explain: "Perfect on phones, tablets, and computers" },
        { icon: Award, text: "Professional domain setup", explain: "yourname.co.ke with SSL security (FREE)" },
        { icon: Clock, text: "2 revision rounds", explain: "We refine the design based on your feedback" }
      ],
      perfectFor: [
        "Consultants and freelancers",
        "Photographers and creatives",
        "Real estate agents",
        "Personal trainers and coaches",
        "Any professional needing online presence"
      ],
      whatYouDont: [
        "No database or backend (it's a showcase, not a system)",
        "No payment processing",
        "No admin panel"
      ],
      realExample: "A marketing consultant's portfolio showing past clients, services offered, testimonials, and a WhatsApp button for instant inquiries"
    },
    {
      id: 2,
      name: "Professional Online Presence",
      shortName: "Starter",
      tagline: "Full business website with contact management",
      icon: Globe,
      timeline: "1-2 weeks",
      revisions: 2,
      hours: 30,
      pricing: { professional: 45000 },
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
      whatYouGet: "A complete business website with backend system where you can view and manage customer enquiries. Professional, credible, and fully functional.",
      features: [
        { icon: Globe, text: "Up to 7 custom pages", explain: "Home, About, Services, Products, Gallery, Contact, etc." },
        { icon: Database, text: "Enquiry management system", explain: "All customer messages are saved in a database" },
        { icon: Users, text: "Admin dashboard", explain: "Log in to view, search, and manage all enquiries" },
        { icon: Mail, text: "Email notifications", explain: "Get notified when someone fills the contact form" },
        { icon: Phone, text: "WhatsApp integration", explain: "Click-to-chat WhatsApp button" },
        { icon: Shield, text: "Free domain & SSL", explain: "Professional domain with security" },
        { icon: Award, text: "2 revision rounds", explain: "Perfect the design together" }
      ],
      perfectFor: [
        "Small businesses and startups",
        "Service providers (salons, clinics, garages)",
        "Retail shops and restaurants",
        "Agencies and consultancies"
      ],
      whatYouDont: [
        "No online payments",
        "Visitors can't create accounts",
        "No e-commerce cart system"
      ],
      realExample: "A dental clinic website showing services, doctor profiles, with contact form where admin logs in daily to see new appointment requests"
    },
    {
      id: 3,
      name: "Smart Business Package",
      shortName: "Business Pro",
      tagline: "Advanced features with data insights",
      icon: TrendingUp,
      timeline: "2-3 weeks",
      revisions: 3,
      hours: 50,
      pricing: { professional: 75000 },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      whatYouGet: "Everything in Professional Online Presence, PLUS advanced analytics, better admin tools, and more control over your content and data.",
      features: [
        { icon: CheckCircle, text: "Everything in previous package", explain: "All features from Professional Online Presence" },
        { icon: BarChart, text: "Advanced analytics dashboard", explain: "See visitor stats, peak times, popular pages" },
        { icon: FileText, text: "Content management", explain: "Edit website text and images yourself (no coding)" },
        { icon: Database, text: "Export to Excel", explain: "Download all your enquiries and data" },
        { icon: Mail, text: "Email templates", explain: "Send professional auto-replies to enquiries" },
        { icon: Shield, text: "Enhanced security", explain: "Extra protection for your business data" },
        { icon: Award, text: "3 revision rounds", explain: "More refinement for perfection" }
      ],
      perfectFor: [
        "Growing businesses with high enquiry volume",
        "Companies needing data insights",
        "Businesses that want content control",
        "Professional service firms"
      ],
      whatYouDont: [
        "No payment processing yet",
        "No customer login accounts",
        "No booking system"
      ],
      realExample: "A real estate agency that tracks which properties get most enquiries, exports leads weekly, and updates listings themselves without calling the developer"
    },
    {
      id: 4,
      name: "Payment-Ready Platform",
      shortName: "Transaction Hub",
      tagline: "Accept payments online seamlessly",
      icon: CreditCard,
      timeline: "3-4 weeks",
      revisions: 4,
      hours: 85,
      pricing: { professional: 127500 },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      whatYouGet: "Everything in Smart Business Package, PLUS full payment processing. Customers pay via M-Pesa, you get instant confirmation, and the system tracks every transaction automatically.",
      features: [
        { icon: CheckCircle, text: "Everything in Smart Business", explain: "All previous features included" },
        { icon: CreditCard, text: "M-Pesa STK Push", explain: "Customers enter phone number, get prompt to pay" },
        { icon: FileText, text: "Automatic PDF receipts", explain: "System generates and sends receipts instantly" },
        { icon: Database, text: "Transaction history", explain: "Track every payment with full details" },
        { icon: BarChart, text: "Financial dashboard", explain: "See daily/weekly/monthly revenue at a glance" },
        { icon: Lock, text: "Payment security", explain: "Bank-grade encryption and protection" },
        { icon: Mail, text: "Payment notifications", explain: "Email + WhatsApp alerts for successful payments" },
        { icon: Award, text: "4 revision rounds", explain: "Perfect the payment flow" }
      ],
      perfectFor: [
        "Online course enrollments",
        "Event ticket sales",
        "Service bookings with payment",
        "Simple product sales",
        "Membership fees collection"
      ],
      whatYouDont: [
        "No customer accounts/logins yet",
        "No recurring/subscription payments",
        "No complex inventory management"
      ],
      realExample: "A fitness coach selling online training programs - students pick a program, pay via M-Pesa, get instant access email with receipt"
    },
    {
      id: 5,
      name: "Complete Business System",
      shortName: "Full Platform",
      tagline: "User accounts, roles, and personalized experience",
      icon: Users,
      timeline: "5-7 weeks",
      revisions: 5,
      hours: 140,
      pricing: { professional: 210000 },
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=400&fit=crop",
      whatYouGet: "A comprehensive web application where users create accounts, log in, and have personalized dashboards. Different user types see different things. Perfect for platforms, schools, and member systems.",
      features: [
        { icon: CheckCircle, text: "Everything in Payment Platform", explain: "Payment processing included" },
        { icon: Users, text: "User registration & login", explain: "Customers create accounts with email/password" },
        { icon: Shield, text: "Secure authentication", explain: "Industry-standard security with password recovery" },
        { icon: Award, text: "3 user roles", explain: "Admin, Manager, Customer - each has different access" },
        { icon: Database, text: "Personal dashboards", explain: "Each user sees their own data and history" },
        { icon: BarChart, text: "User activity tracking", explain: "See who logged in, what they did, when" },
        { icon: FileText, text: "Document management", explain: "Users can upload/download documents" },
        { icon: Mail, text: "In-app notifications", explain: "Users get alerts about important updates" },
        { icon: CheckCircle, text: "5 revision rounds", explain: "Complex systems need more refinement" }
      ],
      perfectFor: [
        "Online schools and e-learning platforms",
        "SaaS products and software services",
        "Member platforms and communities",
        "Internal company management systems",
        "Client portals for agencies"
      ],
      whatYouDont: [
        "Not multi-tenant yet (can't host multiple separate organizations)",
        "No social login unless added separately",
        "No mobile app (web-based only)"
      ],
      realExample: "An online school where students log in to access courses, track grades, submit assignments, and teachers log in to grade work and manage classes"
    },
    {
      id: 6,
      name: "Multi-Branch System",
      shortName: "Enterprise",
      tagline: "Scalable platform for growth and expansion",
      icon: Sparkles,
      timeline: "8-12 weeks",
      revisions: 6,
      hours: 220,
      pricing: { professional: 330000 },
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop",
      whatYouGet: "An enterprise-grade platform that can handle multiple branches, franchises, or organizations in one system. Built for serious scaling with advanced features and integrations.",
      features: [
        { icon: CheckCircle, text: "Everything in Complete System", explain: "All advanced features included" },
        { icon: Sparkles, text: "Multi-branch architecture", explain: "Support multiple locations/franchises in one system" },
        { icon: Code, text: "API for integrations", explain: "Connect to accounting, CRM, and other business tools" },
        { icon: Shield, text: "Advanced permissions", explain: "Fine control - branch managers see only their data" },
        { icon: TrendingUp, text: "Performance optimized", explain: "Handles thousands of users smoothly" },
        { icon: BarChart, text: "Enterprise reporting", explain: "Compare branches, see trends, export detailed reports" },
        { icon: Database, text: "Data isolation", explain: "Each branch's data is separate and secure" },
        { icon: FileText, text: "Technical documentation", explain: "Full API docs for future integrations" },
        { icon: Award, text: "6 revision rounds", explain: "Perfecting every detail" }
      ],
      perfectFor: [
        "Franchise businesses with multiple locations",
        "Organizations with regional offices",
        "Multi-tenant SaaS platforms",
        "Businesses planning major expansion",
        "Companies needing branch-level reporting"
      ],
      whatYouDont: [
        "This is the top tier - additional features are custom add-ons",
        "Mobile apps are separate projects"
      ],
      realExample: "A chain of pharmacies with 20+ branches - each branch manager logs in to see their inventory, sales, staff, while head office sees consolidated reports across all branches"
    }
  ];

  const addonsSimplified = [
    {
      category: "💳 Payment Options",
      description: "More ways for customers to pay",
      icon: DollarSign,
      items: [
        { 
          name: "Card Payments (Visa/Mastercard)", 
          explain: "Accept international cards via Stripe/PayPal",
          hours: 20,
          price: 30000
        },
        { 
          name: "Multiple Payment Methods", 
          explain: "M-Pesa + Cards + Bank transfers all in one",
          hours: 25,
          price: 37500
        }
      ]
    },
    {
      category: "📧 Smart Communication",
      description: "Automate your customer communication",
      icon: MessageSquare,
      items: [
        { 
          name: "Email Automation", 
          explain: "Welcome emails, confirmations, reminders sent automatically",
          hours: 12,
          price: 18000
        },
        { 
          name: "SMS Notifications", 
          explain: "Send SMS automatically (payment alerts, reminders, updates)",
          hours: 15,
          price: 22500
        },
        { 
          name: "WhatsApp Business API", 
          explain: "Official WhatsApp business messaging with templates",
          hours: 18,
          price: 27000
        }
      ]
    },
    {
      category: "⚡ Advanced Features",
      description: "Take your platform to the next level",
      icon: Zap,
      items: [
        { 
          name: "Social Login", 
          explain: "Users sign in with Google or Facebook (faster, easier)",
          hours: 10,
          price: 15000
        },
        { 
          name: "Advanced Analytics", 
          explain: "Detailed insights, trends, and business intelligence",
          hours: 18,
          price: 27000
        },
        { 
          name: "Interactive Charts", 
          explain: "Beautiful visual dashboards with graphs and charts",
          hours: 12,
          price: 18000
        },
        { 
          name: "File Management", 
          explain: "Let users upload documents, images, PDFs",
          hours: 10,
          price: 15000
        },
        {
          name: "Booking/Appointment System",
          explain: "Calendar-based booking with time slots and confirmations",
          hours: 22,
          price: 33000
        }
      ]
    },
    {
      category: "🔗 Business Integrations",
      description: "Connect with the tools you already use",
      icon: Code,
      items: [
        { 
          name: "Accounting Software Integration", 
          explain: "Sync with QuickBooks, Sage, or other accounting systems",
          hours: 18,
          price: 27000
        },
        { 
          name: "CRM Integration", 
          explain: "Connect to Salesforce, HubSpot, or your CRM",
          hours: 18,
          price: 27000
        },
        { 
          name: "Multi-Step Approvals", 
          explain: "Workflow: Submit → Review → Approve → Complete",
          hours: 20,
          price: 30000
        },
        {
          name: "Inventory Management",
          explain: "Track stock levels, low stock alerts, reorder points",
          hours: 25,
          price: 37500
        }
      ]
    }
  ];

  const maintenance = [
    { type: "Personal Portfolio", monthly: 3000, features: "Updates, security, basic support" },
    { type: "Professional Online Presence", monthly: 5000, features: "Above + content changes, bug fixes" },
    { type: "Smart Business Package", monthly: 8000, features: "Above + performance monitoring" },
    { type: "Payment-Ready Platform", monthly: 12000, features: "Above + payment system monitoring" },
    { type: "Complete Business System", monthly: 18000, features: "Above + user support, optimization" },
    { type: "Multi-Branch System", monthly: 30000, features: "Above + priority support, scaling assistance" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-cyan-50">
      {/* Sticky WhatsApp Button */}
      <a
        href={createWhatsAppLink("", 0, true)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-105 flex items-center gap-2 md:gap-3 text-sm md:text-base font-semibold"
      >
        <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
        <span className="hidden sm:inline">Let's Talk on WhatsApp</span>
        <span className="sm:hidden">Chat</span>
      </a>

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Hero Background Image */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop')"
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 lg:py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-3 sm:mb-4 md:mb-6">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2">
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                Trusted by 100+ Kenyan Businesses
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
              Professional Websites<br />
              <span className="text-teal-200">That Grow Your Business</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-2 sm:mb-3 md:mb-4 leading-relaxed">
              From KES 25,000. Fixed pricing. No surprises. Built by Kenyan developers who understand your market.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-4 sm:mb-6 md:mb-8">
              Choose your package below, see exactly what you get, and let's build something amazing together.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-3xl">
              {[
                { value: "3 Days", label: "Fastest Launch" },
                { value: "50/50", label: "Fair Payment" },
                { value: "25K+", label: "Starting Price" },
                { value: "100%", label: "Transparent" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 md:p-4 border border-white/20">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/80 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white border-b border-gray-200 py-2.5 sm:py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
            {[
              "Kenyan-based team",
              "M-Pesa payment ready",
              "Mobile-first design",
              "24hr support"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                <span className="font-semibold whitespace-nowrap">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Package Cards */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12 mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-4">
              Choose What Fits Your Needs
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Every package includes everything you need. Start small, grow bigger. All prices are final - no hidden costs.
            </p>
          </div>

          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const price = pkg.pricing.professional;
            const isExpanded = expandedPackage === pkg.id;
            const isPopular = pkg.id === 3;
            const isCheapest = pkg.id === 1;

            return (
              <div key={pkg.id} className={`bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 ${isPopular ? 'border-teal-400 ring-2 sm:ring-4 ring-teal-100' : isCheapest ? 'border-green-400' : 'border-gray-200'} overflow-hidden hover:shadow-2xl transition-all relative`}>
                {/* Badge */}
                {isPopular && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10 flex items-center gap-1 sm:gap-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden xs:inline">MOST POPULAR</span>
                    <span className="xs:hidden">TOP</span>
                  </div>
                )}
                {isCheapest && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-full text-xs sm:text-sm font-bold shadow-lg z-10">
                    💰 BEST START
                  </div>
                )}

                {/* Header with Image */}
                <div className="relative">
                  {/* Package Image */}
                  <div 
                    className="h-32 sm:h-40 md:h-48 bg-cover bg-center border-b-2 sm:border-b-4 border-teal-500"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Package Header Info */}
                  <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
                      <div className="flex items-start gap-2.5 sm:gap-3 md:gap-4 flex-1">
                        <div className="bg-white/20 backdrop-blur-sm p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl flex-shrink-0">
                          <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-teal-100 text-xs sm:text-sm font-medium mb-0.5 sm:mb-1">PACKAGE {pkg.id}</div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2 leading-tight">{pkg.name}</h3>
                          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-snug">{pkg.tagline}</p>
                        </div>
                      </div>
                      <div className="text-left md:text-right w-full md:w-auto flex md:flex-col justify-between md:justify-start items-end md:items-end">
                        <div className="md:mb-2">
                          <div className="text-white/80 text-xs sm:text-sm mb-0.5 sm:mb-1">Professional Tier</div>
                          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-0.5 sm:mb-1 md:mb-2">
                            {(price / 1000).toFixed(0)}K
                          </div>
                          <div className="text-white/90 text-sm sm:text-base md:text-lg">KES {price.toLocaleString()}</div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 mt-2 md:mt-3">
                          <span className="bg-white/20 px-2 py-1 sm:px-3 rounded-full text-xs text-white flex items-center gap-1 whitespace-nowrap">
                            <Clock className="w-3 h-3" /> {pkg.timeline}
                          </span>
                          <span className="bg-white/20 px-2 py-1 sm:px-3 rounded-full text-xs text-white flex items-center gap-1 whitespace-nowrap">
                            <Award className="w-3 h-3" /> {pkg.revisions} revisions
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 md:p-8">
                  {/* What You Get */}
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 sm:mb-5 md:mb-6 border border-teal-200">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                      <Info className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                      What You're Getting
                    </h4>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{pkg.whatYouGet}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-4 sm:mb-5 md:mb-6">
                    <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                      Everything Included:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2.5 sm:gap-3">
                      {pkg.features.map((feature, i) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <div key={i} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl hover:bg-teal-50 transition-colors border border-gray-100">
                            <div className="bg-teal-100 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                              <FeatureIcon className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 text-xs sm:text-sm mb-0.5 sm:mb-1 leading-tight">{feature.text}</div>
                              <div className="text-gray-600 text-xs leading-relaxed">{feature.explain}</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <a
                    href={createWhatsAppLink(pkg.name, price)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all bg-gradient-to-r from-green-500 to-green-600 text-white hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 text-center mb-3 sm:mb-4 flex items-center justify-center gap-2 sm:gap-3"
                  >
                    <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden xs:inline">I Love This - Let's Discuss</span>
                    <span className="xs:hidden">Let's Talk</span>
                  </a>

                  {/* Expandable */}
                  <button
                    onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                    className="w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                  >
                    <span>{isExpanded ? 'Show Less Details' : 'Show More Details'}</span>
                    <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  {isExpanded && (
                    <div className="mt-4 sm:mt-5 md:mt-6 space-y-4 sm:space-y-5 md:space-y-6">
                      {/* Perfect For */}
                      <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-blue-200">
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-3 sm:mb-4 flex items-center gap-2">
                          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                          Perfect For:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                          {pkg.perfectFor.map((use, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-700">
                              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 flex-shrink-0" />
                              <span className="text-xs sm:text-sm leading-tight">{use}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What's NOT Included */}
                      {pkg.whatYouDont.length > 0 && (
                        <div className="bg-amber-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-amber-200">
                          <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                            <Info className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 flex-shrink-0" />
                            What's NOT Included (available as add-ons):
                          </h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            {pkg.whatYouDont.map((item, i) => (
                              <div key={i} className="flex items-start gap-2 text-gray-700 text-xs sm:text-sm">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                <span className="leading-relaxed">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Real Example */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-purple-200">
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-2 sm:mb-3 flex items-center gap-2">
                          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                          Real-World Example:
                        </h4>
                        <p className="text-gray-700 text-xs sm:text-sm italic leading-relaxed">{pkg.realExample}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Enhance Any Package</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Optional add-ons to supercharge your website</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
            {addonsSimplified.map((category, idx) => {
              return (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-teal-600 to-emerald-600 px-4 sm:px-5 md:px-6 py-4 sm:py-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{category.category}</h3>
                    <p className="text-teal-50 text-xs sm:text-sm mt-1">{category.description}</p>
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    {category.items.map((item, i) => (
                      <div key={i} className="border-2 border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:border-teal-400 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start gap-3 sm:gap-4 mb-1.5 sm:mb-2">
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1 leading-tight">{item.name}</div>
                            <div className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.explain}</div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="text-xl sm:text-2xl font-bold text-teal-600">
                              +{(item.price / 1000).toFixed(0)}K
                            </div>
                            <div className="text-gray-500 text-xs whitespace-nowrap">KES {item.price.toLocaleString()}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 sm:mt-7 md:mt-8 text-center">
            <a
              href={createWhatsAppLink("", 0, true)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-green-500/50 transition-all"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden xs:inline">Need Custom Add-ons? Let's Talk</span>
              <span className="xs:hidden">Custom Add-ons</span>
            </a>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-white mb-12 sm:mb-16 md:mb-20 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Your Journey With Us</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-7 md:gap-8">
            {[
              { step: "1", icon: MessageSquare, title: "Chat on WhatsApp", desc: "Tell us what you need" },
              { step: "2", icon: FileText, title: "Get Proposal", desc: "Clear pricing & timeline" },
              { step: "3", icon: DollarSign, title: "Pay 50%", desc: "We start building" },
              { step: "4", icon: CheckCircle, title: "Review Together", desc: "Revisions included" },
              { step: "5", icon: Award, title: "Launch", desc: "Pay balance & go live!" }
            ].map((item, i) => {
              const StepIcon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="bg-white/20 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <StepIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="bg-white/10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 font-bold text-base sm:text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-teal-50 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Maintenance Plans */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">Keep It Running Smoothly</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">Optional monthly maintenance plans</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {maintenance.map((plan, i) => (
              <div key={i} className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight">{plan.type}</h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{plan.features}</p>
                <div className="text-2xl sm:text-3xl font-bold text-teal-600 mb-0.5 sm:mb-1">
                  KES {plan.monthly.toLocaleString()}
                </div>
                <div className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">/month</div>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                    <span>Security updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                    <span>Bug fixes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0" />
                    <span>Email support</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 md:mb-10 text-center">Questions You Might Have</h2>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {[
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely! Start with what you need now. When you're ready to grow, we'll upgrade you and credit what you've already paid."
              },
              {
                q: "What happens after I pay?",
                a: "We start immediately. You'll get regular updates, and we schedule review sessions where you see the progress and give feedback."
              },
              {
                q: "Do you offer discounts or payment plans?",
                a: "We keep prices fair for everyone. For larger projects (200K+), we can discuss payment milestones instead of just 50/50."
              },
              {
                q: "Will my website work on phones?",
                a: "100% yes. All our websites are mobile-first, meaning they look amazing on phones, tablets, and computers."
              },
              {
                q: "What if I need changes after launch?",
                a: "Each package includes free revisions during development. After launch, small fixes are free for 2 weeks. Then choose a maintenance plan."
              },
              {
                q: "Can you help with content and photos?",
                a: "We can guide you on what content works best. Professional photography is separate, but we can recommend affordable local photographers."
              },
              {
                q: "How long does hosting cost after first year?",
                a: "Hosting renewal is typically KES 10,000-25,000 per year depending on your traffic. We'll set you up with the best option."
              },
              {
                q: "Do you train us on how to use it?",
                a: "Yes! Basic training is included. For detailed staff training, we offer half-day (KES 15,000) or full-day (KES 25,000) sessions."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-gray-200 hover:border-teal-300 transition-colors">
                <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-2 sm:mb-3 flex items-center gap-2 leading-tight">
                  <Info className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* CTA Background Image */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1600&h=900&fit=crop')"
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 leading-tight">Ready to Grow Your Business Online?</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 text-white/90 leading-relaxed px-4">
            Let's have a conversation. No pressure, no sales pitch—just honest advice on what you need.
          </p>
          
          <a
            href={createWhatsAppLink("", 0, true)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 sm:gap-4 bg-white text-teal-600 px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg md:text-xl hover:shadow-2xl transition-all transform hover:scale-105 mb-6 sm:mb-8 md:mb-10"
          >
            <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <span className="hidden xs:inline">Start Your Project on WhatsApp</span>
            <span className="xs:hidden">Start Project</span>
          </a>

          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/20">
              <Mail className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Email Us</div>
              <div className="text-xs sm:text-sm text-white/80 break-all">info@janetmarketing.co.ke</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/20">
              <Phone className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Call Us</div>
              <div className="text-xs sm:text-sm text-white/80">0704 544 323</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border border-white/20">
              <Clock className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 mx-auto mb-2 sm:mb-3" />
              <div className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">We Respond</div>
              <div className="text-xs sm:text-sm text-white/80">Within 24 hours</div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm text-white/70 leading-relaxed px-4">
            Built with ❤️ in Kenya | Java Spring Boot + React.js | Trusted by 100+ businesses
          </div>
        </div>
      </div>
        </div>
      </div>
  );
}