import { useEffect, useState } from "react"
import { loadSubCubaTable } from "./modules/tableGenerator"
import "./Cube.css"
export const Cube = (props) => {
    const [subCubeTable, setSubCubeTable] = useState()
    useEffect(() => {
        console.log("enableInsideCubes changed:", props.enableInsideCubes);
        const table = loadSubCubaTable(props);

        if (!props.enableInsideCubes) {
            console.log("Loaded without inside cubes");
            setSubCubeTable(
                table.filter((element) =>(
                    (element.y === 0 || element.y === props.cubeSize - 1) ||
                    (element.x === 0 || element.x === props.cubeSize - 1) ||
                    (element.z === 0 || element.z === props.cubeSize - 1)
                )
            )
        );
    } 
    else {
        console.log("Loaded with inside cubes");
        setSubCubeTable(table);
    }
    }, [props]);

    let number = 2* props.sideSize;
    console.log(number)
    console.log(props.cubeSize * Math.sqrt((number)))

    const subCubeElements = subCubeTable?.map(element => element.component)

    return (
        <>
        <div 
            style={{
                perspective: `${props.perspective}px`, 
                marginTop: `${props.cubeSize * (Math.sqrt(2* props.sideSize * props.sideSize))}px`,
                //marginBottom: `${props.cubeSize * (Math.sqrt(2* props.sideSize * props.sideSize))}px`
            }} 
            className="cube">
            {subCubeElements}
        </div>
        <div style={{height: `${props.cubeSize * (Math.sqrt(2* props.sideSize * props.sideSize))}px`}}>

        </div>
        </>
    )
}