{% extends '../layout.swig' %}

{% block content %}
  <div class="contents">
	  <h2>{{ title }}</h2>
	  <p>Welcome to {{ title }}</p>
	  	<a class="button" href="/article/create">Create</a>
	    {% for article in articles %}
	    	<div class="posts">
		    	<a target="blank" href="{{article.url}}">
		    		<h4>{{article.title}}</h4>
			    </a>
			    <h5>{{article.description|safe}}</h5>
			    <h6>{{article.createdAt|date('F jS, Y')}}</h6>
			    <a class="button button-primary" href="/article/{{article.id}}">Read More!</a>
					<a class="button" href="/article/{{ article.id }}/edit">edit</a>
		  	</div>
	    {% endfor %}
	</div>
{% endblock %}
