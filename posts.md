---
layout: default
---
{% include nav.html %}

<div class="home">

  <h1 class="page-heading">記事一覧</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>


        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.url }}">{{ post.title }}</a><span class="post-meta"><small>{{ post.date | date: "%b %-d, %Y" }}</small></span>
        </h2>
      </li>
    {% endfor %}
  </ul>

</div>
