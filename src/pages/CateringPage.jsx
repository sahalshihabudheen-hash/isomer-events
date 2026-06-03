import React, { useState } from 'react';
import { Star, MapPin, ChevronRight, Search, Filter, Utensils, ExternalLink, ShoppingCart } from 'lucide-react';
import './CateringPage.css';

// Evenzo Events logo from Instagram
const EVENZO_LOGO = 'https://instagram.fccj8-1.fna.fbcdn.net/v/t51.71878-15/54001_3oNHRt0p9euGm7OWb1P806n8ad1BL6XamSce-6A25D5188_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmYzMTQ3OCJ9&_nc_ht=instagram.fccj8-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHoBoMvvCCmCpAoAe2VZJHDa5BX7rHW_yJN0mFWm3VhBP2S7ZX9fP8&_nc_ohc=3cewMJEVr44Q7kNvwHgRMh6&_nc_gid=xPdipGo_y972fbf_x10w94by_x1qh985_x14e422d_xk390pu_x5yr21d_x.ak_x11xv1r_xexx8yu_xyr12b_x18d9169_x1c1uobl_x11njtxf_xh8yej3&oh=00_AfBuYs0UPO8qH1A5A5JuHl3DKqGi5DhDQC4d7rL3g&oe=6A25D518';

const providers = [
  { id: 1, name: 'Evenzo Events', location: 'Kozhikode, Kerala', rating: 4.9, reviews: 312, specialty: 'Wedding & Corporate', verified: true, price: '₹500/plate', externalUrl: 'https://www.instagram.com/evenzo_events/' },
  { id: 2, name: 'Royal Feast Catering', location: 'Kochi, Kerala', rating: 4.8, reviews: 245, specialty: 'Kerala Sadya', verified: true, price: '₹350/plate', externalUrl: null },
  { id: 3, name: 'Spice Garden Caterers', location: 'Thrissur, Kerala', rating: 4.7, reviews: 189, specialty: 'Multi-cuisine', verified: true, price: '₹420/plate', externalUrl: null },
  { id: 4, name: 'Kerala Kitchen Co.', location: 'Kannur, Kerala', rating: 4.6, reviews: 156, specialty: 'Traditional Kerala', verified: false, price: '₹280/plate', externalUrl: null },
  { id: 5, name: 'Grand Bites', location: 'Thiruvananthapuram', rating: 4.5, reviews: 134, specialty: 'Continental & Indian', verified: true, price: '₹600/plate', externalUrl: null },
  { id: 6, name: 'Tasty Trails', location: 'Palakkad, Kerala', rating: 4.4, reviews: 98, specialty: 'Street Food & Snacks', verified: false, price: '₹200/plate', externalUrl: null },
];

const packages = [
  {
    id: 1,
    provider: 'Evenzo Events',
    name: 'Premium Wedding Package',
    description: 'Full wedding catering with Kerala Sadya, live counters, dessert stations & professional service staff.',
    price: '₹500/plate',
    minGuests: 100,
    includes: ['Kerala Sadya', 'Live Counters', 'Dessert Station', 'Service Staff', 'Tableware'],
    rating: 4.9,
    badge: 'Top Rated',
    logo: EVENZO_LOGO,
  },
  {
    id: 2,
    provider: 'Evenzo Events',
    name: 'Corporate Lunch Package',
    description: 'Professional corporate catering with a balanced multi-cuisine menu. Perfect for seminars and meetings.',
    price: '₹350/plate',
    minGuests: 50,
    includes: ['Buffet Setup', 'Multi-cuisine', 'Beverages', 'Napkins & Cutlery'],
    rating: 4.8,
    badge: 'Popular',
    logo: EVENZO_LOGO,
  },
  {
    id: 3,
    provider: 'Royal Feast Catering',
    name: 'Traditional Sadya',
    description: 'Authentic Kerala Sadya on banana leaf with 25+ dishes, ideal for weddings and onam celebrations.',
    price: '₹300/plate',
    minGuests: 200,
    includes: ['Banana Leaf Service', '25+ Dishes', 'Payasam', 'Pappadam & Pickles'],
    rating: 4.8,
    badge: 'Best Value',
    logo: null,
  },
  {
    id: 4,
    provider: 'Spice Garden Caterers',
    name: 'Fusion Fiesta',
    description: 'A modern mix of Indian, Chinese, Continental and desserts. Great for birthday parties and receptions.',
    price: '₹450/plate',
    minGuests: 80,
    includes: ['Indian', 'Chinese', 'Continental', 'Dessert Counter', 'Soft Drinks'],
    rating: 4.7,
    badge: null,
    logo: null,
  },
];

