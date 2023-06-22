import Text from '../../shared/components/Text/Text'
import Subtitle from '../../shared/components/Subtitle/Subtitle'
import Image from '../../shared/components/Image/Image'

import './Card.css'

const Card = ({ src, alt, textContent, subtitleText, subtitleSize, imgId }) => {

    return(
        <div className='card__container'>
            <Subtitle 
                className='card__subtitle' 
                fontSize={subtitleSize} 
                text={subtitleText}/>

            <div className='card__content-container'>

                <Image 
                    id={imgId}
                    className='card__img' 
                    src={src} 
                    alt={alt}/>

                <Text 
                className='card__text' 
                textContent={textContent}/>
                
            </div>
        </div>
    )
}

export default Card