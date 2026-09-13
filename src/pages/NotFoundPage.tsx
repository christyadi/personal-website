import { Link } from 'react-router-dom'
export function NotFoundPage() { return <section className="not-found"><p className="eyebrow">HTTP 404</p><h1>RESOURCE_NOT_FOUND</h1><p>The requested resource could not be resolved.</p><Link to="/">Return home</Link></section> }
