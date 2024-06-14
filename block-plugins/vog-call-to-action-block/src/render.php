<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="call-to-action-container purple-wall break-from-container" <?php echo get_block_wrapper_attributes(); ?>>
	<div class="container">
        <div class="row">
            <div class="col-6 left-col">
                <h2><?php echo $attributes['title']; ?></h2>
                <h3><?php echo $attributes['subtitle']; ?></h3>
                <p><?php echo $attributes['content']; ?></p>
            </div>
            <div class="col-6 right-col">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
</section>