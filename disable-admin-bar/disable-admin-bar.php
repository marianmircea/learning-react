<?php
    /**
     * Plugin Name: Disable Admin Bar
     * Description: Learning how a WP plugin works. Just disable the admin bar
     * Version: 1.0
     * Author: Marian M.
     * Author URI: https://www.linkedin.com/in/marian-mircea/
     * License: GPLv2 or later
     */

    // Remove the admin bar from the front end
    add_filter( 'show_admin_bar', '__return_false' );