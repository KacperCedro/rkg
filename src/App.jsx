import { useEffect, useState } from 'react'
import './App.css'
import { Cube } from "./components/Cube";
import { ConfigForm } from './components/ConfigForm';
import { initialCubeSize, initialEnableInsideCubes,initialOpacity,initialPerspective,initialSideSize,initialSubCubeColors, initialUnit } from "./initialConfig";
// initial config


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
  const [isFormShown, setIsFormShown] = useState(false)

  useEffect(() => {
    document.body.style.touchAction = isFormShown ? 'manipulation' : 'none';

    return () => {
      // Resetuje wartość, jeśli komponent zostanie odmontowany
      document.body.style.touchAction = '';
    };
  }, [isFormShown])

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
      <button onClick={() => {
        setIsFormShown(!isFormShown)
      }}>
        {isFormShown ? "Hide config panel" : "Show config panel and unlock browser"}
      </button>
      { isFormShown && (
        <>
        <ConfigForm
          sideSize={sideSize} 
          cubeOpacity={cubeOpacity}
          cubeSize={cubeSize}
          enableInsideCubes={enableInsideCubes}
          subCubeColors={subCubeColors}
          ChangeCube={ChangeCube}
        />
        <button onClick={() => setIsFormShown(false)}>
          Hide config panel
        </button>
        </>
      )}
      
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