const CateringPage = () => {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [search, setSearch] = useState('');

  const filteredProviders = providers.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  const displayedPackages = selectedProvider
    ? packages.filter(p => p.provider === selectedProvider)
    : packages;

  return (
    <div className="catering-page">
      {/* ── Top Banner ─── */}
      <div className="catering-banner">
        <div className="catering-banner-inner container">
          <div className="evenzo-brand">
            <img
              src={EVENZO_LOGO}
              alt="Evenzo Events Logo"
              className="evenzo-logo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <h2 className="evenzo-name">Evenzo Events</h2>
              <p className="evenzo-tagline">Kerala's Premier Event Catering Partner</p>
            </div>
          </div>
          <div className="catering-banner-stats">
            <div className="banner-stat"><span>1,240+</span><p>Providers</p></div>
            <div className="banner-stat"><span>50,000+</span><p>Events Done</p></div>
            <div className="banner-stat"><span>4.8★</span><p>Avg Rating</p></div>
          </div>
        </div>
      </div>

      {/* ── Page Title ─── */}
      <div className="container catering-header">
        <div className="catering-title-row">
          <div>
            <h1 className="catering-title"><Utensils size={28} /> Catering <span className="text-gradient">Packages</span></h1>
            <p className="catering-subtitle">Browse top-rated catering providers and packages across Kerala</p>
          </div>
          {selectedProvider && (
            <button className="btn btn-secondary" onClick={() => setSelectedProvider(null)}>
              View All Providers
            </button>
          )}
        </div>
      </div>

      {/* ── Two-Column Layout ─── */}
      <div className="container catering-layout">

        {/* LEFT — Providers Sidebar */}
        <aside className="providers-sidebar">
          <div className="sidebar-header">
            <h3>Providers</h3>
            <span className="provider-count">{filteredProviders.length} found</span>
          </div>

          <div className="sidebar-search">
            <Search size={16} />
            <input
              type="text"
              placeholder="Search providers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="provider-list">
            {filteredProviders.map((provider) => {
              const cardContent = (
                <>
                  <div className="provider-card-top">
                    <div className="provider-avatar">
                      {provider.name === 'Evenzo Events' ? (
                        <img src={EVENZO_LOGO} alt="Evenzo" className="provider-logo-img" />
                      ) : (
                        provider.name.charAt(0)
                      )}
                    </div>
                    <div className="provider-info">
                      <div className="provider-name-row">
                        <h4>{provider.name}</h4>
                        {provider.verified && <span className="verified-badge">✓</span>}
                        {provider.externalUrl && <ExternalLink size={13} className="provider-ext-icon" />}
                      </div>
                      <p className="provider-specialty">{provider.specialty}</p>
                    </div>
                  </div>
                  <div className="provider-card-bottom">
                    <span className="provider-location"><MapPin size={12} /> {provider.location}</span>
                    <span className="provider-rating"><Star size={12} fill="currentColor" /> {provider.rating} ({provider.reviews})</span>
                  </div>
                  <div className="provider-price">{provider.price}</div>
                  {provider.externalUrl
                    ? <ExternalLink size={16} className="provider-arrow" />
                    : <ChevronRight size={16} className="provider-arrow" />
                  }
                </>
              );

              if (provider.externalUrl) {
                return (
                  <a
                    key={provider.id}
                    href={provider.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`provider-card has-link ${selectedProvider === provider.name ? 'active' : ''}`}
                    style={{ textDecoration: 'none' }}
                  >
                    {cardContent}
                  </a>
                );
              }

              return (
                <div
                  key={provider.id}
                  className={`provider-card ${selectedProvider === provider.name ? 'active' : ''}`}
                  onClick={() => setSelectedProvider(selectedProvider === provider.name ? null : provider.name)}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </aside>

        {/* RIGHT — Packages */}
        <main className="packages-main">
          <div className="packages-toolbar">
            <h3>{selectedProvider ? `${selectedProvider} Packages` : 'All Packages'}</h3>
            <button className="filter-btn"><Filter size={16} /> Filter</button>
          </div>

          <div className="packages-grid">
            {displayedPackages.map((pkg) => (
              <div key={pkg.id} className="package-card glass-panel hover-lift">
                {pkg.badge && <span className="pkg-badge">{pkg.badge}</span>}

                <div className="pkg-provider-row">
                  {pkg.logo ? (
                    <img src={pkg.logo} alt={pkg.provider} className="pkg-provider-logo" />
                  ) : (
                    <div className="pkg-provider-avatar">{pkg.provider.charAt(0)}</div>
                  )}
                  <span className="pkg-provider-name">{pkg.provider}</span>
                </div>

                <h3 className="pkg-name">{pkg.name}</h3>
                <p className="pkg-description">{pkg.description}</p>

                <div className="pkg-includes">
                  {pkg.includes.map((item, i) => (
                    <span key={i} className="pkg-include-chip">{item}</span>
                  ))}
                </div>

                <div className="pkg-footer">
                  <div className="pkg-price-block">
                    <span className="pkg-price">{pkg.price}</span>
                    <span className="pkg-min">Min. {pkg.minGuests} guests</span>
                  </div>
                  <div className="pkg-actions">
                    <span className="pkg-rating"><Star size={13} fill="var(--warning)" color="var(--warning)" /> {pkg.rating}</span>
                    <button className="btn btn-primary add-to-cart-btn">
                      <ShoppingCart size={15} /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default CateringPage;
