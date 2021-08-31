<?php
add_action('acf/init', 'my_acf_init');

function my_acf_init() {
	if( function_exists('acf_add_options_page') ) {
		
		acf_add_options_page(array(
			'page_title' 	  => 'Основные настройки',
			'menu_title'	  => 'Настройки темы',
			'menu_slug' 	  => 'theme-general-settings',
			'capability'	  => 'edit_posts',
			'update_button'   => __( 'Обновить', 'acf' ),
			'updated_message' => __('Изменения сохранены', 'acf'),
			'redirect'		  => false
		));

		acf_add_options_sub_page(array(
			'page_title' 	  => 'Настройки главной страницы',
			'menu_title'	  => 'Главная страница',
			'parent_slug'	  => 'theme-general-settings',
			'update_button'   => __( 'Обновить', 'acf' ),
			'updated_message' => __('Изменения сохранены', 'acf'),
		));

		acf_add_options_sub_page(array(
			'page_title' 	  => 'Рекламные банеры',
			'menu_title'	  => 'Реклама',
			'parent_slug'	  => 'theme-general-settings',
			'update_button'   => __( 'Обновить', 'acf' ),
			'updated_message' => __('Изменения сохранены', 'acf'),
		));

	}
}
