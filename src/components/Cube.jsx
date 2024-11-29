import { useEffect, useState } from "react"
import { loadSubCubaTable } from "./modules/tableGenerator"
import "./Cube.css"
export const Cube = (props) => {
    const [subCubeTable, setSubCubeTable] = useState()
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

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

     const handleMouseDown = (e) => {
        setIsDragging(true);
        setLastMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - lastMousePosition.x;
        const deltaY = e.clientY - lastMousePosition.y;

        setRotation((prev) => ({
            x: prev.x - deltaY * 0.5,
            y: prev.y + deltaX * 0.5,
        }));

        setLastMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);

    const subCubeElements = subCubeTable?.map(element => element.component)

    return (
        <>
            <div
                style={{
                    height: `${props.cubeSize * props.sideSize * 2}px`,
                    width: `${props.cubeSize * props.sideSize * 2}px`,
                }}
                className="cube-wrapper"
                onMouseDown={handleMouseDown}
            >
                <div
                    className="cube"
                    style={{
                        transform: `rotateX(${rotation.x / 100}deg) rotateY(${rotation.y / 100}deg)`,
                        height: `${props.cubeSize * props.sideSize}px`,
                        width: `${props.cubeSize * props.sideSize}px`,
                    }}
                >
                    {subCubeElements}
                </div>
            </div>
        </>
    )
}