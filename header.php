<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TP_Gutenberg
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class( 'lite-version relative-header classic-menu' ); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'tp-gutenberg' ); ?></a>

	<header id="masthead" class="site-header" role="banner">
        <div class="wrapper">
            <div class="site-branding">
                <div class="site-branding-text">
                    <h1 class="site-title"><a href="<?php echo esc_url( home_url('/') ) ?>" rel="home">test.</a></h1>
                </div><!-- .site-branding-text -->
            </div><!-- .site-branding -->

            <div id="site-header-menu" class="site-header-menu">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="icon"></span>
                    <span class="menu-label">Menu</span>
                </button>
                <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="Primary Menu">
	                <?php
						wp_nav_menu( array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
							'menu_class'        => 'menu nav-menu',
						) );
					?>
                </nav><!-- .main-navigation-->
            </div><!-- #site-header-menu -->
        </div><!-- .wrapper -->
    </header><!-- #masthead -->

	<div id="content" class="site-content">
