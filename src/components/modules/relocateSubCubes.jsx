export const relocate = (x,y,z, cubeSize, subCubeSideSize) => {
    let newY = y * subCubeSideSize;
    let newX = x * subCubeSideSize;
    let newZ = z * subCubeSideSize;
    return "translate3d(" + (newX - (subCubeSideSize * (cubeSize / 2))) + "px, " + (newY - (subCubeSideSize * (cubeSize / 2))) + "px, " + (newZ - (subCubeSideSize * (cubeSize / 2))) + "px)"
}