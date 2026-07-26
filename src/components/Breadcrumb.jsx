import { useLocation, Link } from 'react-router'
import breadcrumbs from '../assets/images/breadcrumbs .webp'
import Container from './layout/Container'
import { MdHome } from 'react-icons/md'

const Breadcrumb = () => {
  const { pathname } = useLocation()
  const segments = pathname.split('/').filter(Boolean)

  const formatLabel = (segment) =>
    segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

  return (
    <div style={{ background: `url(${breadcrumbs})` }}>
      <Container>
        <div className="flex items-center gap-3 py-12">
          <Link to="/">
            <MdHome className="text-[#808080] text-2xl hover:text-primary" />
          </Link>
          {segments.map((segment, index) => (
            <span key={index} className="flex items-center gap-3 text-base text-[#999999] font-pop">
              <span className="text-[#808080]">&gt;</span>
              {index === segments.length - 1 ? (
                <span>{formatLabel(segment)}</span>
              ) : (
                <Link to={`/${segments.slice(0, index + 1).join('/')}`} className="hover:text-primary">
                  {formatLabel(segment)}
                </Link>
              )}
            </span>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Breadcrumb
