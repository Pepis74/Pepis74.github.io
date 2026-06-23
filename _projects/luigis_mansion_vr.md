---
layout: page
title: Luigi's Mansion VR
description: "VR arcade game inspired on Luigi's Mansion I made as a project for my Master's degree"
img: assets/img/luigisVR.png
github: https://github.com/Pepis74/Luigis-Mansion-VR
importance: 5
category: videogames
---
This project is a VR arcade-style survival game I worked on for the Virtual Reality course in my Computer Graphics, Games and Virtual Reality Master's degree at Universidad Rey Juan Carlos. It's inspired by the original Luigi's Mansion on the GameCube. The player must survive as long as possible in a large, completely dark room while hostile Boo ghosts continuously spawn. The objective is to eliminate the Boos before they reach the player, as being touched by a Boo results in game over.

The player's primary tool is a flashlight, which serves both as a navigation aid and as a weapon. Shining the flashlight on a Boo immobilizes and damages it until it is defeated. The flashlight has limited battery life and must be recharged at one of four charging stations distributed around the map. Only one station is active at a time, and players must locate it using both its light and the sound it emits. The active charging station and the Boos are the only illuminated elements in the environment.

<!-- The outer structure still handles sizing and centering -->
<div class="row justify-content-center mt-3">
  <div class="col-lg-10">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe 
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/pqZHYqjAPXE?si=F9ZL1YOA5Xu1c20o"
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>
      </iframe>
    </div>
  </div>
</div>
<!-- The caption remains the same -->
<div class="caption">
    Showcase of Luigi's Mansion VR.
</div>

A key design goal was reducing VR motion sickness in a more immersive way. Traditional VR games often use a vignette effect that darkens the edges of the player's vision during movement, helping reduce discomfort but appearing artificial and non-diegetic.

To solve this, the game was designed from the beginning around darkness and a single light source, the player's flashlight. The flashlight beam naturally restricts the player's field of view, effectively functioning as a diegetic vignette. This approach integrates the anti-motion-sickness mechanism directly into the game's world and narrative, making it feel more natural and immersive.

The project makes extensive use of VR 3D audio to support both gameplay and immersion. Spatialized sound is essential because players must determine the locations of newly spawned Boos and identify which charging station is currently active. Both events emit directional audio cues that help players locate them within the environment.

Additionally, to reinforce the game's dark and eerie atmosphere, ambient rain sounds play continuously, while thunder and other creepy sound effects are randomly generated at different locations around the map. All of these sounds are spatialized, increasing the sense of presence and immersion.