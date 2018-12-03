<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function atom_block_cgb_block_assets() { // phpcs:ignore
	// Styles.
	wp_enqueue_style(
		'atom_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-editor' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: File modification time.
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'atom_block_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function atom_block_cgb_editor_assets() { // phpcs:ignore
	// Scripts.
	wp_enqueue_script(
		'atom_block-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: File modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'atom_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ) // Dependency to include the CSS after it.
		// filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: File modification time.
	);
}

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'atom_block_cgb_editor_assets' );


// Add custom block category
add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge(
		$categories,
		array(
			array(
				'slug' => 'atomic-design',
				'title' => __( 'Atomic Design', 'atomic-design' ),
				'icon'  => 'image-filter',
			),
		)
	);
}, 10, 2 );



$atomSVG='<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.2 198.2"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:15px;}</style></defs><title>atom</title><g id="atom"><circle class="cls-1" cx="99.1" cy="99.1" r="91.6"/><circle cx="99.1" cy="99.1" r="52.8"/><path d="M201.57,51.67a22.4,22.4,0,1,1-22.4-22.39A22.37,22.37,0,0,1,201.57,51.67Z" transform="translate(-7.87 -9.37)"/></g></svg>';


add_action( 'init', 'atomic_post_type' );
function atomic_post_type() {
    $labels = array(
		'name' => _x('Atomic Design', 'post type general name'),
        'singular_name' => _x('Atomic Element', 'post type singular name'),
        'add_new' => _x('Add New', 'atomic element'),
        'add_new_item' => __('Add New Atomic Element'),
        'edit_item' => __('Edit Atomic Element'),
        'new_item' => __('New Atomic Element'),
        'view_item' => __('View Atomic Element'),
        'search_items' => __('Search Atomic Elements'),
        'not_found' =>  __('Nothing found'),
        'not_found_in_trash' => __('Nothing found in Trash'),
        'parent_item_colon' => ''
    );
    $args = array(
        'public' => true,
		'labels' => $labels,
		'menu_icon' => 'data:image/svg+xml;base64,' . base64_encode('<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198.2 198.2"><defs><style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:15px;}</style></defs><title>atom</title><g id="atom"><circle class="cls-1" cx="99.1" cy="99.1" r="91.6"/><circle cx="99.1" cy="99.1" r="52.8"/><path d="M201.57,51.67a22.4,22.4,0,1,1-22.4-22.39A22.37,22.37,0,0,1,201.57,51.67Z" transform="translate(-7.87 -9.37)"/></g></svg>'),
		'hierarchical' => true,
		'show_in_rest' => true,
		'public' => true,
		'show_ui' => true,
		'capability_type' => 'post',
		'has_archive' => true,
		'supports' => array( 'title', 'editor', 'thumbnail'),
		'rewrite' => array( 'slug' => 'atomic-design', 'with_front' => false ),
		'taxonomies' => array( 'atom_cat'),
        'template' => array(
            array( 'atomic-design/block-atom-block', array(
                'align' => 'left',
            ) ),
            array( 'core/heading', array(
                'placeholder' => 'Add Author...',
            ) ),
            array( 'core/paragraph', array(
                'placeholder' => 'Add Description...',
            ) ),
        ),
    );
    register_post_type( 'atomic-design', $args );
}


add_action( 'init', 'atom_cat', 0);
function atom_cat() {
	register_taxonomy(
		'atom_cat',
		'atom_group',
		array(
			'labels' => array(
				'name' => 'Atom Elements',
				'menu_name' => 'Atom Elements',
				'singular_name' => 'Atom Element',
				'add_new_item' => 'Add New Atom Element',
				'new_item_name' => "New Atom Element",
				'update_item' => "Update Atom Element",
				'edit_item' => "Edit Atom Element",
				'not_found' => "No Atom Element Found",
			),
			'show_ui' => true,
			'show_tagcloud' => false,
			'hierarchical' => true,
			'show_admin_column' => true
		)
	);
}