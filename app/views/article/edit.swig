{% extends '../layout.swig' %}

{% block content %}

<h2>{{title}}</h2>
<form action="/article/{{ article.id }}" method="post" onsubmit="return confirm('Are you sure?')">
	<label for="title">Title</label>
	<input class="u-full-width" type="title" value="{{ article.title }}" id="title" name="title">

	<label for="url">URL</label>
	<textarea id="url" class="u-full-width" placeholder="" name="url">{{ article.url }}</textarea>

	<label for="description">Description</label>
	<textarea id="description" class="u-full-width" placeholder="" name="description">{{ article.description }}</textarea>

	<label for="categories">Categories</label>
	<textarea id="description" class="u-full-width" placeholder="" name="categories">{{ article.categories }}</textarea>

	<label for="author">Author</label>
	<textarea id="author" class="u-full-width" placeholder="" name="author">{{ article.author }}</textarea>

	<input class="button-primary" type="submit" value="Submit">
	<a class="button" href="/article/{{ article.id }}">back</a>
</form>
<form action="/article/{{ article.id }}/delete" method="post" onsubmit="return confirm('Are you sure?')">
	<input class="button" type="submit" value="delete">
</form>

{% endblock %}
