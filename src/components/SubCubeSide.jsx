export const SubCubeSide = (props) => {
    //console.log(props)
    return (
       <figure
            className={props.className}
            style={{
                transform: props.transform,
                height: `${props.sideSize}px`, // Dodanie jednostek "px"
                width: `${props.sideSize}px`,
                backgroundColor: props.color,
                opacity: props.opacity,
            }}
        />
    )
}