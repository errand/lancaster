<?php
function getAuthorAvatar( $author ) {
	$all_meta_for_user = get_user_meta( $author->id );

	$avatar = isset( $all_meta_for_user[ 'wsl_current_user_image' ][ 0 ]) ? $all_meta_for_user[ 'wsl_current_user_image' ][ 0 ] : get_avatar_url( $author->id, array( 'size' => 150 ) );

	return $avatar;
}