<?php

function getNews( $limit = 10 ) {
	$args = [
		'post_status'    => 'publish',
		'posts_per_page' => $limit,
		'posts_orderby ' => 'date',
		'order'          => 'DESC',
		'post__not_in'   => get_option("sticky_posts"),
	];

	$posts = Timber::get_posts( $args );
	return $posts; 
}