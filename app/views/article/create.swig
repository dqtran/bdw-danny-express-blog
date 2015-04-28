{% extends '../layout.swig' %}

{% block content %}

<h2>{{title}}</h2>
<form action="/article/create/" method="post">
	<label for="title">Title</label>
	<input class="u-full-width" type="title" id="title" name="title">

	<label for="url">URL</label>
	<textarea id="url" class="u-full-width" placeholder="" name="url"></textarea>

	<label for="description">Description</label>
	<textarea id="description" class="u-full-width" placeholder="" name="description"></textarea>

	<label for="categories">Categories (Please seperate each categories by a coma)</label>
	<textarea id="description" class="u-full-width" placeholder="" name="categories"></textarea>

	<label for="author">Author</label>
	<textarea id="author" class="u-full-width" placeholder="" name="author"></textarea>

	<input class="button-primary" type="submit" value="Submit">
	<a class="button" href="/article/">back</a>
</form>

{% endblock %}
