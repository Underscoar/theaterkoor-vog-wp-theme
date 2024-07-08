<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div class="swiper-slide">
    <div class="slide-content">
        <div class="content-data">
            <h3><?php echo $attributes['title']; ?></h3>
            <h4><?php echo $attributes['subtitle']; ?></h4>
        </div>
        <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>" alt="<?= $attributes['title'] ?>">
    </div>
</div>