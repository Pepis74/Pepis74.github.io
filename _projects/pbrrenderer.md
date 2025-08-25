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
To give some context, I did an internship with AUTIS Ingenieros, who owns inspection tunnels with a certain light configuration and many cameras positioned to detect superficial defects on car bodies, like scratches or small fibers. To upgrade these tunnels they wanted to use a computer vision model to better classify these imperfections. In order to train the model they needed a lot of images of car bodies with imperfections taken by these tunnel cameras. The first step was making a renderer that could generate photorealistic images of car bodies in those specific conditions. 

That's what I worked on. At first we decided to develop the rendering engine ourselves. So in order to do that I researched and implemented physically based shading, an irradiance cache for diffuse lighting, Monte Carlo ray tracing for specular reflections and a denoiser for the ray tracer. However, we realized that we had taken on a lot more than we could chew, specially considering that I didn't have any experience with photorealistic rendering prior to this internship. So we pivoted to adapting an existing engine to our needs, and we decided on AMD's Radeon ProRender. 

AUTIS already has a multipurpose simulation software written in C++. Thus, I developed an interface between this software and Radeon ProRender's SDK, with the objective of abstracting the complexities of Physically Based Rendering such that engineers with no previous experience with computer graphics could make use of Radeon ProRender's excellent rendering capabalities.



    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
