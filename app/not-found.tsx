export default function NotFoundPage() {
  return (
    <div style={{textAlign: 'center', padding: 50}}>
      <h1 style={{fontSize: '3rem', color: '#ff6347'}}>
        404 - Page Not Found
      </h1>
      <p style={{fontSize: '1.2rem'}}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" style={{color:'#42ffca', textDecoration: 'underline'}}>
        回到首頁
      </a>
    </div>
  )
}