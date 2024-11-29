export const SubCubeSide = (props) => {
    //console.log(props)
    return (
       <div
            //className={props.className}
            className="figure"
            style={{
                transform: props.transform,
                height: `100%`,
                width: `100%`,
                backgroundColor: props.color,
                opacity: props.opacity,
            }}
        />
    )
}