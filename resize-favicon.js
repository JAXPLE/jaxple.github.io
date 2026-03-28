import sharp from 'sharp';

async function resize() {
  try {
    console.log('Resizing public/favicon.png...');
    await sharp('public/favicon.png')
      .resize(256, 256)
      .toFile('public/favicon-small.png');
    console.log('Successfully resized to 256x256 and saved as public/favicon-small.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

resize();
