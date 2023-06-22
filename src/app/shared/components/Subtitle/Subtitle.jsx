import './Subtitle.css'

const  Subtitle = ({ text, fontSize, className }) => {

    return(
        <h2 style = {{ fontSize: fontSize } } className={`subtitle ${className}`}>{text}</h2>
    )
}

export default Subtitle