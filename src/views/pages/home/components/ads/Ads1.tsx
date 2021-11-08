import { CSSProperties } from 'react'
import { getPhotoUrl } from '../../../../../common/untils/functons'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  urlName: string
  style?: CSSProperties
}

const Ads1 = ({ urlName, style }: Props) => {
  return (
    <div className='ads1__container' style={style}>
      <img className='ads1__image' alt='' src={getPhotoUrl(urlName)} />
    </div>
  )
}

export default Ads1
