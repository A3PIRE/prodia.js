type StylePresent = "3d-model" | "analog-film" | "anime" | "cinematic" | "comic-book" | "digital-art" | "enhance" | "fantasty-art" | "isometric" | "line-art" | "low-poly" | "neon-punk" | "origami" | "photographic" | "pixel-art" | "texture" | "craft-clay"

export interface GenerateParams {
    /**
     * The model to use for the generating image.
     */
    model?: string;
    /**
     * The prompt to use for the generating image.
     */
    prompt: string;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for the generating image.
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for the generating image.
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 20
     */
    cfg_scale?: number;
    /**
     * The seed to use for the generating image.
     * @default 7
     */
    seed?: number;
    /**
     * Whether to upscale the generated image.
     */
    upscale?: boolean;
    /**
     * The sampler to use for the generating image.
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 512
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 512
     */
    height?: number;
}

type ImageInput = {
    /**
     * Input Image URL. Supports JPEG and PNG formats.
     */
    imageUrl: string
} | {
    /**
     * Base-64 Encoded Image Data. Supports JPEG and PNG formats.
     */
    imageData: string
};

export type TransformParams = ImageInput & {
    /**
     * The model to use for transforming image.
     * @default "v1-5-pruned-emaonly.safetensors [d7049739]"
     */
    model?: string;
    /**
     * The prompt to use for transforming image.
     */
    prompt: string;
    /**
     * The denoising strength to control strength of image transfomation
     * @default 0.7
     */
    denoising_strength?: number;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for transforming image.
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for transforming image.
     * @default 20
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 7
     */
    cfg_scale?: number;
    /**
     * The seed to use for transforming image.
     */
    seed?: number;
    /**
     * Whether to upscale the generated image.
     */
    upscale?: boolean;
    /**
     * The sampler to use for transforming image.
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 512
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 512
     */
    height?: number;
}

type MaskInput = {
    /**
     * Input Mask URL. Supports JPEG and PNG formats.
     */
    maskUrl: string
} | {
    /**
     * Base-64 Encoded Mask Data. Supports JPEG and PNG formats.
     */
    maskData: string
}

export type InpaintParams = ImageInput & MaskInput & {
    /**
     * The model to use for inpainting image.
     */
    model?: string;
    /**
     * The prompt to use for inpainting image.
     */
    prompt: string;
    /**
     * The denoising strength to control strength of inpainting
     */
    denoising_strength?: number;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for inpainting image.
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for inpainting image.
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 20
     */
    cfg_scale?: number;
    /**
     * The seed to use for inpainting image.
     * @default 7
     */
    seed?: number;
    /**
     * Whether to upscale the generated image.
     */
    upscale?: boolean;
    /**
     * The mask blur to control how much the mask should blur
     * @default 4
     */
    mask_blur: number;
    /**
     * The inpainting fill to control how much the mask should fill.
     * ```
     * 0 - "fill"
     * 1 - "original"
     * 2 - "latent noise"
     * 3 - "latent nothing"
     * ```
     * @default 0
     */
    inpainting_fill: number;
    /**
     * The inpainting mask invert to control how much the mask should invert.
     * ```
     * 0 - "Inpaint masked" 
     * 1 - "Inpaint not masked"
     * ```
     * @default 1
     */
    inpainting_mask_invert: number;
    /**
     * The inpainting full resolution to control how much the mask should fill.
     * ```
     * false - "Whole picture"
     * true - "Only masked"
     * ```
     * @default true
     */
    inpainting_full_res: boolean;
    /**
     * The sampler to use for inpainting image.
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 512
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 512
     */
    height?: number;
}

