{% extends '../layout.swig' %}

{% block content %}
  <h1>{{ title }}</h1>
  <p>Welcome to {{ title }}</p>

     {% for article in articles %}
     <a target="blank" href="{{article.url}}">
     <h2>{{article.title}}</h2>
     {% endfor %}

{% endblock %}
