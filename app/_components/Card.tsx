import './card.css'

const Card = ({ className }: { className?: string }) => {
  return (
    <div className={`wrapper ${className}`}>
      <div className='container'>
        <p className='browser-warning'>
          If this looks wonky to you it's because this browser doesn't support
          the CSS property 'aspect-ratio'.
        </p>
        <div className='stack'>
          <div className='card'>
            <div className='image' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