export type ControlNetParams = ImageInput & {
    /**
     * The model to use for transforming image.
     */
    model: string;
    /**
     * The model to use for transforming image.
     */
    controlnet_model?: string;
    /**
     * The module to use for transforming image.
     */
    controlnet_module?: string;
    /**
     * The mode to use for transforming image.
     * ```
     * 0 - "Balanced"
     * 1 - "My prompt is more important"
     * 2 - "ControlNet is more important"
     * ```
     */
    control_mode?: number;
    /**
     * Preprocessor Low Threshold
     * @default 100
     */
    threshold_a?: number;
    /**
     * Preprocessor High Threshold
     * @default 200
     */
    threshold_b?: number;
    /**
     * The resize mode to use for controlnet
     */
    resize_mode?: number;
    /**
     * The prompt to use for controlnet
     */
    prompt: string;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for controlnet
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for controlnet
     * @default 20
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 7
     */
    cfg_scale?: number;
    /**
     * The seed to use for controlnet
     */
    seed?: number;
    /**
     * The sampler to use for controlnet
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 512
     */
    height?: number;
    /**
     * The height of the generated image.
     * @default 512
     */
    width?: number;
}

export type SDXLGenerationParams = {
    /**
     * The model to use for generating image.
     */
    model?: string;
    /**
     * The prompt to use for generating image.
     */
    prompt: string;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for generating image
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for generating image
     * @default 20
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 7
     */
    cfg_scale?: number;
    /**
     * The seed to use for generating image
     */
    seed?: number;
    /**
     * The sampler to use for generating image
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 1024
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 1024
     */
    height?: number;
}

export type SDXLTransformParams = ImageInput & {
    /**
     * The model to use for transforming image.
     */
    model?: string;
    /**
     * The prompt to use for transforming image.
     */
    prompt: string;
    /**
     * The denoising strength to control how much the model should respect your prompt.
     * @default 0.7
     */
    denoising_strength?: number;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for transforming image
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for transforming image
     * @default 20
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 7
     */
    cfg_scale?: number;
    /**
     * The seed to use for transforming image
     */
    seed?: number;
    /**
     * Whether to upscale the image
     */
    upscale?: boolean;
    /**
     * The sampler to use for transforming image
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 1024
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 1024
     */
    height?: number;
}

export type SDXLInpaintParams = ImageInput & MaskInput & {
    /**
     * The model to use for inpainting image.
     */
    model?: string;
    /**
     * The prompt to use for inpainting image.
     */
    prompt: string;
    /**
     * The denoising strength to control how much the model should respect your prompt.
     * @default 0.7
     */
    denoising_strength?: number;
    /**
     * The negative prompt to not include certain things in the generated image
     */
    negative_prompt?: string;
    /**
     * The style preset to use for inpainting image
     */
    style_preset?: StylePresent;
    /**
     * The number of steps to use for inpainting image
     * @default 20
     */
    steps?: number;
    /**
     * The cfg scale to control how much the model should respect your prompt.
     * @default 7
     */
    cfg_scale?: number;
    /**
     * The seed to use for inpainting image
     */
    seed?: number;
    /**
     * Whether to upscale the image
     */
    upscale?: boolean;
    /**
     * The mask blur to control how much the mask should blur
     * @default 4
     */
    mask_blur: number;
    /**
     * The inpainting fill to control how much the mask should fill.
     * ```
     * 0 - "fill"
     * 1 - "original"
     * 2 - "latent noise"
     * 3 - "latent nothing"
     * ```
     * @default 0
     */
    inpainting_fill: number;
    /**
     * The inpainting mask invert to control how much the mask should invert.
     * ```
     * 0 - "Inpaint masked" 
     * 1 - "Inpaint not masked"
     * ```
     * @default 1
     */
    inpainting_mask_invert: number;
    /**
     * The inpainting full resolution to control how much the mask should fill.
     * ```
     * false - "Whole picture"
     * true - "Only masked"
     * ```
     * @default true
     */
    inpainting_full_res: boolean;
    /**
     * The sampler to use for inpainting image.
     */
    sampler?: string;
    /**
     * The width of the generated image.
     * @default 1024
     */
    width?: number;
    /**
     * The height of the generated image.
     * @default 1024
     */
    height?: number;
}

export type UpscaleParams = ImageInput & {
    resize: number;
    model?: string;
}

export type FaceSwapParams = {
    /**
     * Original image URL. Supports JPEG and PNG formats.
     */
    sourceUrl: string;
    /**
     * Image containing target face URL. Supports JPEG and PNG formats.
     */
    targetUrl: string;
}

export type FaceRestoreParams = ImageInput