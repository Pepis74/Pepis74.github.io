---
layout: page
title: QuarantamaulaNX
description: The Quarantamaula engine ported to the Nintendo Switch.
img: assets/img/1.jpg
github: https://github.com/Pepis74/QuarantamaulaNX
importance: 2
category: videogames
---

I took a class in my degree about video game console architecture. For that class, a partner and I made a checkers game for the Nintendo Switch that runs on a ported version of my OpenGL engine, QuarantamaulaNX. 

For the project we employed devkitpro

Since the Nintendo Switch is a modern console that supports the API on which the engine is based, the environment is very similar to that used for PC development. Only a few changes had to be made, which I'll explain below:

- The engine uses GLFW as a graphics context handler and input handler. However, we saw that only one other library, EGL, seemed to be supported as a context handler for the Nintendo Switch, so we switched to it.
- As mentioned, GLFW was also used for input handling, but we needed to use the switch's input interface from devkipro's libnx library as the input handler. So we had to change the input event code and remap the existing controls to ones suitable for the console.
- The engine's resource loading paths (shaders, textures, models) had to be adapted to the romfs environment.
- The Switch version of OpenGL does not support 3D textures. Shadow filtering depended on a 3D texture, which acted as a two-dimensional array of sampling patterns, to associate each fragment with its pattern. So we switched to a 2D texture, where each column is a different sampling pattern. In other words, it acts as a one-dimensional array of patterns. And to associate each fragment with its pattern, we used a classic pseudo-random function substitute in GLSL.

```
fract(sin(dot(gl_FragCoord.xy, vec2(seed1, seed2))) * seed3);
```