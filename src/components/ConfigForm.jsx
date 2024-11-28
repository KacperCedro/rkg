import { useState } from "react"
import "./ConfigForm.css"

export const ConfigForm = (formProps) => {
    const [tmpSideSize, setTmpSideSize] = useState(formProps.sideSize)
    const [tmpCubeOpacity, setTmpCubeOpacity] = useState(formProps.cubeOpacity)
    const [tmpCubeSize, setTmpCubeSize] = useState(formProps.cubeSize)
    const [tmpEnableInsideCubes, setTmpEnableInsideCubes] = useState(formProps.enableInsideCubes)
    const [tmpSubCubeColors, setTmpSubCubeColors] = useState(formProps.subCubeColors)

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            formProps.ChangeCube({
                sideSize: tmpSideSize,
                cubeOpacity: tmpCubeOpacity,
                cubeSize: tmpCubeSize,
                enableInsideCubes: tmpEnableInsideCubes,
                subCubeColors: tmpSubCubeColors
            })
            console.log(tmpEnableInsideCubes)
        }} 
        >
            <h1>
                Config
            </h1>
            <div>
                <h3>
                    Set side size
                </h3>
                <input 
                    type="number" 
                    value={tmpSideSize}
                    placeholder="side size"
                    onChange={(e) => {setTmpSideSize(e.target.value)}}
                    name="sideSize"
                />
            </div>
            
            <div>
                <h3>
                    Set cube opacity
                </h3>
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={tmpCubeOpacity}
                    placeholder="opacity"
                    onChange={(e) => {setTmpCubeOpacity(e.target.value)}}
                    name="cubeOpacity"
                />
            </div>
            
            <div>
                <h3>
                    Set cube size
                </h3>
                <input 
                    type="number" 
                    value={tmpCubeSize}
                    placeholder="vube size"
                    onChange={(e) => {setTmpCubeSize(e.target.value)}}
                    name="cubeSize"
                />
            </div>
            <div className="opti">
                <h3>
                    Optimalization:
                </h3>
                <h4>
                    Generate inside cubes
                </h4>
                <div>
                    <input 
                        type="checkbox" 
                        checked={tmpEnableInsideCubes}
                        onChange={(e) => {setTmpEnableInsideCubes(e.target.checked)}}
                        name="enableInsideCubes"
                    />
                </div>
            </div>
                    
            <button>
                Change values
            </button>
        </form>
    )
}
