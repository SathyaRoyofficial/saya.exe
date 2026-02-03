import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProfilePanel from './components/ProfilePanel';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';

// Dummy Data
const PROJECTS = [
  {
    id: 1,
    name: "Bubu Dudu Proposal",
    image: "/assets/bubu-dudu.png",
    caption: "Propose your loved one",
    tag: "Manual",
    url: "https://bubu-dudu-red.vercel.app/"
  },
  {
    id: 2,
    name: "Love Stocks Market",
    image: "/assets/love-stocks.png",
    caption: "Love made stocks",
    tag: "Manual",
    url: "https://love-stock-market.vercel.app/"
  }
];

const FILTERS = ["All", "Vibecode", "Manual", "Websites", "Apps"];

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tag.toLowerCase().includes(searchQuery.toLowerCase());

      if (activeFilter === "All") return matchesSearch;
      if (activeFilter === "Websites" || activeFilter === "Apps") return matchesSearch; // Simplified for demo
      return matchesSearch && project.tag === activeFilter;
    });
  }, [searchQuery, activeFilter]);

  return (
    <div className="app">
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onProfileClick={() => setIsProfileOpen(true)}
      />

      <ProfilePanel
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <main className="container" style={{ paddingTop: '40px', paddingBottom: '40px', minHeight: '80vh' }}>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              style={{
                padding: '8px 20px',
                borderRadius: '99px',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                background: activeFilter === filter ? 'var(--accent)' : 'var(--bg-secondary)',
                color: activeFilter === filter ? '#fff' : 'var(--text-secondary)',
                boxShadow: activeFilter === filter ? '0 4px 12px var(--accent-glow)' : 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Native Banner Container */}
        <div id="container-4f85cc1b04ea4a0b8a229b2f99882e4a" style={{ marginBottom: '40px' }}></div>

        {/* Content */}
        {isLoading ? (
          <div className="flex-center" style={{ height: '300px', flexDirection: 'column', gap: '20px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid var(--bg-secondary)',
              borderTopColor: 'var(--accent)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <p style={{ color: 'var(--text-secondary)', animation: 'pulse 1.5s infinite' }}>Loading Projects...</p>
          </div>
        ) : (
          <>
            {filteredProjects.length > 0 ? (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '32px'
              }}>
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex-center" style={{ height: '300px', flexDirection: 'column', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px' }}>No projects found</p>
                <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your search or filters.</p>
              </div>
            )}
          </>
        )}

      </main>

      <AdBanner />
      <Footer />
    </div>
  );
}

export default App;
