<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<div class="swiper-slide">
    <div class="slide-content">
        <span class="year"><?php echo $attributes['year']; ?></span>
        <div class="content-data">
            <h3><?php echo $attributes['title']; ?></h3>
            <p><?php echo $attributes['content']; ?></p>
            <p><a href="<?php echo $attributes['link']; ?>">Lees meer</a></p>
        </div>
        <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
    </div>
</div>