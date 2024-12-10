import { useEffect, useState } from "react"
import { loadSubCubaTable } from "./modules/tableGenerator"
import "./Cube.css"

export const Cube = (props) => {
    const [subCubeTable, setSubCubeTable] = useState();
    const [rotation, setRotation] = useState({ x: -30, y: -30 });
    const [isInteracting, setIsInteracting] = useState(false);
    const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        //console.log("enableInsideCubes changed:", props.enableInsideCubes);
        const table = loadSubCubaTable(props);

        if (!props.enableInsideCubes) {
            //console.log("Loaded without inside cubes");
            setSubCubeTable(
                table.filter((element) => 
                    (element.y === 0 || element.y === props.cubeSize - 1) ||
                    (element.x === 0 || element.x === props.cubeSize - 1) ||
                    (element.z === 0 || element.z === props.cubeSize - 1)
                )
            );
        } else {
            console.log("Loaded with inside cubes");
            setSubCubeTable(table);
        }
    }, [props]);

    // Obsługa klawiatury
    const handleKeydown = (e) => {
        const ROTATION_STEP = 30; // Kąt rotacji w stopniach dla każdego naciśnięcia
        switch (e.key) {
            case "ArrowUp":
                setRotation((prev) => ({ ...prev, x: Math.max(-90, prev.x - ROTATION_STEP)  }));
                break;
            case "ArrowDown":
                setRotation((prev) => ({ ...prev, x: Math.min(90, prev.x + ROTATION_STEP) }));
                break;
            case "ArrowLeft":
                setRotation((prev) => ({ ...prev, y: prev.y - ROTATION_STEP }));
                break;
            case "ArrowRight":
                setRotation((prev) => ({ ...prev, y: prev.y + ROTATION_STEP }));
                break;
            default:
                break;
        }
    };

    // Dodaj nasłuchiwanie klawiatury
    useEffect(() => {
        window.addEventListener("keydown", handleKeydown);

        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    // Funkcja do rozpoczęcia interakcji (mysz lub dotyk)
    const handleStart = (e) => {
        e.preventDefault();
        setIsInteracting(true);

        // Obsługa myszy lub dotyku
        const isTouch = e.type === "touchstart";
        const { clientX, clientY } = isTouch ? e.touches[0] : e;

        setLastPosition({ x: clientX, y: clientY });
    };

    // Funkcja obsługująca ruch kursora lub palca
    const handleMove = (e) => {
    if (!isInteracting) return;

    const isTouch = e.type === "touchmove";
    const { clientX, clientY } = isTouch ? e.touches[0] : e;

    const deltaX = clientX - lastPosition.x;
    const deltaY = clientY - lastPosition.y;

    // Odwróć znak dla deltaX
    setRotation((prev) => ({
        x: Math.max(-90, Math.min(90, prev.x - deltaY * 0.05)), // Rotacja wokół X (góra/dół)
        y: prev.y + deltaX * 0.05, // Rotacja wokół Y (lewo/prawo)
    }));

    setLastPosition({ x: clientX, y: clientY });
    };

    // Funkcja do zakończenia interakcji
    const handleEnd = () => {
        setIsInteracting(false);
    };

    // Obsługa nasłuchiwania zdarzeń
    useEffect(() => {
        if (isInteracting) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", handleEnd);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("touchend", handleEnd);
        } else {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleEnd);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isInteracting]);

    const subCubeElements = subCubeTable?.map((element) => { 
        //console.log("sub cube")
        return element.component
    });

    return (
        <>
            <div
                style={{
                    perspective: props.perspective,
                    height: `${props.cubeSize * props.sideSize * 2}px`,
                    width: `${props.cubeSize * props.sideSize * 2}px`,
                }}
                className="cube-wrapper"
                onMouseDown={handleStart}
                onTouchStart={handleStart} // Dodano obsługę dotyku
            >
                <div
                    className="cube"
                    style={{
                        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y }deg)`,
                        height: `${props.cubeSize * props.sideSize}px`,
                        width: `${props.cubeSize * props.sideSize}px`,
                    }}
                >
                    {subCubeElements}
                </div>
            </div>
        </>
    );
};