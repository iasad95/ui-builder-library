// v8/namespaced style service worker
importScripts('/assets/service-workers/libs/bundled/tf.bundle.js');
importScripts('/assets/service-workers/libs/bundled/blazeface.bundle.js');
importScripts('/assets/service-workers/libs/bundled/nsfwjs.bundle.js');

let blazefaceModel = null;
let nsfwModel = null;

async function loadModels() {
  nsfwModel = await self.nsfwjs.load('/assets/nsfwjs/');
  blazefaceModel = await self.blazeface.load();
}

async function urlToCanvas(imageUrl) {
  return new Promise((resolve, reject) => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => createImageBitmap(blob))
      .then((imageBitmap) => {
        const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(imageBitmap, 0, 0);
        resolve(canvas);
      })
      .catch(reject);
  });
}

self.addEventListener('message', async (event) => {
  if (event?.data?.action === 'loadModels') {
    await loadModels();
    event.source.postMessage({ action: 'modelsLoaded' });
  } else if (event?.data?.action === 'classifyImage') {
    const canvas = await urlToCanvas(event.data.imageUrl);
    const classifications = await nsfwModel.classify(canvas);
    event.source.postMessage({ action: 'imageClassified', classifications });
  } else if (event?.data?.action === 'detectFaces') {
    const canvas = await urlToCanvas(event.data.imageUrl);
    const faces = await blazefaceModel.estimateFaces(canvas);
    event.source.postMessage({ action: 'facesDetected', faces });
  }
});
