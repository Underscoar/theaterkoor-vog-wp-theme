<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="productions-slider-wrap break-from-container" <?php echo get_block_wrapper_attributes(); ?>>
    <div class="slide-walls"></div>

    <div class="container">
        <div class="out-of-slider">
            <h2 class="slider-title"><?php echo $attributes['title']; ?></h2>
            <div class="active-slide-width-wrap">
                <div class="active-slide-width-item">
                    <div class="navigation-btns">
                        <button class="btn-prev">
                            <i class="ph ph-arrow-left"></i>
                        </button>
                        <button class="btn-next">
                            <i class="ph ph-arrow-right"></i>
                        </button>
                    </div>
                    <div class="years">
                        <span class="year">2024</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="container sub-container">
            <div class="swiper productions">
                <div class="swiper-wrapper">
                    <?php echo $content; ?>
                    <?php echo $content; ?>
                </div>
            </div>
        </div>

        <div class="out-of-slider">
            <div class="active-slide-width-wrap">
                <div class="active-slide-width-item">
                    <div class="slide-items-content"></div>
                </div>
            </div>
        </div>
    </div>
</section>