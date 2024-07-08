<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<section class="gallery-container" <?php echo get_block_wrapper_attributes(); ?>>
<h2><?=$attributes['title']; ?></h2>
<?php
    $imagesArray = json_decode($attributes['images'], true);
?>
    <div class="gallery-wrap">
        <?php foreach ($imagesArray as $img) { ?>
            <div class="gallery-item">
                <a data-fslightbox="img-gallery" href="<?= $img['mediaURL']; ?>" class="img-wrap">
                    <img src="<?= $img['thumbnail']; ?>">
                </a>
            </div>
        <?php } ?>
    </div>
</section>