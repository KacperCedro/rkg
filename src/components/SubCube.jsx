import { useState } from "react";
import { relocate } from "./modules/relocateSubCubes";
import { SubCubeSide } from "./SubCubeSide"

export const SubCube = (props) => {
    const [showSide, setShowSide] = useState(false)
    return (
       <div
            className="subCube"
            style={{
                transform: relocate(props.x, props.y, props.z, props.props.cubeSize, props.props.sideSize),
                height: `${props.props.sideSize}px`,
                width: `${props.props.sideSize}px`,
            }}
        >
            {["front", "back", "top", "bottom", "left", "right"].map((side, index) => {
                let showSideLet = false
                const transforms = {
                    
                    front: `rotateZ(0deg) translateZ(${props.props.sideSize / 2}px)`,
                    back: `rotateZ(180deg) translateZ(${-props.props.sideSize / 2}px) `,
                    top: `rotateX(90deg) translateZ(${props.props.sideSize / 2}px)`,
                    bottom: `rotateX(-90deg) translateZ(${props.props.sideSize / 2}px)`,
                    left: `rotateY(-90deg) translateZ(${props.props.sideSize / 2}px)`,
                    right: `rotateY(90deg) translateZ(${props.props.sideSize / 2}px)`,
                };
                    // tylna ścianka
                    if (
                        ((props.x >= 0) && (props.x <= props.props.cubeSize -1)) &&
                        ((props.y >= 0) && (props.y <= props.props.cubeSize -1)) &&
                        ((props.z === 0)) &&
                        side === "back") {
                        showSideLet = true
                    }
                    // górna ścianka
                    if (
                        ((props.x >= 0) && (props.x <= props.props.cubeSize -1)) &&
                        ((props.z >= 0) && (props.z <= props.props.cubeSize -1)) &&
                        (props.y === 0) &&
                        side === "top") {
                        showSideLet = true
                    }
                    // lewa ścianka
                    if (
                        ((props.y >= 0) && (props.y <= props.props.cubeSize -1)) &&
                        ((props.z >= 0) && (props.z <= props.props.cubeSize -1)) &&
                        (props.x === 0) &&
                        side === "left") {
                        showSideLet = true
                    }
                    // prawa ścianka
                    if (
                        ((props.y >= 0) && (props.y <= props.props.cubeSize -1)) &&
                        ((props.z >= 0) && (props.z <= props.props.cubeSize -1)) &&
                        (props.x === props.props.cubeSize -1) &&
                        side === "right"
                    ) {
                        showSideLet = true;
                    }
                    // dolna ścianka
                    if (
                        ((props.x >= 0) && (props.x <= props.props.cubeSize -1)) &&
                        ((props.z >= 0) && (props.z <= props.props.cubeSize -1)) &&
                        (props.y === props.props.cubeSize -1) &&
                        side === "bottom"
                    ) {
                        showSideLet = true;
                    }
                    // tylna ścianka
                    if (
                        ((props.x >= 0) && (props.x <= props.props.cubeSize -1)) &&
                        ((props.y >= 0) && (props.y <= props.props.cubeSize -1)) &&
                        ((props.z === props.props.cubeSize -1)) &&
                        side === "front") {
                        showSideLet = true
                    }
                if (showSideLet) {
                    //console.log(props.x, props.y, props.z, side, "side");
                    
                    return (
                        <SubCubeSide
                            key={index}
                            transform={transforms[side]}
                            className={side}
                            cubeSize={props.props.cubeSize}
                            color={props.props.subCubeColors[side]}
                            opacity={props.props.cubeOpacity}
                            sideSize={props.props.sideSize}
                        />
                    );
                }
                else if (!showSideLet) {
                    return(
                        <> </>
                    )
                }
            })}
        </div>
    )
}