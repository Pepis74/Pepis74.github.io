---
layout: page
title: MiniEngine
description: Vulkan RTX engine developed as a class project for my Master's degree.
img: assets/img/rt_result.png
github: https://github.com/Pepis74/miniEngine
cv_pdf: ra2.pdf
importance: 1
category: computer graphics
related_publications: false
---

MiniEngine is a modern Vulkan graphics engine. It's a class project from my Master's degree in Computer Graphics, Games and Virtual Reality at Universidad Rey Juan Carlos. In this class they gave us the engine's skeleton, and our task was to modify it and implement a number of features. The ones I implemented are:

- Deferred Rendering.
- Physically Based Shading, based on Unreal's shading model.
- Screen Space Ambient Occlusion.
- FXAA
- Shadows, implemented in two different ways: Variance Shadow Maps (VSM) and Ray Traced Soft Shadows through RTX.
- A moving camera.
- A user interface to tweak the shaders' parameters.

You can read more about these features in the [attached report](https://pepis74.github.io/assets/pdf/ra2.pdf). Here I'll share some images rendered with the engine.

<div class="row justify-content-center">
    <div class="col-lg-8">
        {% include figure.liquid path="assets/img/ssao.png" title="SSAO" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          The SSAO seen in the Stanford Dragon.
        </div>
    </div> 
</div>

<div class="row justify-content-center">
    <div class="col-lg-8">
        {% include figure.liquid path="assets/img/vsm_result.png" title="VSM" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          Shadows rendered via Variance Shadow Maps.
        </div>
    </div> 
</div>

<div class="row justify-content-center">
    <div class="col-lg-8">
        {% include figure.liquid path="assets/img/rt_result.png" title="RTX" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          Shadows rendered via Ray Traced Soft Shadows.
        </div>
    </div> 
</div>
