<?php

function hello_elementor_child_enqueue_scripts()
{
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/css/build/main.min.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
	wp_enqueue_script(
		'hello-elementor-child-script',
		get_stylesheet_directory_uri() . '/js/build/main.min.js',
		[
			'hello-elementor-theme-script',
		],
		'1.0.0'
	);
}

add_action('wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20);


?>