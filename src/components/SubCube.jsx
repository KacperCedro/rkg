import { relocate } from "./modules/relocateSubCubes";
import { SubCubeSide } from "./SubCubeSide"

export const SubCube = (props) => {
    
    //console.log(props)
    //console.log(props)
    return (
       <div
            className="subCube"
            style={{
                transform: relocate(props.x, props.y, props.z, props.props.cubeSize, props.props.sideSize),
            }}
        >
            {["front", "back", "top", "bottom", "left", "right"].map((side, index) => {
                const transforms = {
                    front: `rotateZ(0deg) translateZ(${props.props.sideSize / 2}px)`,
                    back: `rotateZ(180deg) translateZ(${props.props.sideSize / 2}px)`,
                    top: `rotateX(90deg) translateZ(${props.props.sideSize / 2}px)`,
                    bottom: `rotateX(-90deg) translateZ(${props.props.sideSize / 2}px)`,
                    left: `rotateY(-90deg) translateZ(${props.props.sideSize / 2}px)`,
                    right: `rotateY(90deg) translateZ(${props.props.sideSize / 2}px)`,
                };

                return (
                    <SubCubeSide
                        key={index}
                        transform={transforms[side]}
                        className={side}
                        color={props.props.subCubeColors[side]}
                        opacity={props.props.cubeOpacity}
                        sideSize={props.props.sideSize}
                    />
                );
            })}
        </div>
    )
}