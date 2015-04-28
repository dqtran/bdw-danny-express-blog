{% extends '../layout.swig' %}

{% block content %}
  <div class="contents">
    {# {% for article in articles %} #}
    	<h2>{{title}}</h2>
	    <a target="blank" href="{{article.url}}">
	    	<h4>{{article.title}}</h4>
	    </a>
	    <h5>{{article.description|safe}}</h5>
	    <h6>{{article.createdAt|date('F jS, Y')}}</h6>
    {# {% endfor %} #}
    <a class="button button-primary" href="/article">back</a>
		<a class="button" href="/article/{{ article.id }}/edit">edit</a>
  </div>
{% endblock %}