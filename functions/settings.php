<?php
add_action('acf/init', 'my_acf_init');

function my_acf_init() {
	if( function_exists('acf_add_options_page') ) {
		
		acf_add_options_page(array(
			'page_title' 	  => 'Theme General Settings',
			'menu_title'	  => 'Theme settings',
			'menu_slug' 	  => 'theme-general-settings',
			'capability'	  => 'edit_posts',
			'update_button'   => __( 'Обновить', 'acf' ),
			'updated_message' => __('Изменения сохранены', 'acf'),
			'redirect'		  => false
		));

		acf_add_options_sub_page(array(
			'page_title' 	  => 'Settings of the Main Page',
			'menu_title'	  => 'Main Page',
			'parent_slug'	  => 'theme-general-settings',
			'update_button'   => __( 'Обновить', 'acf' ),
			'updated_message' => __('Изменения сохранены', 'acf'),
		));
	}
}
