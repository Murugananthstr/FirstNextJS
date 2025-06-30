
import React from 'react'

interface AdminLayoutProps {
    children: React.ReactNode; // This prop will receive the content of child pages/components
  }

const layout = ({ children }: AdminLayoutProps) => {
  return (
    <html lang="en"> {/* <-- ADD THIS */}
    <body> {/* <-- ADD THIS */}
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#f0f2f5' }}>
        <header style={{ background: '#333', color: 'white', padding: '15px 20px', textAlign: 'center' }}>
          <h1>Admin Panel Header</h1>
        </header>

        <div style={{ display: 'flex', flexGrow: 1 }}>
          {/* Admin Sidebar Example */}
          <aside style={{ width: '200px', background: '#444', color: 'white', padding: '20px', flexShrink: 0 }}>
            <h3>Admin Navigation</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="/admin/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a></li>
              {/* Add more admin specific navigation here */}
            </ul>
          </aside>

          {/* Main Content Area */}
          <main style={{ flexGrow: 1, padding: '20px' }}>
            <h2>Admin Section Content</h2>
            <p>This content comes from the admin layout's main section.</p>
            
            <div style={{ border: '2px dashed #999', padding: '20px', marginTop: '20px', background: 'white' }}>
              {/* THIS IS THE HOOKUP for your page.tsx content */}
              {children} 
            </div>
          </main>
        </div>

        <footer style={{ background: '#333', color: 'white', padding: '10px 20px', textAlign: 'center', fontSize: '0.8em' }}>
          <h2>Admin Footer</h2>
          <p>&copy; 2025 Admin Portal</p>
        </footer>
      </div>
    </body> {/* <-- CLOSE BODY */}
  </html> // {/* <-- CLOSE HTML */}

    
  )
}

export default layout