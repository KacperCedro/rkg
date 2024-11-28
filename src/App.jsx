import { useState } from 'react'
import './App.css'
import { Cube } from "./components/Cube";
import { ConfigForm } from './components/ConfigForm';

// initial config
let initialSideSize = 60
let initialPerspective = 10000
let initialOpacity = 0.3
let initialCubeSize = 4
let initialEnableInsideCubes = true
let initialSubCubeColors = {
  top: "yellow",
  bottom: "white",
  front: "blue",
  back: "green",
  left: "orange",
  right: "red",
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
    setCubeKey((prevKey) => prevKey++)
    //setIsCubeGenerated(!isCubeGenerated)
    //setIsCubeGenerated(true)
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
