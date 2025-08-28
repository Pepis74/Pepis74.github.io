---
layout: page
title: Genetic Invaders
description: "Mobile arcade game based in Unity made to teach the player key concepts of genetics."
img: assets/img/genlogo.png
github: https://github.com/Pepis74/Genetic-Invaders
cv_pdf: er.pdf
importance: 3
category: videogames
---

I began developing games when 2017 turned into 2018, around the age of 14. There were many scrapped projects until I began the development of a new game as the summer of 2019 started. I worked on it steadily over the course of a year, with the quarantine helping to boost my productivity. And finally, around July of 2020, I released my first complete game, Genetic Invaders.

<!-- The outer structure still handles sizing and centering -->
<div class="row justify-content-center mt-3">
  <div class="col-lg-10">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe 
        class="embed-responsive-item"
        src="https://www.youtube.com/embed/rmM-3FvxsbU?si=tgW8zy6g83hcjHnT" 
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
    Genetic Invaders' Trailer.
</div>

Genetic Invaders is a unique mobile arcade game based around the concept of genetic transcription. This is a biological process in which a specific segment of DNA, called a gene, is used as a template to synthesize a complementary molecule of RNA. This more mobile molecule can then leave the nucleus and head to a different part of the cell where its genetic information will be processed to synthesize the protein it encodes. Genetic transcription is essentially the first step in gene expression.

DNA is a sequence made up of a combination of 4 different chemical bases. Think of it like an instructions book written in a language with only 4 letters. These 4 bases are Adenin (A), Thymine (T), Guanine (G) and Cytosine (C). 

To perform this transcription, an enzyme called RNA polymerase latches onto the DNA strand and travels along it, reading the sequence of bases one by one. For each base it reads on the DNA template, it adds a corresponding base to the new, growing RNA strand. This follows a strict set of complementary pairing rules:

- When it reads a Guanine (G), it adds a Cytosine (C) to the new RNA strand.

- When it reads a Cytosine (C), it adds a Guanine (G).

- When it reads a Thymine (T), it adds an Adenine (A).

However, RNA uses a slightly different alphabet than DNA. When RNA polymerase reads an Adenine (A) on the DNA, it does not add Thymine. Instead, it adds a different base called Uracil (U). This Uracil base is the RNA equivalent of Thymine.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/genetic_transcription.png" title="RNA transcription" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Genetic transcription, image courtesy of Khan Academy.
</div>

How does all this relate to the game? Well, in Genetic Invaders the player takes the role of RNA polymerase in the form of a ship. Each enemy spawns with a randomly generated DNA sequence. And each time the player types the correct complementary base to the one the enemy is presenting, the ship's gun shoots a bullet towards it. So, to eliminate enemies you must type the correct complementary RNA sequence.

Apart from this, the ship can move and perform a dash to avoid enemy attacks. Furthermore, the player can customize its ship with different amino acids, which act like passive abilities, different guns and different looks or skins.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/amino_acids.png" title="Amino acids customization" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
          The amino acids customization panel.
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/guns.png" title="Guns customization" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
          The guns customization panel.
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/skins.png" title="Skins customization" class="img-fluid rounded z-depth-1" %}
        <div class="caption">
          The skins customization panel.
        </div>
    </div>
</div>

In order to obtain all these customization items the game has multiple systems. An in game store, lootboxes that can be obtained through playing, items that can be obtained through progressing in the game and daily assignments that give miscellaneous rewards, such as letting you choose the item you want to work on unlocking, lootboxes or the store's currency.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/gen_assignments.png" title="Assignments screen" class="img-fluid rounded z-depth-1" %} 
        <div class="caption">
          The assignments screen.
      </div>
    </div> 
</div>
