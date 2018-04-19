<?php

defined( 'ABSPATH' ) || exit;

add_action( 'enqueue_block_editor_assets', 'gutenberg_amit_enqueue_block_editor_assets' );

function gutenberg_amit_enqueue_block_editor_assets() {
	wp_enqueue_script(
		'gutenberg-amit',
		get_template_directory_uri() . '/inc/recipe-card/block.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( get_template_directory() . '/inc/recipe-card/block.js' )
	);
}

add_action( 'enqueue_block_assets', 'gutenberg_amit_enqueue_block_assets' );

function gutenberg_amit_enqueue_block_assets() {
	wp_enqueue_style(
		'gutenberg-amit',
		get_template_directory_uri() . '/inc/recipe-card/style.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/inc/recipe-card/style.css' )
	);
}
