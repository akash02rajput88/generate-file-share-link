import { request, response } from "express";
import File from "../models/file.js";

export const uploadImage = async (request, response) => {
    const fileObject = {
        path: request.file.path,
        name: request.file.originalname
    }
    try {
        const file = await File.create(fileObject);
        response.status(200).json({path: `http://localhost:${process.env.PORT}/file/${file._id}`})
    }
    catch(error) {
        console.error(error.message);
        response.status(500).json({error: error.message})
    }
}

export const downloadImage = async (request, response) => {
    try {
        File.findById(request.params.fileId);

        File.downloadContent++;

        await File.save();

        response.download(file.path, file.name);
    }
    catch(error) {
        console.error(error.message);
        return response.status(500).json({error: error.message});
    }
}
