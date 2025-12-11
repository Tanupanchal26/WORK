<?php
// Custom functions for Volatus Aerospace theme

// Enqueue custom styles and scripts
function volatus_enqueue_assets() {
    wp_enqueue_style('volatus-custom-style', get_template_directory_uri() . '/custom-styles.css');
    wp_enqueue_script('volatus-custom-js', get_template_directory_uri() . '/custom-script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'volatus_enqueue_assets');

// Register navigation menus
function volatus_register_menus() {
    register_nav_menus(array(
        'primary' => 'Primary Navigation',
        'footer' => 'Footer Navigation'
    ));
}
add_action('init', 'volatus_register_menus');

// Add theme support
function volatus_theme_support() {
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'volatus_theme_support');

// Custom header function
function volatus_custom_header() {
    ?>
    <header class="volatus-header">
        <div class="container">
            <?php if (has_custom_logo()) : ?>
                <div class="logo">
                    <?php the_custom_logo(); ?>
                </div>
            <?php endif; ?>
            
            <nav class="main-navigation">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu',
                    'container' => false
                ));
                ?>
            </nav>
        </div>
    </header>
    <?php
}

// Custom footer function
function volatus_custom_footer() {
    ?>
    <footer class="volatus-footer">
        <div class="footer-content">
            <div class="footer-widgets">
                <?php if (is_active_sidebar('footer-1')) : ?>
                    <div class="footer-widget">
                        <?php dynamic_sidebar('footer-1'); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </footer>
    <?php
}
?>