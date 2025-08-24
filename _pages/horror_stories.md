---
layout: page
title: horror stories
permalink: /horror_stories/
nav: true
nav_order: 4
horizontal: false
---

<!-- pages/horror_stories.md -->
<div class="horror_stories">
{% if site.enable_horror_story_categories and page.display_categories %}
  <!-- Display categorized horror_stories -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_horror_stories = site.horror_stories | where: "category", category %}
  {% assign sorted_horror_stories = categorized_horror_stories | sort: "importance" %}
  <!-- Generate cards for each horror_story -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for horror_story in sorted_horror_stories %}
      {% include horror_stories_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for horror_story in sorted_horror_stories %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display horror_stories without categories -->

{% assign sorted_horror_stories = site.horror_stories | sort: "importance" %}

  <!-- Generate cards for each horror_story -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for horror_story in sorted_horror_stories %}
      {% include horror_stories_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for horror_story in sorted_horror_stories %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
