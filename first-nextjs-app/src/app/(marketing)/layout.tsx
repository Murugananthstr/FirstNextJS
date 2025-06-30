
import React from 'react'

interface MarketingLayoutProps {
    children: React.ReactNode; // This prop will receive the content of child pages/components
  }

const layout = ({ children }: MarketingLayoutProps) => {
  return (
    <html lang="en"> {/* <-- ADD THIS */}
    <body> {/* <-- ADD THIS */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f0f2f5' }}>
        <header style={{ background: '#333', color: 'white', padding: '15px 20px', textAlign: 'center' }}>
          <h1>Marketing Panel Header</h1>
        </header>

        <div style={{ display: 'flex', flexGrow: 1 }}>
          {/* Marketing Sidebar Example */}
          <aside style={{ width: '200px', background: '#444', color: 'white', padding: '20px', flexShrink: 0 }}>
            <h3>Marketing Navigation</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/marketing" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a></li>
              {/* Add more Marketing specific navigation here */}
            </ul>
          </aside>

          {/* Main Content Area */}
          <main style={{ flexGrow: 1, padding: '20px' }}>
            <h2>Marketing Section Content</h2>
            <p>This content comes from the admin layout's main section.</p>
            
            <div style={{ border: '2px dashed #999', padding: '20px', marginTop: '20px', background: 'white' }}>
              {/* THIS IS THE HOOKUP for your page.tsx content */}
              {children} 
            </div>
          </main>
        </div>

        <footer style={{ background: '#333', color: 'white', padding: '10px 20px', textAlign: 'center', fontSize: '0.8em' }}>
          <h2>Marketing Footer</h2>
          <p>&copy; 2025 Marketing Portal</p>
        </footer>
      </div>
    </body> {/* <-- CLOSE BODY */}
  </html> // {/* <-- CLOSE HTML */}

    
  )
}

export default layout