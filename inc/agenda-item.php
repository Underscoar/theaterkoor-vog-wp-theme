<?php

// Custom agenda posts
function vog_custom_agenda_post() {
	register_post_type('vog_agenda',
		array(
			'labels'      => array(
				'name'          => __('Agenda items', 'textdomain'),
				'singular_name' => __('Agenda item', 'textdomain'),
				'add_new_item'	=> __('Agenda item', 'textdomain'),
				'edit_item'		=> __('Agenda item', 'textdomain'),
				'new_item'		=> __('Agenda item', 'textdomain'),
			),
			'supports'			=> array(
				'title',
				'editor',
				'excerpt',
				'thumbnail',
			),
			'public'      	=> true,
			'has_archive' 	=> true,
			'menu_icon'	  	=> 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#000000" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"></path></svg>')
		)
	);
}
add_action('init', 'vog_custom_agenda_post');

// Add the custom columns to the book post type:
add_filter( 'manage_vog_agenda_posts_columns', 'set_custom_edit_vog_agenda_columns' );
function set_custom_edit_vog_agenda_columns($columns) {
    unset( $columns['author'] );
    unset( $columns['date'] );
    $columns['event_date'] = __( 'Event datum', 'your_text_domain' );
    $columns['event_location'] = __( 'Event locatie', 'your_text_domain' );
 
    return $columns;
}

add_action( 'manage_vog_agenda_posts_custom_column' , 'custom_vog_agenda_column', 10, 2 );
function custom_vog_agenda_column( $column, $post_id ) {
    switch ( $column ) {

        case 'event_date' :
            $terms = get_field( 'event_date', $post_id  );
            if ( is_string( $terms ) ) {
				if ($terms === '') {
					echo '<em>Geen datum ingevuld</em>';
				}
				else {
					$date = DateTime::createFromFormat( 'Ymd', $terms );
					$time = $date->format( 'd-m-Y' );
					echo $time;
				}
			}
            else
                _e( 'Er is iets misgegaan met het ophalen van de datum', 'your_text_domain' );
			break;
		case 'event_location' :
			$terms = get_field( 'event_location', $post_id  );
            if ( is_string( $terms ) ) {
				if ($terms === '') {
					echo '<em>Geen locatie ingevuld</em>';
				}
                echo $terms;
			}
            else
                _e( 'Er is iets misgegaan met het ophalen van de locatie', 'your_text_domain' );
			break;
    }
}