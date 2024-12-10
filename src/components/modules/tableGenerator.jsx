import { SubCube } from "../SubCube"

export const loadSubCubaTable = (props) => {
    //console.log("load table")
    //console.log(props)
    let table = []
    for (let y = 0; y < props.cubeSize; y++) {
        for (let x = 0; x < props.cubeSize; x++) {
            for (let z = 0; z < props.cubeSize; z++) {
                //console.log(x, y, z , "sub cube");
                
               table.push({
                    component: (<SubCube 
                        key={`${x}-${y}-${z}`}
                        props={props} 
                        x={x} 
                        y={y} 
                        z={z} 
                        />),
                    x: x,
                    y: y,
                    z: z,
                })
            }
        }
    }
    return table
}