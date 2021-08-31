<?php

function getPolls( $limit = 3 ) {
	$args = [
		'cat'            => 149,
		'post_status'    => 'publish',
		'posts_per_page' => $limit,
		'posts_orderby ' => 'date',
		'order'          => 'DESC',
	];

	$posts = Timber::get_posts( $args );
	return $posts; 
}