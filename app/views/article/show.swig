{% extends '../layout.swig' %}

{% block content %}

    {% for article in articles %}
    <a target="blank" href="{{article.url}}"><h2>{{article.title}}</h2></a>
    <p>{{article.guid}}</p>
    <h3>{{article.description}}</h3>
    <h4>{{article.author}}</h4>

     {% endfor %}

{% endblock %}
