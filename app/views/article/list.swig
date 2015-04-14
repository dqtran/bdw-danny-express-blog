{% extends '../layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>

    {% for article in articles %}
    <a target="blank" href="{{article.url}}">
    	<h2>{{article.title}}</h2>
    </a>
    <h3>{{article.description}}</h3>
    <a target="blank" href="/article/{{article.id}}">
    	<p>Read More!</p>
    </a>
    <br><br>
     {% endfor %}

{% endblock %}
