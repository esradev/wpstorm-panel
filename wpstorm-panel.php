<?php 
/**
 * Plugin Name: WPStorm Panel
 * Plugin URI: https://wpstorm.ir
 * Description: A Powerful Plugin for WordPress to add a user-friendly panel to your website.
 * Author: WPStorm Team
 * Author URI: https://wpstorm.ir
 * Version: 1.0.0
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: wpstorm-panel
 * Domain Path: /languages
 * Requires at least: 5.0
 * Tested up to: 6.4
 * Requires PHP: 7.0
 */

namespace WPStormPanel;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
  exit;
}


if ( class_exists( 'WPStormPanel' ) ) {
  return;
}

// Define WPStormPanel class
class WPStormPanel {

  private object $instance;

  public function get_instance() {
    if ( ! isset( $this->instance ) ) {
      $this->instance = new self();
    }

    return $this->instance;
  }

  public function __construct() {
    $this->define_constants();

    add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );

    add_action( 'admin_enqueue_scripts', [ $this, 'admin_enqueue_scripts' ] );
  }

  public function define_constants() {
    define( 'WPSTORM_PANEL_VERSION', '1.0.0' );
    define( 'WPSTORM_PANEL_FILE', __FILE__ );
    define( 'WPSTORM_PANEL_PATH', plugin_dir_path( WPSTORM_PANEL_FILE ) );
    define( 'WPSTORM_PANEL_URL', plugin_dir_url( WPSTORM_PANEL_FILE ) );
    define( 'WPSTORM_PANEL_BASENAME', plugin_basename( WPSTORM_PANEL_FILE ) );
    define( 'WPSTORM_PANEL_ADMIN_SLUG', 'wpstorm-panel' );
  }

  public function add_admin_menu() {
    add_menu_page(
      __( 'WPStorm Panel', 'wpstorm-panel' ),
      __( 'WPStorm Panel', 'wpstorm-panel' ),
      'manage_options',
      WPSTORM_PANEL_ADMIN_SLUG,
      [ $this, 'admin_page' ],
      'dashicons-art',
      60
    );
  }

  public function admin_page() {
    ?>
    <div class="wrap">
      <div id="wpstorm-panel-admin-dashboard"></div>
    </div>
    <?php
  }

  public function admin_enqueue_scripts() {
    if ( ! isset( $_GET['page'] ) || WPSTORM_PANEL_ADMIN_SLUG !== $_GET['page'] ) {
      return;
    }
    wp_enqueue_script( 'wpstorm-panel-admin', WPSTORM_PANEL_URL . 'build/admin/index.js', [ 'wp-element', 'wp-i18n' ], WPSTORM_PANEL_VERSION, true );

    wp_localize_script( 'wpstorm-panel-admin', 'wpstorm_panel_object', [
      'api_url' => esc_url_raw( rest_url() ),
      'nonce'   => wp_create_nonce( 'wp_rest' ),
    ] );

    wp_enqueue_style( 'wpstorm-panel-admin', WPSTORM_PANEL_URL . 'build/admin/index.css', [], WPSTORM_PANEL_VERSION );
  }

}

$WPStormPanel = new WPStormPanel();

