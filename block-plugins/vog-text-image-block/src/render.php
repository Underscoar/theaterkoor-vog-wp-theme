<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
    $classes = [];

    if ($attributes['order'] == 'ImageText') { array_push($classes, 'img-text'); }

    $classesString = count($classes) > 0 ? ' ' . implode(' ', $classes) : '';
?>

<?php if ($attributes['variant'] === 'small') { ?>
    <section <?php echo get_block_wrapper_attributes(); ?>>
        <div class="text-img text-img-small<?php echo $classesString; ?>">
            <div class="container p-0">
                <div class="row">
                    <?php if ($attributes['order'] == 'ImageText') { ?>
                        <div class="col-md-6">
                            <div class="img-container">
                                <div class="img-wrap">
                                    <div class="img-holder">
                                        <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                        <?php if ($attributes['isVideo']) { ?>
                                            <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                                <i class="ph-fill ph-play"></i>
                                            </a>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                    <div class="col-md-6">
                        <div class="content-wrap">
                            <h2><?php echo $attributes['title']; ?></h2>
                            <?php echo $content; ?>
                        </div>
                    </div>
                    <?php if ($attributes['order'] == 'TextImage') { ?>
                        <div class="col-md-6">
                            <div class="img-container">
                                <div class="img-wrap">
                                    <div class="img-holder">
                                        <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                        <?php if ($attributes['isVideo']) { ?>
                                            <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                                <i class="ph-fill ph-play"></i>
                                            </a>
                                        <?php } ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
<?php } else if ($attributes['variant'] === 'large') { ?>
    <section class="break-from-container container-fluid" <?php echo get_block_wrapper_attributes(); ?>>
        <div class="text-img text-img-large <?php echo $classesString; ?>">
            <div class="row">
                <?php if ($attributes['order'] == 'ImageText') { ?>
                    <div class="col-md-6">
                        <div class="img-container">
                            <div class="img-wrap">
                                <div class="img-holder">
                                    <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                    <?php if ($attributes['isVideo']) { ?>
                                        <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                            <i class="ph-fill ph-play"></i>
                                        </a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
                <div class="col-md-6">
                    <div class="content-wrap">
                        <h2><?php echo $attributes['title']; ?></h2>
                        <?php echo $content; ?>
                    </div>
                </div>
                <?php if ($attributes['order'] == 'TextImage') { ?>
                    <div class="col-md-6">
                        <div class="img-container">
                            <div class="img-wrap">
                                <div class="img-holder">
                                    <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                    <?php if ($attributes['isVideo']) { ?>
                                        <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                            <i class="ph-fill ph-play"></i>
                                        </a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } else if ($attributes['variant'] === 'featured') { ?>
    <section class="break-from-container container-fluid" <?php echo get_block_wrapper_attributes(); ?>>
        <div class="text-img text-img-featured <?php echo $classesString; ?>">
            <div class="row">
                <?php if ($attributes['order'] == 'ImageText') { ?>
                    <div class="col-md-6">
                        <div class="img-container">
                            <div class="img-wrap">
                                <div class="img-holder">
                                    <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                    <?php if ($attributes['isVideo']) { ?>
                                        <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                            <i class="ph-fill ph-play"></i>
                                        </a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
                <div class="col-md-6">
                    <div class="content-wrap">
                        <h2><?php echo $attributes['title']; ?></h2>
                        <?php echo $content; ?>
                    </div>
                </div>
                <?php if ($attributes['order'] == 'TextImage') { ?>
                    <div class="col-md-6">
                        <div class="img-container">
                            <div class="img-wrap">
                                <div class="img-holder">
                                    <img src="<?= $attributes['mediaUrl'] ?>" width="<?= $attributes['mediaWidth'] ?>" height="<?= $attributes['mediaHeight'] ?>">
                                    <?php if ($attributes['isVideo']) { ?>
                                        <a data-fslightbox href="<?=$attributes['videoLink']; ?>">
                                            <i class="ph-fill ph-play"></i>
                                        </a>
                                    <?php } ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </section>
<?php } ?>