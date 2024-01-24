const imageMap = {};

const importAllImages = async () => {
  for (let i = 1; i <= 180; i++) {
    const imageName = `${i}.jpg`;
    try {
      const image = await import(`../img/USA/${imageName}`);
      imageMap[i] = image.default;
    } catch (error) {
      console.error(`Error importing image ${imageName}:`, error);
    }
  }
};

importAllImages();

export default imageMap;
