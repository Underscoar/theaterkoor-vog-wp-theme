<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="contact-form-wrap break-from-container" <?php echo get_block_wrapper_attributes(); ?>>
    <div class="container container-small">
        <div class="text-wrap">
            <span role="doc-subtitle"><?php echo $attributes['subtitle']; ?></span>
            <h2><?php echo $attributes['title']; ?></h2>
            <p><?php echo $attributes['description']; ?></p>
        </div>
        <?php echo $content; ?>
    </div>
</section>
