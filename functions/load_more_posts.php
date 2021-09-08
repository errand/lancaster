<?php
add_action( 'wp_ajax_loadMorePosts', 'loadMorePosts' );
add_action( 'wp_ajax_nopriv_loadMorePosts', 'loadMorePosts' );

function loadMorePosts(){
	$paged          = $_POST[ 'paged' ] ? intval( $_POST[ 'paged' ]) : 1;
	$offset         = $_POST[ 'offset' ] ? intval( $_POST[ 'offset' ]) : 0;
	$posts_per_page = $_POST['posts_per_page'] ? intval( $_POST['posts_per_page'] ) : get_option('posts_per_page');
	$cat_id         = $_POST[ 'cat_id' ] ? intval( $_POST[ 'cat_id' ] ) : '';
	$tax            = $_POST[ 'tax' ] ? $_POST[ 'tax' ] : '';
	$term           = $_POST[ 'term' ] ? explode( ',', $_POST[ 'term' ] ) : ''; 

	$args = array(
		'post_type'      => 'post',
		'posts_per_page' => $posts_per_page,
		'post_status'    => 'publish',
		'paged'          => $paged,
		'offset'         => $offset,
	);

	if( !empty( $cat_id )) {
		$args[ 'cat' ] = $cat_id;
	}
	if( !empty( $tax )) {
		$args[ 'tax_query' ] = [
			[
				'taxonomy' => $tax,
				'terms'    => $term,
			],
		];
	}

	$context = Timber::get_context();
	$posts = new Timber\PostQuery( $args );
	$context[ 'posts' ] = $posts;
	
		$data  = array(
			'total'  => $posts->found_posts,
			'posts'  => Timber::compile( array( 'tease-ajax.twig' ), $context ),
		);

	wp_send_json( $data );
	wp_die();
}