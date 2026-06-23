---
layout: page
title: Nori-Based Path Tracer
description: CPU Path Tracer built on Nori done as a class project for my Master's degree. 
img: assets/img/pnee_512_blue_yellow.png
cv_pdf: ra1.pdf
importance: 3
category: computer graphics
giscus_comments: false
---

In the Master's degree I studied, Computer Graphics, Games and Virtual Reality at Universidad Rey Juan Carlos, I took a class where they gave us the skeleton of [Nori](https://wjakob.github.io/nori/), an educational ray tracer built at EFPL, and tasked us with implementing the ray tracing and path tracing algorithms. From direct illumination and multiple importance sampling, to path tracing and next event estimation. 

Additionally, I went beyond the course requirements by implementing advanced microfacet material models, driven by my particular interest in physically based shading. You can read all about it in the [attached report](https://pepis74.github.io/assets/pdf/ra1.pdf).

<div class="row justify-content-center">
    <div class="col-lg-10">
        {% include figure.liquid path="assets/img/pnee_256_diffuse.png" title="Diffuse" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          Cornell Box with diffuse materials rendered with 256 samples via the Path Tracer.
        </div>
    </div> 
</div>

<div class="row justify-content-center">
    <div class="col-lg-10">
        {% include figure.liquid path="assets/img/pnee_4096_mirrors.png" title="Mirrors" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          Cornell Box with mirror materials rendered with 4096 samples via the Path Tracer.
        </div>
    </div> 
</div>

<div class="row justify-content-center">
    <div class="col-lg-10">
        {% include figure.liquid path="assets/img/pnee_512_blue_yellow.png" title="Microfacet" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          Where I went beyond the coursework. The Cornell Box with microfacet materials rendered with 512 samples via the Path Tracer. The blue sphere has an intermediate roughness value, while the yellow sphere is modeled as very low roughness.
        </div>
    </div> 
</div>
