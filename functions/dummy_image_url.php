<?php

function dummy_image_url ( $id ){
	$category        = get_the_category( $id );
    $cat_id          = $category[0]->cat_ID;
    $category_arg    = 'category_' . $cat_id;

    if ( get_the_post_thumbnail_url( $id ) ){
    	$image_url = get_the_post_thumbnail_url( $id );
    } else if( get_field( 'dummy_image_url', $category_arg ) ) {
    	$image_url = get_field( 'dummy_image_url', $category_arg );
    } else { 
    	$image_arr = get_field( 'global_noimage', 'options' );
    	$image_url = $image_arr[ 'url' ];
    }

		return ( $image_url );
}