
export const relocate = (x, y, z, cubeSize, subCubeSideSize) => {
    const offset = (cubeSize - 1) / 2;
    const newX = ((x - offset) * subCubeSideSize) + 0.5 * subCubeSideSize * (cubeSize -1);
    const newY = ((y - offset) * subCubeSideSize) + 0.5 * subCubeSideSize  * (cubeSize -1);
    const newZ = (z - offset) * subCubeSideSize;

    console.log(`Relocating cube: (${x}, ${y}, ${z})`);
    console.log(`New position: translate3d(${newX}px, ${newY}px, ${newZ}px)`);

    return `translate3d(${newX}px, ${newY}px, ${newZ}px)`;
};
