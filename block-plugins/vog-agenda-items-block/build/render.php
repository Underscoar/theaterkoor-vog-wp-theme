<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="agenda-items" <?php echo get_block_wrapper_attributes(); ?>>
    <?php if ($attributes['showTitle']) { ?>
    <h2><?php echo $attributes['title']; ?></h2>
    <?php } ?>
    <?php
        $today = date('Ymd');
        $args = array (
            'post_type' => 'vog_agenda',
                'meta_key' => 'event_date',
                'orderby' => 'meta_value',
                'order' => 'ASC',
                'meta_query' => array(
                    array(
                        'meta_key'  => 'event_date',
                        'compare'   => '>=',
                        'value'     => $today,
                        'type'      => 'DATETIME'
                    ),
                    array(
                        'meta_key'  => 'event_end_date',
                        'compare'   => '>=',
                        'value'     => $today,
                        'type'      => 'DATETIME'
                    ),
                ),
                'posts_per_page' => $attributes['amountOfItems'],
        );
        $the_query = new WP_Query( $args );
        $fmt = datefmt_create(
            'nl_NL',
            IntlDateFormatter::FULL,
            IntlDateFormatter::FULL,
            'Europe/Amsterdam',
            IntlDateFormatter::GREGORIAN,
            'd MMMM yyyy'
        );
    ?>

    <?php if ( $the_query->have_posts() ) : ?>
        <div class="agenda-items-list">
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <?php $post = get_post(); ?>
                <div class="agenda-item">
                    <a class="img-wrap" href="<?php the_permalink(); ?>">					
                        <?php if ( get_the_post_thumbnail() ) {							 
                            the_post_thumbnail();
                        } else { ?>
                            <div class="no-img-grey"></div>
                        <?php } ?>
                    </a>
                    <div class="content-wrap">
                        <div class="content-top">
                            <h3><?php the_title(); ?></h3>
                            <div class="small-desc">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                        <div class="content-bottom agenda-item-attributes">
                            <?php
                                $date_string = get_field( 'event_date' );
                                $end_date_string = get_field( 'event_end_date' );
                                if (is_string($date_string) && $date_string !== '') {
                            ?>
                                <div class="attribute">
                                    <i class="ph ph-calendar-dots"></i>
                                    <?php
                                        $date = DateTime::createFromFormat( 'Ymd', $date_string );
                                        $time = $date->format( 'U' );
    
                                        echo datefmt_format($fmt, $time);

                                        if (is_string($end_date_string) && $end_date_string !== '') {
                                            $end_date = DateTime::createFromFormat( 'Ymd', $end_date_string );
                                            $end_time = $end_date->format( 'U' );
        
                                            echo ' - ' . datefmt_format($fmt, $end_time);
                                        }
                                    ?>
                                </div>
                            <?php } ?>
    
                            <?php
                                $location_string = get_field( 'event_location' );
                                if (is_string($location_string) && $location_string !== '') {
                            ?>
                                <div class="attribute">
                                    <i class="ph ph-map-pin"></i>
                                    <?php echo $location_string; ?>
                                </div>
                            <?php } ?>
                        </div>
                    </div>
                    <div class="link-wrap">
                        <a href="<?php the_permalink(); ?>">
                            <i class="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    <?php wp_reset_postdata(); else : ?>
        <!-- GEEN ITEMS OFZO --> 
    <?php endif; ?>

    <?php if ($attributes['showAgendaLink']) { ?>
        <div class="go-to-posts-wrap">
            <a href="/agenda" class="btn btn-primary btn-bordered">
                <i class="ph ph-calendar-dots"></i>
                Hele agenda bekijken
            </a>
        </div>
    <?php } ?>
    
</section>