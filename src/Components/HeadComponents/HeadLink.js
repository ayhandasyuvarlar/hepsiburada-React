import { Link } from 'react-router-dom'

const HeadLink = ({ data }) => {
  return (
    <div id="contanctContainer" style={type.contanctContainer}>
      {data.map((e) => (
        <div key={e.id} style={type.linkList}>
          <Link to="#" style={{ display: 'flex', textDecoration: 'none' }}>
            <span style={type.span}>{e.text}</span>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default HeadLink

const type = {
  linkList: {
    display: 'flex',
    width: '11%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contanctContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'right',
    paddingRight: '1rem',
    paddingTop:"7px"
  },
  span: {
    fontSize: 'small',
    color: '#7b7b7b',
    fontWeight: '700',
  },
}
