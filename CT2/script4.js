// 你的视频和描述数据
const artifacts = [
        {
            video: "videos/artifact1.mp4",
            title: "Artifact #1 — Dispersing Particle Flower",
            description: "This artifact was created by following a full tutorial workflow in TouchDesigner. A complex network of operators was built to generate a point cloud of a flower model, combined with particle dispersal behaviors and dynamic rendering. This piece establishes the baseline system for further variations in the series."
        },
        {
            video: "videos/artifact2.mov",
            title: "Artifact #2 — Dispersing Particle Buddha Statue",
            description: "Building upon the previous setup, I replaced the source model with a Buddha statue (.ply file) inside the Geometry COMP. Additionally, I modified the Camera COMP parameters to introduce new rotational motion, creating a more dynamic orbit around the object. The particle dispersion emphasized the intricate folds and layers of the statue’s surface."
        },
        {
            video: "videos/artifact3.mov",
            title: "Artifact #3 — Dispersing Particle Sculpture",
            description: "For this iteration, I updated the Geometry COMP with a different (.ply) file representing a classical sculpture. The Camera COMP settings were kept the same as in Artifact #2, maintaining the previous rotational movement. The sculpture’s complex surface details resulted in a finer and denser particle breakup pattern."
        },
        {
            video: "videos/artifact4.mov",
            title: "Artifact #4 — Dispersing Particle Bird",
            description: "Continuing the exploration, I replaced the model in the Geometry COMP with a bird (.ply file). No changes were made to the Camera COMP, preserving the dynamic rotational path. The lighter form of the bird led to a more delicate and scattered dispersal of particles."
        },
        {
            video: "videos/artifact5.mov",
            title: "Artifact #5 — Dispersing Particle Ancient Cauldron (Ding)",
            description: "In this version, the source model was updated to a traditional ancient cauldron (鼎) (.ply file). Camera motion settings remained consistent with previous artifacts. The strong, symmetrical structure of the cauldron generated a stable, robust point cloud before dispersing."
        },
        {
            video: "videos/artifact6.mp4",
            title: "Artifact #6 — Basic Point Cloud Image Mapping",
            description: "This artifact was built by following a tutorial focusing on converting image pixels into point clouds. A TOP image was sampled to position particles using their color and brightness data. No additional changes were made beyond the base tutorial workflow. This serves as the starting point for image-driven variations."
        },
        {
            video: "videos/artifact7.mp4",
            title: "Artifact #7 — Point Cloud Image Variation 1",
            description: "For this version, I replaced the input image in the TOP with a different photo. No structural changes were made to the point cloud system. This led to a different spatial distribution based on the new image’s luminance and contrast."
        },
        {
            video: "videos/artifact8.mp4",
            title: "Artifact #8 — Point Cloud Image Variation 2",
            description: "Continuing the same method, a new image was imported as the TOP source. No modifications were made to the Camera COMP or particle behavior. The resulting point cloud exhibited a distinct form corresponding to the new visual content."
        },
        {
            video: "videos/artifact9.mp4",
            title: "Artifact #9 — Point Cloud ArtCenter Image 1 (Height Adjusted)",
            description: "Starting a new variation series, I imported a photo of an ArtCenter building as the TOP input. In addition to changing the image, I adjusted the particle vertical displacement by modifying the Math TOP range mapping. This allowed the particles to jump higher or retract closer to the plane based on image brightness."
        },
        {
            video: "videos/artifact10.mp4",
            title: "Artifact #10 — Point Cloud ArtCenter Image 2 (Height Adjusted)",
            description: "For this artifact, a second ArtCenter photo was loaded as the new TOP input. Similar to Artifact #9, the Math TOP was used to fine-tune the pixel height response. Adjusting the mapping range created a different sense of dimensionality across the point field."
        },
        {
            video: "videos/artifact11.mov",
            title: "Artifact #11 — Point Cloud ArtCenter Image 3 (Height Adjusted)",
            description: "In this iteration, a third image of the ArtCenter campus was used as the TOP source. Range values in the Math TOP were tweaked again to influence particle dispersal height. These subtle adjustments resulted in a unique balance between flatness and verticality in the point cloud form."
        },
    
        {
            video: "videos/artifact12.mp4",
            title: "Artifact #12 — Basic Audio Waveform Point Cloud",
            description: "This artifact was created by following a tutorial to build a basic audio-driven point cloud. Audio signals were sampled via Audio Device In CHOP. The waveforms were mapped to particle positions using SOP to CHOP conversion and visualized through a Render TOP. No significant modifications were introduced beyond the core tutorial structure."
        },
        {
            video: "videos/artifact13.mp4",
            title: "Artifact #13 — Audio Point Cloud (Math Adjusted)",
            description: "Building upon the basic waveform setup, I applied a Math CHOP operation, multiplying the incoming audio values by 9.95. Additionally, a Limit CHOP was added with Quantize enabled, restricting the signal range between 0 and 0.13. These modifications amplified the particle displacement while introducing a quantized, blockier movement pattern."
        },
        {
            video: "videos/artifact14.mp4",
            title: "Artifact #14 — Quad-Waveform Formation",
            description: "For this version, I duplicated the original audio-driven point cloud using multiple Transform SOPs. Four copies were arranged spatially to form a square formation around the center axis. No major changes were made to the audio input or Camera COMP. This artifact explores spatial tiling of the waveform pattern while preserving its reactive behavior."
        },
        {
            video: "videos/artifact15.mp4",
            title: "Artifact #15 — Grid Density and Sampling Rate Modification",
            description: "In this iteration, I altered the SOP to CHOP conversion by adjusting the sample rate. Additionally, I modified the Grid SOP by increasing the number of rows and columns. These changes resulted in a denser and more finely detailed particle grid, with smoother motion due to higher sampling resolution."
        },
        
        {
            video: "videos/artifact16.mov",
            title: "Artifact #16 — Basic Audio-Responsive Waveform Lines",
            description: "This artifact was built by following a tutorial to create audio-reactive line formations. A Line SOP was used as the base structure. The Audio Device In CHOP sampled external sound and modulated the vertical displacement of the lines. Color gradients were applied via a Ramp TOP mapped to the audio amplitude. This serves as the initial exploration of translating sound into flowing line-based visual forms."
        },
        {
            video: "videos/artifact17.mov",
            title: "Artifact #17 — Amplified Line Displacement",
            description: "Building on the basic setup, I increased the scaling factor of the audio-driven displacement to exaggerate the vertical movement of the lines. Minor adjustments were made to the Line SOP's point resolution to create sharper waveform details. These changes resulted in a more dramatic, peak-heavy motion in response to the sound input."
        },
        {
            video: "videos/artifact18.mov",
            title: "Artifact #18 — Dual-Wave Symmetry",
            description: "For this version, I duplicated the original audio line structure and mirrored it along the vertical axis using a Transform SOP. The composition now featured two synchronized waveform lines facing each other symmetrically. This explored the idea of creating visual 'dialogues' between two reactive audio streams."
        },
        {
            video: "videos/artifact19.mov",
            title: "Artifact #19 — Line Density and Resolution Adjustment",
            description: "In this iteration, I increased the number of points in the Line SOP and fine-tuned the interpolation between points. The audio input remained the same, but the higher density produced smoother and more fluid waveform motion. The result was a more refined, continuous sound visualization."
        },
        {
            video: "videos/artifact20.mov",
            title: "Artifact #20 — Color Gradient Refinement",
            description: "For the final artifact in the series, I modified the Ramp TOP color mapping to emphasize cooler tones transitioning into bright highlights. Small tweaks were made to the amplitude mapping to enhance the color reaction sensitivity to audio peaks. This created a more visually dynamic representation of sound energy across the waveform landscape."
        },
        
];

// 继续补充到20个 artifact对象...

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-section');
    const mainVideo = document.getElementById('main-video');
    const artifactTitle = document.getElementById('artifact-title');
    const artifactDescription = document.getElementById('artifact-description'); // ✅ 注意加上这个！

    // 生成Gallery小视频
    artifacts.forEach((artifact, index) => {
        const thumb = document.createElement('video');
        thumb.src = artifact.video;
        thumb.muted = true;
        thumb.loop = true;
        thumb.autoplay = true;
        thumb.playsInline = true;
        thumb.addEventListener('click', function() {
            // 切换大视频
            mainVideo.src = artifact.video;
            mainVideo.play();
        
            // 切换标题
            artifactTitle.textContent = artifact.title;
        
            // 切换描述
            artifactDescription.textContent = artifact.description;
        });
        gallery.appendChild(thumb);
    });
});
