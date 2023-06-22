const Image = ({ className, src, alt, id }) => {

    return(
        <img 
        className={className} 
        id={id}
        src={src ?? 'https://placehold.co/600x400'} 
        alt={alt}/>
    )
}

export default Image