import Text from "../../shared/components/Text/Text"

import "./Footer.css"

const Footer = ({ textContent, textSize }) => {

    return(
        <footer className="footer___container">
            <Text 
            className='footer__text'
            textContent={ textContent }
            textSize={textSize}/>
        </footer>
    )
}

export default Footer