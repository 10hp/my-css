const _Modal = ({ text }) => (
  <>
  <dialog id="myModal" open>
      <p>{text}</p>
      <button onClick={() => document.getElementById('myModal').close()}>Close</button>
  </dialog>
  </>
);

const _Header = ({ PageName = "", Headers = [], loggedInUser, setLoggedInUser, setPage }) => (
  <header
  style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "#2b2d42",
      color: "#fff",
      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  }}
  >
  <div>
      Company Name Here
  </div>
  <div style={{ fontSize: "1.3rem", fontWeight: "600" }}>
      {PageName}
  </div>

  <div style={{ display: "flex", gap: "16px" }}>
      {Headers.map((h, idx) => (
      <button onClick={h.onClick} key={idx}>
          {h.label}
      </button>
      ))}
  </div>

  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      {loggedInUser ? (
      <>
          <span>{loggedInUser.username}</span>
          <button
          onClick={() => {
              setLoggedInUser(null); 
              setPage("login");      
          }}
          >
          Logout
          </button>
      </>
      ) : (
      <button onClick={() => setPage("login")}>Login</button>
      )}
  </div>
  </header>
);

const _Footer = () => (
  <footer
  style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      background: "#2b2d42",
      color: "#fff",
      fontSize: "0.9rem",
      marginTop: "40px", 
      borderTop: "1px solid #8d99ae",
  }}
  >
  <div>© {new Date().getFullYear()} My Dashboard</div>
  <div>All systems operational</div>
  <div>
      <a
      href="#"
      style={{
          color: "#8d99ae",
          textDecoration: "none",
          marginRight: "12px",
      }}
      >
      Privacy
      </a>
      <a
      href="#"
      style={{ color: "#8d99ae", textDecoration: "none" }}
      >
      Terms
      </a>
  </div>
  </footer>
);

const _Page = ({ pageName, Header, children }) => (
  <>
  <_Header PageName={pageName} Headers={Header} />
  <_Modal text="Loading..."/>
      <main>
      {children}
      </main>
  <_Footer />          
  </>
);
