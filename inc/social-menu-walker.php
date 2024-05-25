<?php
    class Social_Menu_Walker extends Walker_Nav_Menu {
        function start_el(&$output, $item, $depth=0, $args=[], $id=0) {
            $output .= "<a class='" .  implode(" ", $item->classes) . "' href='" . $item->url . "' target='_blank'>";
     
            $output .= "<i class='" . $item->title . "'></i>";
        }

        function end_el(&$output, $item, $depth=0, $args=null) {
            $output .= '</a>
            ';
        }
    }
?>