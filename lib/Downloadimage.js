const fs = membutuhkan ('fs');
const axios = membutuhkan ('axios');
function downloadImage (url, image_path) {
  axios ({
    url,
    responseType: 'stream',
  }).kemudian(
    respon =>
      Janji baru ((menyelesaikan, menolak) => {
        response.data
          .pipe (fs.createWriteStream (image_path))
          .on ('selesai', () => menyelesaikan ())
          .on ('error', e => reject (e));
      }),

);
}

exports.downloadImage = downloadImage
