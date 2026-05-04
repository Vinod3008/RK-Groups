import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  Mail,
  Phone,
  BarChart3,
  Scale
} from 'lucide-react';
import { cn } from './lib/utils';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Strategy = React.lazy(() => import('./pages/Strategy'));
const Contact = React.lazy(() => import('./pages/Contact'));

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Strategy', href: '/strategy' },
    { name: 'Institutional Approach', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <Building2 className="text-primary w-6 h-6" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-headline font-bold text-xl leading-none tracking-tight text-white">RK GROUPS</span>
            <span className="label-caps text-primary !mb-0">SOVEREIGN</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.href ? "text-white" : "text-on-surface-variant"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-primary/20"
          >
            Invest With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-on-surface-variant hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-outline overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-on-surface hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white py-4 rounded-xl text-center font-bold"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-background border-t border-outline pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                <Building2 className="text-primary w-6 h-6" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-headline font-bold text-xl text-white">RK GROUPS</span>
                <span className="label-caps text-primary !mb-0">SOVEREIGN</span>
              </div>
            </Link>
            <p className="text-on-surface-variant text-body-md max-w-md">
              Institutional stability and forward-looking financial solutions for real estate investors and growing enterprises. We specialize in high-yield debt instruments and strategic equity placements.
            </p>
          </div>
          
          <div>
            <h4 className="font-headline font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Financial District, New York, NY</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>sovereign@rkgroups.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+1 (212) 555-0198</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">Disclosures</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Institutional Access</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-outline flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-on-surface-variant text-xs">
            © {new Date().getFullYear()} RK Groups Sovereign. All rights reserved. Registered Investment Firm.
          </p>
          <div className="flex gap-8 text-xs text-on-surface-variant font-medium">
            <span className="px-2 py-1 bg-surface rounded text-[10px] border border-outline">SEC REGULATED</span>
            <span className="px-2 py-1 bg-surface rounded text-[10px] border border-outline">FINRA MEMBER</span>
            <span className="px-2 py-1 bg-surface rounded text-[10px] border border-outline">SIPC INSURED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="main-content"
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col overflow-x-hidden">
        <Navbar />
        <div className="flex-grow pt-20">
          <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><Building2 className="animate-pulse text-secondary" /></div>}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/strategy" element={<PageWrapper><Strategy /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
