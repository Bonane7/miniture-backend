import multer from "multer";

//stockage temporaire en memoire

const storage = multer.memoryStorage();

const upload = multer({
    storage,
})

export default upload;