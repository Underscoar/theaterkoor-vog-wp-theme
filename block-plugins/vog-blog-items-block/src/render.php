<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="agenda-items" <?php echo get_block_wrapper_attributes(); ?>>
    <h2><?php echo $attributes['title']; ?></h2>
    <?php
        $args = array (
                'post_type' => 'post',
                'orderby' => 'date',
                'order' => 'DESC',
                'posts_per_page' => 3,
        );

        $the_query = new WP_Query( $args );
    ?>

    <?php if ( $the_query->have_posts() ) : ?>
        <div class="row blog-items-list">
            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
                <?php $post = get_post(); ?>
                <div class="col-4 blog-item">
                    <div class="content-wrap">
                        <div class="content-top">
                            <a href="<?php the_permalink(); ?>" class="img-wrap">					
                                <?php if ( get_the_post_thumbnail() ) {							 
                                    the_post_thumbnail();
                                } else { ?>
                                    <div class="no-img-grey"></div>
                                <?php } ?>
                            </a>
                            <h3><?php the_title(); ?></h3>
                            <h4><?php the_date(); ?></h4>
                            <div class="small-desc">
                                <?php the_excerpt(); ?>
                            </div>
                        </div>
                        <div class="content-bottom">
                            <div class="link-wrap">
                                <a href="<?php the_permalink(); ?>" class="btn btn-primary">
                                    Lees meer
                                    <i class="ph ph-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endwhile; ?>
        </div>
    <?php wp_reset_postdata(); else : ?>
        <!-- GEEN ITEMS OFZO --> 
    <?php endif; ?>

    <div class="go-to-posts-wrap">
        <a href="/nieuws-blog" class="btn btn-primary btn-bordered">
            <i class="ph ph-calendar-dots"></i>
            Naar nieuws/blog gaan
        </a>
    </div>
    
</section>