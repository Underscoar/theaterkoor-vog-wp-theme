<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="management-wrap break-from-container" <?php echo get_block_wrapper_attributes(); ?>>
    <div class="container">
        <h2><?php echo $attributes['title']; ?></h2>
        <div class="row">
            <div class="col-md-6 management-list-wrap">
            </div>
            <div class="col-md-6">
                <div class="swiper-container">
                    <button class="btn-management-slider btn-prev">
                        <i class="ph ph-arrow-left"></i>
                    </button>
                    <div class="swiper-wrap">
                        <div class="swiper management">
                            <div class="swiper-wrapper">
                                <?php echo $content; ?>
                            </div>
                        </div>
                    </div>
                    <button class="btn-management-slider btn-next">
                        <i class="ph ph-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>