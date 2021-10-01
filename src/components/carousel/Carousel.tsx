import { useEffect, useState } from 'react'

const Carousel = (props) => {
  const { children, show } = props

  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(children.length)

  const [touchPosition, setTouchPosition] = useState(null)

  useEffect(() => {
    setLength(children.length)
  }, [children])

  const next = () => {
    if (currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {/* You can alwas change the content of the button to other things */}
        {currentIndex > 0 && (
          <button onClick={prev} className='left-arrow'>
            <span>
              <i className='bx bxs-left-arrow-alt carousel__arrow'></i>
            </span>
          </button>
        )}
        <div
          className='carousel-content-wrapper'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`
            }}
          >
            {children}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {currentIndex < length - show && (
          <button onClick={next} className='right-arrow'>
            <span>
              <i className='bx bxs-right-arrow-alt carousel__arrow'></i>
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default Carousel
