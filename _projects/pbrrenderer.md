---
layout: page
title: PBRRenderer
description: My bachelor's thesis, an interface over Radeon ProRender to adapt it to the specific rendering needs of the client.
img: assets/img/3.jpg
cv_pdf: tfg.pdf
importance: 2
category: computer graphics
giscus_comments: false
---
This was the final thesis (TFG in Spanish) of my bachelor's degree in computer engineering. Here I'll briefly go over my work, but if you're interested you can read the full paper in Spanish.

To give some context, I did an internship with [AUTIS Ingenieros](https://autis.com/en/home/), who owns inspection tunnels with a certain light configuration and many cameras positioned to detect superficial defects on car bodies, like scratches or small fibers. To upgrade these tunnels they wanted to use a computer vision model to better classify these imperfections. In order to train the model they needed a lot of images of car bodies with imperfections taken by these tunnel cameras. The first step was making a renderer that could generate photorealistic images of car bodies in those specific conditions. 

That's what I worked on. At first we decided to develop the rendering engine ourselves. So in order to do that I researched and implemented physically based shading, an irradiance cache for diffuse lighting, Monte Carlo ray tracing for specular reflections and a denoiser for the ray tracer. However, we realized that we had taken on a lot more than we could chew, specially considering that I didn't have any experience with photorealistic rendering prior to this internship. So we pivoted to adapting an existing engine to our needs, and we decided on AMD's Radeon ProRender. 

AUTIS already has a multipurpose simulation software written in C++. Thus, I developed an interface between this software and Radeon ProRender's SDK, with the objective of abstracting the complexities of Physically Based Rendering such that engineers with no previous experience with computer graphics could make use of Radeon ProRender's excellent rendering capabalities.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include video.liquid path="https://youtu.be/Th2DjVsqE-E" class="img-fluid rounded z-depth-1" controls=true autoplay=false %}
    </div>
</div>
<div class="caption">
    A showcase of what the interface features.
</div>

We tested this renderer by taking photos of car paint samples via a device that acted like a miniature version of an inspection tunnel. We took pictures of the same sample under different lighting conditions and camera exposure levels. Then I recreated the scene in our solution, matching the real world parameters of the camera, the lighting, the placement of objects, etc. However, when we compared the images, we realized that we didn't fully accomplish our goals of rendering images indistinguishable from real world pictures.

We attribute this to the following three factors:

- The lighting intensity parameter of the real world light sources didn't have a linear relationship with the amount of light emitted by said source. And I had programmed it as such. So, that's why when we varied lighting the image brightness didn't look right.
- My implementation of exposure post-processing to emulate the work of a real camera was quite poor, as I barely had time to research the topic due to time constraints.
- We didn't implement bloom, which would have helped give the specular highlight the extra brightness it needed.


