import { SubCube } from "../SubCube"

export const loadSubCubaTable = (props) => {
    console.log("load table")
    console.log(props)
    let table = []
    for (let y = 0; y < props.cubeSize; y++) {
        for (let x = 0; x < props.cubeSize; x++) {
            for (let z = 0; z < props.cubeSize; z++) {
               table.push({
                    component: (<SubCube 
                        key={`${x}-${y}-${z}`}
                        props={props} 
                        x={x} 
                        y={y} 
                        z={z} /*transformSubCube={relocate(x, y, z, props.cubeSize, props.sideSize)} */ /
                        >),
                    x: x,
                    y: y,
                    z: z,
                })
            }
        }
    }
    return table
}