<?php
function loadMorePosts(){

	$paged    = $_POST[ 'paged' ] ? intval( $_POST[ 'paged' ]) : 1;
	$offset = $_POST[ 'offset' ] ? intval( $_POST[ 'offset' ]) : 0;

	$args = array(
		'post_type'      => $post_type,
		'posts_per_page' => get_field('front_page_articles', 'options'),
		'post_status' => 'publish',
		'paged' => $paged,
		'offset' => $offset,
		'tag_id' => $tag,
		'date_query' => $date_query,
	);

	$context = Timber::get_context();
	$posts = new Timber\PostQuery( $args );
	$context[ 'posts' ] = $posts;
	
		$data  = array(
			'total' => $posts->found_posts,
			'posts' => Timber::compile( array( 'tease-ajax.twig' ), $context ),
		);

	wp_send_json( $data );
	wp_die();
}