<?php
function tp_gutenberg_enqueue_block_services_editor_assets() {
	wp_enqueue_script(
		'tp-gutenberg-services',
		get_template_directory_uri() . '/blocks/services-block/block.js',
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'underscore' ),
		filemtime( get_template_directory() . '/blocks/services-block/block.js' )
	);
	wp_enqueue_style(
		'tp-gutenberg-services-block-editor',
		get_template_directory_uri() . '/blocks/services-block/editor.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/services-block/editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'tp_gutenberg_enqueue_block_services_editor_assets' );


function tp_gutenberg_enqueue_block_services_assets() {
	wp_enqueue_style(
		'tp-gutenberg-services-block-style',
		get_template_directory_uri() . '/blocks/services-block/style.css',
		array( 'wp-blocks' ),
		filemtime( get_template_directory() . '/blocks/services-block/style.css' )
	);
}
add_action( 'enqueue_block_assets', 'tp_gutenberg_enqueue_block_services_assets' );
