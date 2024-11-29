import { useState } from 'react'
import './App.css'
import { Cube } from "./components/Cube";
import { ConfigForm } from './components/ConfigForm';

// initial config
let initialSideSize = 100
let initialPerspective = 10000
let initialOpacity = 0.3
let initialCubeSize = 2
let initialEnableInsideCubes = true
let initialSubCubeColors = {
  top: "#ffff00",
  bottom: "#ffffff",
  front: "#0000ff",
  back: "#008000",
  left: "#ffa500",
  right: "#ff0000",
}

function App() {

  // propertisy dla generycznego silnika
  const [sideSize, setSideSize] = useState(initialSideSize)
  const [perspective, setPerspective] = useState(initialPerspective)
  const [cubeOpacity, setCubeOpacity] = useState(initialOpacity)
  const [cubeSize, setCubeSize] = useState(initialCubeSize)
  const [enableInsideCubes, setEnableInsideCubes] = useState(initialEnableInsideCubes)
  const tableOfSides = ["top", "bottom", "back", "front", "left", "right"]
  const [subCubeColors, setSubCubeColors] = useState(initialSubCubeColors)

  const [cubeKey, setCubeKey] = useState(0); // unikalny klucz do ponownego renderowania
  //const [isCubeGenerated, setIsCubeGenerated] = useState(false)

  

  const ChangeCube = (data) => {
    console.log(data)
    setSideSize(data.sideSize)
    setCubeOpacity(data.cubeOpacity)
    setCubeSize(data.cubeSize)
    setEnableInsideCubes(data.enableInsideCubes)
    setSubCubeColors(data.subCubeColors)
    setCubeKey((prevKey) => prevKey++)
  }

  return (
    <>
      <ConfigForm
        sideSize={sideSize} 
        cubeOpacity={cubeOpacity}
        cubeSize={cubeSize}
        enableInsideCubes={enableInsideCubes}
        subCubeColors={subCubeColors}
        ChangeCube={ChangeCube}
      />
      <Cube 
        key={cubeKey}
        sideSize={sideSize} 
        perspective={perspective}
        cubeOpacity={cubeOpacity}
        cubeSize={cubeSize}
        enableInsideCubes={enableInsideCubes}
        tableOfSides={tableOfSides}
        subCubeColors={subCubeColors}
      />
    </>
  )
}

export default App
