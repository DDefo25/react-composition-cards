import PropTypes from 'prop-types'

export default function Card({img, children, additionalClass}) {
    return (
        <div className={`card ${ additionalClass}`} style={{width: '18rem'}}>
            {img ? <img src={img} className="card-img-top" alt="..." /> : null}
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    additionalClass: PropTypes.string
}