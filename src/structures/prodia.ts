import { ControlNetParams, FaceRestoreParams, FaceSwapParams, GenerateParams, InpaintParams, SDXLGenerationParams, SDXLInpaintParams, SDXLTransformParams, TransformParams, UpscaleParams } from "../typings/types";

interface Response {
    job: string;
    status: "queued" | "generating" | "failed" | "succeeded";
}

interface JobResponse {
    job: string;
    status: "queued" | "generating" | "failed" | "succeeded";
    imageUrl: String;
}

interface Request {
    endpoint: string;
    method: string;
    body?: any;
}

export const Prodia = (api_key: string) => {
    const base = "https://api.prodia.com/v1";
    const headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "X-Prodia-Key": api_key
    };

    const sendRequest = async (params: Request) => {
        const res = await fetch(`${base}${params.endpoint}`, {
            method: params.method,
            headers: headers,
            body: JSON.stringify(params.body)
        });

        if (res.status === 400) {
            throw new Error("The provided parameters are invalid.");
        } else if (res.status === 401) {
            throw new Error("The provided API key is invalid.");
        } else if (res.status === 402) {
            throw new Error("The API key is not enabled.");
        } else if (res.status === 200) {
            return await res.json();
        } else {
            throw new Error("Failed to receive a valid response.");
        }
    };

    /**
     * Generate an image based on the provided parameters.
     *
     * @param {GenerateParams} params - Parameters for image generation
     * @return {Promise<Response>} The response containing the generated image
     */

    const generateImage = async (params: GenerateParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sd/generate",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Image to Image generation using the given parameters.
     *
     * @param {TransformParams} params - Parameters for image transformation
     * @return {Promise<Response>} The response from the image transformation
     */

    const transform = async (params: TransformParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sd/transform",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Performs inpainting using the given parameters.
     *
     * @param {InpaintParams} params - The parameters for the inpainting process
     * @return {Promise<Response>} The response from the inpainting operation
     */

    const inpainting = async (params: InpaintParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sd/inpaint",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Control net generation using the given parameters.
     *
     * @param {ControlNetParams} param - The parameters for the control net generation
     * @return {Promise<Response>} The response from the control net generation
     */

    const controlNet = async (param: ControlNetParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sd/controlnet",
            method: "POST",
            body: param
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * GenerateSDXL function description.
     *
     * @param {SDXLGenerationParams} params - Parameters for SDXL generation
     * @return {Promise<Response>} The response from the SDXL generation
     */


    const generateImageSDXL = async (params: SDXLGenerationParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sdxl/generate",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * TransformSDXL function description.
     * 
     * @param {SDXLTransformParams} params - Parameters for SDXL transformation
     * @return {Promise<Response>} The response from the SDXL transformation
     */

    const transformSDXL = async (params: SDXLTransformParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sdxl/transform",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * InpaintingSDXL function description.
     * 
     * @param {SDXLInpaintParams} params - Parameters for SDXL inpainting
     * @return {Promise<Response>} The response from the SDXL inpainting
     */

    const inpaintingSDXL = async (params: SDXLInpaintParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/sdxl/inpaint",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Upscales the provided parameters by sending a POST request to the "/upscale" endpoint.
     *
     * @param {UpscaleParams} params - The parameters to be upscaled.
     * @return {Promise<Response>} The response from the POST request.
     */

    const upscale = async (params: UpscaleParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/upscale",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Perform a face swap operation by sending a request to the specified endpoint with the provided parameters.
     *
     * @param {FaceSwapParams} params - The parameters for the face swap operation
     * @return {Promise<Response>} The response from the face swap operation
     */

    const faceSwap = async (params: FaceSwapParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/faceswap",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Perform a face restore operation by sending a request to the specified endpoint with the provided parameters.
     *
     * @param {FaceRestoreParams} params - The parameters for the face restore operation
     * @return {Promise<Response>} The response from the face restore operation
     */

    const faceRestore = async (params: FaceRestoreParams): Promise<Response> => {
        const response = await sendRequest({
            endpoint: "/facerestore",
            method: "POST",
            body: params
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a specific job by its ID.
     *
     * @param {string} job_id - The ID of the job to retrieve.
     * @return {Promise<JobResponse>} The response containing the job information.
     */

    const getJob = async (job_id: string): Promise<JobResponse> => {
        const response = await sendRequest({
            endpoint: `/job/${job_id}`,
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SD models.
     * @returns {Promise} The response containing the list of models.
     */

    const getModels = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sd/models",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SDXL models.
     * @returns {Promise} The response containing the list of models.
     */

    const getSDXLModels = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sdxl/models",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SD samplers.
     * @returns {Promise} The response containing the list of samplers.
     */

    const getSamplers = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sd/samplers",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SDXL samplers.
     * @returns {Promise} The response containing the list of samplers.
     */

    const getSDXLSamplers = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sdxl/samplers",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available loras.
     * @returns {Promise} The response containing the list of loras.
     */

    const getLoras = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sd/loras",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SDXL loras.
     * @returns {Promise} The response containing the list of loras.
     */

    const getSDXLLoras = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sdxl/loras",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available embeddings.
     * @returns {Promise} The response containing the list of embeddings.
     */

    const getEmbeddings = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sd/embeddings",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    /**
     * Get a list of current available SDXL embeddings.
     * @return {Promise} The response containing the list of embeddings.
     */

    const getSDXLEmbeddings = async (): Promise<string[]> => {
        const response = await sendRequest({
            endpoint: "/sdxl/embeddings",
            method: "GET"
        });

        if (!response) {
            throw new Error("Failed to receive a valid response.");
        }

        return response;
    };

    const wait = async (job: JobResponse): Promise<JobResponse> => {
        let res: JobResponse = job;
        while (res.status !== "succeeded") {
            await new Promise((resolve) => setTimeout(resolve, 250));

            if (res.status === "failed") {
                throw new Error("Failed to generate image.");
            }

            res = await getJob(job.job);
        }

        return res;
    };

    return {
        generateImage,
        transform,
        inpainting,
        controlNet,
        generateImageSDXL,
        transformSDXL,
        inpaintingSDXL,
        upscale,
        faceSwap,
        faceRestore,
        getJob,
        getModels,
        getSDXLModels,
        getSamplers,
        getSDXLSamplers,
        getLoras,
        getSDXLLoras,
        getEmbeddings,
        getSDXLEmbeddings,
        wait
    };
};